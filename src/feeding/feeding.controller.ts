import { Controller, Get, Post, Param, Body, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { FeedingService } from './feeding.service';
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('feeding')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('feeding')
export class FeedingController {
  constructor(private readonly feedingService: FeedingService) {}

  @Post()
  create(@Body() dto: CreateFeedingDto) {
    return this.feedingService.create(dto);
  }

  @Get('today/:babyId')
  getToday(@Param('babyId', ParseIntPipe) babyId: number) {
    return this.feedingService.getTodayFeedings(babyId);
  }

  @Get('stats/:babyId')  // ✅ 통계 엔드포인트 추가!
  getStats(@Param('babyId', ParseIntPipe) babyId: number) {
    return this.feedingService.getTodayStats(babyId);
  }

  @Get(':babyId')
  findAll(@Param('babyId', ParseIntPipe) babyId: number) {
    return this.feedingService.findAll(babyId);
  }
}