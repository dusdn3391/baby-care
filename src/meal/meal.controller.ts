import { Controller, Get, Post, Param, Body, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { MealService } from './meal.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('meal')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Post()
  create(@Body() dto: CreateMealDto) {
    return this.mealService.create(dto);
  }

  @Get('today/:babyId')
  getToday(@Param('babyId', ParseIntPipe) babyId: number) {
    return this.mealService.getTodayMeals(babyId);
  }

  @Get('stats/:babyId')  // ✅ 통계 엔드포인트 추가!
  getStats(@Param('babyId', ParseIntPipe) babyId: number) {
    return this.mealService.getTodayStats(babyId);
  }

  @Get(':babyId')
  findAll(@Param('babyId', ParseIntPipe) babyId: number) {
    return this.mealService.findAll(babyId);
  }
}