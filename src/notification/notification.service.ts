import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as webpush from 'web-push';
import { SubscribeDto } from './dto/subscribe.dto';
import { CreateSettingDto } from './dto/create-setting.dto';
import { RespondLogDto } from './dto/respond-log.dto';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {
    webpush.setVapidDetails(
      this.config.get<string>('VAPID_MAILTO') as string,
      this.config.get<string>('VAPID_PUBLIC_KEY') as string,
      this.config.get<string>('VAPID_PRIVATE_KEY') as string,
    );
  }

  // ===== 구독 관리 =====
  async subscribe(userId: number, dto: SubscribeDto) {
    return this.prisma.pushSubscription.upsert({
      where: { endpoint: dto.endpoint },
      update: { p256dh: dto.keys.p256dh, auth: dto.keys.auth },
      create: {
        userId,
        endpoint: dto.endpoint,
        p256dh: dto.keys.p256dh,
        auth: dto.keys.auth,
      },
    });
  }

  async unsubscribe(userId: number, endpoint: string) {
    return this.prisma.pushSubscription.deleteMany({ where: { userId, endpoint } });
  }

  getVapidPublicKey() {
    return { publicKey: this.config.get('VAPID_PUBLIC_KEY') };
  }

  // ===== 알림 발송 =====
  async sendNotification(userId: number, payload: Record<string, any>) {
    const subscriptions = await this.prisma.pushSubscription.findMany({ where: { userId } });
    const body = JSON.stringify(payload);

    for (const sub of subscriptions) {
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          body,
        );
      } catch (e: any) {
        this.logger.error(`알림 전송 실패: ${e.message}`);
        if (e.statusCode === 410) {
          await this.prisma.pushSubscription.delete({ where: { id: sub.id } });
        }
      }
    }
  }

  // ===== 알림 설정 CRUD =====
  async createSetting(dto: CreateSettingDto) {
    return this.prisma.notificationSetting.upsert({
      where: {
        // babyId + type 조합으로 1개만 유지하고 싶다면 unique 제약을 schema에 추가해도 됨
        id: await this.findSettingId(dto.babyId, dto.type) ?? -1,
      },
      update: {
        mode: dto.mode,
        intervalMin: dto.intervalMin,
        fixedTimes: dto.fixedTimes,
        enabled: dto.enabled ?? true,
      },
      create: {
        babyId: dto.babyId,
        type: dto.type,
        mode: dto.mode,
        intervalMin: dto.intervalMin,
        fixedTimes: dto.fixedTimes,
        enabled: dto.enabled ?? true,
      },
    });
  }

  private async findSettingId(babyId: number, type: string) {
    const existing = await this.prisma.notificationSetting.findFirst({ where: { babyId, type } });
    return existing?.id;
  }

  getSettings(babyId: number) {
    return this.prisma.notificationSetting.findMany({ where: { babyId } });
  }
  async deleteSetting(id: number) {
    return this.prisma.notificationSetting.delete({ where: { id } });
  }
  // ===== 알림 로그 (응답 처리) =====
  getPendingLogs(babyId: number) {
    return this.prisma.notificationLog.findMany({
      where: { babyId, status: 'pending' },
      orderBy: { scheduledAt: 'desc' },
    });
  }

  async respondLog(dto: RespondLogDto) {
    return this.prisma.notificationLog.update({
      where: { id: dto.logId },
      data: { status: dto.status },
    });
  }

  // ===== Cron: 1분마다 체크 =====
  @Cron(CronExpression.EVERY_MINUTE)
  async checkSchedules() {
  const now = new Date();
  this.logger.log(`⏰ Cron 실행: ${now.toLocaleTimeString('ko-KR')}`);    const settings = await this.prisma.notificationSetting.findMany({
      where: { enabled: true },
      include: { baby: { include: { user: true, feedings: { orderBy: { fedAt: 'desc' }, take: 1 }, meals: { orderBy: { eatenAt: 'desc' }, take: 1 } } } },
    });

    for (const setting of settings) {
      const shouldFire = this.shouldFireNow(setting, now);
      if (!shouldFire) continue;

      // 같은 시간대(±5분) 중복 발송 방지: 최근 10분 내 같은 type의 pending/done 로그가 있으면 skip
      const recent = await this.prisma.notificationLog.findFirst({
        where: {
          babyId: setting.babyId,
          type: setting.type,
          scheduledAt: { gte: new Date(now.getTime() - 10 * 60 * 1000) },
        },
      });
      if (recent) continue;

      const log = await this.prisma.notificationLog.create({
        data: {
          babyId: setting.babyId,
          type: setting.type,
          scheduledAt: now,
          status: 'pending',
        },
      });

      const baby = setting.baby;
      const title = setting.type === 'feeding' ? '🍼 수유 시간이에요!' : '🍽️ 이유식 시간이에요!';
      const body = `${baby.name}의 ${setting.type === 'feeding' ? '수유' : '이유식'} 시간이 다가왔어요. 기록하셨나요?`;

      await this.sendNotification(baby.userId, {
        title,
        body,
        data: { logId: log.id, type: setting.type, babyId: setting.babyId },
        actions: [
          { action: 'done', title: '✅ 했어요' },
          { action: 'skip', title: '⏭️ 아직요' },
        ],
      });
    }
  }

  private shouldFireNow(setting: any, now: Date): boolean {
    if (setting.mode === 'fixed') {
      if (!setting.fixedTimes) return false;
      const times = setting.fixedTimes.split(',').map((t: string) => t.trim());
      return times.some((t: string) => {
        const [h, m] = t.split(':').map(Number);
        const diffMin = Math.abs((now.getHours() * 60 + now.getMinutes()) - (h * 60 + m));
        return diffMin <= 5;
      });
    }

    if (setting.mode === 'interval') {
      if (!setting.intervalMin) return false;
      const baby = setting.baby;
      const last = setting.type === 'feeding'
        ? baby.feedings?.[0]?.fedAt
        : baby.meals?.[0]?.eatenAt;

      if (!last) return false;

      const elapsedMin = (now.getTime() - new Date(last).getTime()) / (60 * 1000);
      return Math.abs(elapsedMin - setting.intervalMin) <= 5;
    }

    return false;
  }
  
}