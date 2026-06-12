import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional, IsBoolean, IsIn } from 'class-validator';

export class CreateSettingDto {
  @ApiProperty() @IsNumber() babyId: number;

  @ApiProperty({ example: 'feeding', description: 'feeding | meal' })
  @IsIn(['feeding', 'meal'])
  type: string;

  @ApiProperty({ example: 'interval', description: 'interval | fixed' })
  @IsIn(['interval', 'fixed'])
  mode: string;

  @ApiProperty({ example: 180, required: false, description: '분 단위 (mode=interval)' })
  @IsOptional() @IsNumber()
  intervalMin?: number;

  @ApiProperty({ example: '09:00,13:00,17:00', required: false, description: 'mode=fixed' })
  @IsOptional() @IsString()
  fixedTimes?: string;

  @ApiProperty({ default: true, required: false })
  @IsOptional() @IsBoolean()
  enabled?: boolean;
}