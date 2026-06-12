import { Controller, Post, Delete, Get, Body, Query, Param, UseGuards, Request, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { NotificationService } from './notification.service';
import { SubscribeDto } from './dto/subscribe.dto';
import { CreateSettingDto } from './dto/create-setting.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('notification')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get('vapid-public-key')
  getVapidPublicKey() {
    return this.notificationService.getVapidPublicKey();
  }

  @Post('subscribe')
  subscribe(@Request() req, @Body() dto: SubscribeDto) {
    return this.notificationService.subscribe(req.user.id, dto);
  }

  @Delete('unsubscribe')
  unsubscribe(@Request() req, @Query('endpoint') endpoint: string) {
    return this.notificationService.unsubscribe(req.user.id, endpoint);
  }

  @Post('settings')
  createSetting(@Body() dto: CreateSettingDto) {
    return this.notificationService.createSetting(dto);
  }

  @Get('settings/:babyId')
  getSettings(@Param('babyId', ParseIntPipe) babyId: number) {
    return this.notificationService.getSettings(babyId);
  }

  @Get('logs/pending/:babyId')
  getPendingLogs(@Param('babyId', ParseIntPipe) babyId: number) {
    return this.notificationService.getPendingLogs(babyId);
  }
  @Delete('settings/:id')
deleteSetting(@Param('id', ParseIntPipe) id: number) {
  return this.notificationService.deleteSetting(id);
}
}