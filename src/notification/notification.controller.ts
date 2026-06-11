import { Controller, Post, Delete, Get, Body, Query, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { NotificationService } from './notification.service';
import { SubscribeDto } from './dto/subscribe.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('notification')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  // VAPID 공개키 조회 (프론트에서 구독 시 필요)
  @Get('vapid-public-key')
  getVapidPublicKey() {
    return this.notificationService.getVapidPublicKey();
  }

  // 푸시 구독 등록
  @Post('subscribe')
  subscribe(@Request() req, @Body() dto: SubscribeDto) {
    return this.notificationService.subscribe(req.user.id, dto);
  }

  // 푸시 구독 취소
  @Delete('unsubscribe')
  unsubscribe(@Request() req, @Query('endpoint') endpoint: string) {
    return this.notificationService.unsubscribe(req.user.id, endpoint);
  }

  // 테스트 알림 전송
  @Post('test')
  async test(@Request() req) {
    await this.notificationService.sendNotification(
      req.user.id,
      '🍼 테스트 알림',
      '푸시 알림이 정상적으로 작동하고 있어요!',
    );
    return { message: '테스트 알림을 전송했어요!' };
  }
}