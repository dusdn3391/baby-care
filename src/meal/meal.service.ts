import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { startOfDay, endOfDay } from 'date-fns';

@Injectable()
export class MealService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMealDto) {
    try {
      return await this.prisma.meal.create({
        data: {
          babyId: dto.babyId,
          menu: dto.menu,
          amountG: dto.amountG,
          reaction: dto.reaction,
          memo: dto.memo,
          eatenAt: new Date(dto.eatenAt),
        },
      });
    } catch (e:any) {
      if (e.code === 'P2003') {
        throw new BadRequestException('존재하지 않는 아기 ID예요. 먼저 아기를 등록해주세요.');
      }
      throw e;
    }
  }

  getTodayMeals(babyId: number) {
    const now = new Date();
    return this.prisma.meal.findMany({
      where: {
        babyId,
        eatenAt: { gte: startOfDay(now), lte: endOfDay(now) },
      },
      orderBy: { eatenAt: 'desc' },
    });
  }

  findAll(babyId: number) {
    return this.prisma.meal.findMany({
      where: { babyId },
      orderBy: { eatenAt: 'desc' },
    });
  }

  // ✅ 오늘 이유식 통계
  async getTodayStats(babyId: number) {
    const now = new Date();
    const meals = await this.prisma.meal.findMany({
      where: {
        babyId,
        eatenAt: { gte: startOfDay(now), lte: endOfDay(now) },
      },
    });

    const totalCount = meals.length;
    const totalAmountG = meals.reduce((sum, m) => sum + (m.amountG ?? 0), 0);
    const byReaction = meals.reduce((acc, m) => {
      if (m.reaction) acc[m.reaction] = (acc[m.reaction] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    const menus = meals.map(m => m.menu);

    return {
      date: now.toISOString().split('T')[0],
      totalCount,
      totalAmountG,
      byReaction,
      menus,
    };
  }
}