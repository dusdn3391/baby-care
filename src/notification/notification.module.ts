import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { NotificationPublicController } from './notification-public.controller';

@Module({
  providers: [NotificationService],
  controllers: [NotificationController, NotificationPublicController],
  exports: [NotificationService],
})
export class NotificationModule {}