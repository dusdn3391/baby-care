import { IsString, IsDateString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBabyDto {
  @ApiProperty({ example: '하준' })
  @IsString()
  name: string;

  @ApiProperty({ example: '2024-01-15' })
  @IsDateString()
  birthDate: string;

  @ApiProperty({ example: 'male', required: false })
  @IsOptional()
  @IsString()
  gender?: string;
}