import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNumber } from 'class-validator';

export class RespondLogDto {
  @ApiProperty() @IsNumber() logId: number;

  @ApiProperty({ example: 'done', description: 'done | skipped' })
  @IsIn(['done', 'skipped'])
  status: string;
}