import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateFeedingDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  babyId: number;

  @ApiProperty({ example: 'formula', description: 'breast | formula | mixed' })
  @IsString()
  type: string;

  @ApiProperty({ example: 120, required: false })
  @IsOptional()
  @IsNumber()
  amountMl?: number;

  @ApiProperty({ example: 10, required: false })
  @IsOptional()
  @IsNumber()
  durationMin?: number;

  @ApiProperty({ example: '2024-06-01T10:30:00+09:00' })
  @IsDateString()
  fedAt: string;
}