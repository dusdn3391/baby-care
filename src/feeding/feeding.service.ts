import { Injectable, BadRequestException  } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { startOfDay, endOfDay } from 'date-fns';

@Injectable()
export class FeedingService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateFeedingDto) {
    try{
      return this.prisma.feeding.create({
        data: {
          babyId: dto.babyId,
          type: dto.type,
          amountMl: dto.amountMl,
          durationMin: dto.durationMin,
          fedAt: new Date(dto.fedAt),
        },
      });
    }catch (e : any) {
      if (e.code === 'P2003'){
        throw new BadRequestException('존재하지 않은 아기 ID예요. 먼저 아기를 등록해주세요.');
      }
      throw e;
    }
  }

  getTodayFeedings(babyId: number) {
    const now = new Date();
    return this.prisma.feeding.findMany({
      where: {
        babyId,
        fedAt: {
          gte: startOfDay(now),
          lte: endOfDay(now),
        },
      },
      orderBy: { fedAt: 'desc' },
    });
  }

  findAll(babyId: number) {
    return this.prisma.feeding.findMany({
      where: { babyId },
      orderBy: { fedAt: 'desc' },
    });
  }
  

async getTodayStats(babyId: number) {
    const now = new Date();
    const feedings = await this.prisma.feeding.findMany({
      where: {
        babyId,
        fedAt: { gte: startOfDay(now), lte: endOfDay(now) },
      },
    });

    const totalCount = feedings.length;
    const totalAmountMl = feedings.reduce((sum, f) => sum + (f.amountMl ?? 0), 0);
    const totalDurationMin = feedings.reduce((sum, f) => sum + (f.durationMin ?? 0), 0);
    const byType = feedings.reduce((acc, f) => {
      acc[f.type] = (acc[f.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      date: now.toISOString().split('T')[0],
      totalCount,
      totalAmountMl,
      totalDurationMin,
      byType,
    };
  }
}