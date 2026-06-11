import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as webpush from 'web-push';
import { SubscribeDto } from './dto/subscribe.dto';
import { subHours, startOfDay, endOfDay } from 'date-fns';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {
    // VAPID 설정
    webpush.setVapidDetails(
      this.config.get('VAPID_MAILTO'),
      this.config.get('VAPID_PUBLIC_KEY'),
      this.config.get('VAPID_PRIVATE_KEY'),
    );
  }

  // 구독 저장
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

  // 구독 취소
  async unsubscribe(userId: number, endpoint: string) {
    return this.prisma.pushSubscription.deleteMany({
      where: { userId, endpoint },
    });
  }

  // 특정 유저에게 알림 전송
  async sendNotification(userId: number, title: string, body: string) {
    const subscriptions = await this.prisma.pushSubscription.findMany({
      where: { userId },
    });

    const payload = JSON.stringify({ title, body });

    for (const sub of subscriptions) {
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          payload,
        );
      } catch (e: any) {
        this.logger.error(`알림 전송 실패: ${e.message}`);
        // 만료된 구독 삭제
        if (e.statusCode === 410) {
          await this.prisma.pushSubscription.delete({ where: { id: sub.id } });
        }
      }
    }
  }

  // 🍼 매 30분마다 수유 알림 체크
  @Cron('0 */30 * * * *')
  async checkFeedingAlerts() {
    this.logger.log('수유 알림 체크 중...');
    const babies = await this.prisma.baby.findMany({
      include: { user: true },
    });

    for (const baby of babies) {
      const lastFeeding = await this.prisma.feeding.findFirst({
        where: { babyId: baby.id },
        orderBy: { fedAt: 'desc' },
      });

      if (!lastFeeding) continue;

      const hoursSinceLast =
        (Date.now() - lastFeeding.fedAt.getTime()) / (1000 * 60 * 60);

      // 마지막 수유 후 3시간 이상 지났으면 알림
      if (hoursSinceLast >= 3) {
        const hours = Math.floor(hoursSinceLast);
        await this.sendNotification(
          baby.userId,
          '🍼 수유 시간이에요!',
          `${baby.name}이(가) 마지막 수유 후 ${hours}시간이 지났어요.`,
        );
      }
    }
  }

  // 🥕 매일 오전 9시, 오후 1시, 오후 5시 이유식 알림
  @Cron('0 0 9,13,17 * * *')
  async checkMealAlerts() {
    this.logger.log('이유식 알림 체크 중...');
    const babies = await this.prisma.baby.findMany({
      include: { user: true },
    });

    for (const baby of babies) {
      const now = new Date();
      const todayMeals = await this.prisma.meal.findMany({
        where: {
          babyId: baby.id,
          eatenAt: { gte: startOfDay(now), lte: endOfDay(now) },
        },
      });

      // 오늘 이유식을 아직 안 먹였으면 알림
      if (todayMeals.length === 0) {
        await this.sendNotification(
          baby.userId,
          '🥕 이유식 시간이에요!',
          `${baby.name}이(가) 오늘 아직 이유식을 먹지 않았어요.`,
        );
      }
    }
  }

  // VAPID 공개키 반환 (프론트엔드에서 구독 시 필요)
  getVapidPublicKey() {
    return { publicKey: this.config.get('VAPID_PUBLIC_KEY') };
  }
}