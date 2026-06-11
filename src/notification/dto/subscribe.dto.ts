import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsObject } from 'class-validator';

export class SubscribeDto {
  @ApiProperty({ example: 'https://fcm.googleapis.com/fcm/send/...' })
  @IsString()
  endpoint: string;

  @ApiProperty()
  @IsObject()
  keys: {
    p256dh: string;
    auth: string;
  };
}