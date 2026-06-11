import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateMealDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  babyId: number;

  @ApiProperty({ example: '고구마 퓨레' })
  @IsString()
  menu: string;

  @ApiProperty({ example: 80, required: false })
  @IsOptional()
  @IsNumber()
  amountG?: number;

  @ApiProperty({ example: 'good', description: 'good | normal | bad', required: false })
  @IsOptional()
  @IsString()
  reaction?: string;

  @ApiProperty({ example: '잘 먹었어요', required: false })
  @IsOptional()
  @IsString()
  memo?: string;

  @ApiProperty({ example: '2024-06-01T12:00:00+09:00' })
  @IsDateString()
  eatenAt: string;
}