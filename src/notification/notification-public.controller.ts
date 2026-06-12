import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NotificationService } from './notification.service';
import { RespondLogDto } from './dto/respond-log.dto';

@ApiTags('notification-public')
@Controller('notification')
export class NotificationPublicController {
  constructor(private readonly notificationService: NotificationService) {}

  // 인증 불필요 (Service Worker에서 호출)
  @Post('logs/respond')
  respondLog(@Body() dto: RespondLogDto) {
    return this.notificationService.respondLog(dto);
  }
}