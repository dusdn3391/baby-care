import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBabyDto } from './dto/create-baby.dto';
import { differenceInMonths } from 'date-fns';

@Injectable()
export class BabiesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateBabyDto, userId: number) {  // ← userId 추가!
    return this.prisma.baby.create({
      data: {
        name: dto.name,
        birthDate: new Date(dto.birthDate),
        gender: dto.gender,
        userId,  // ← 추가!
      },
    });
  }

  findAll(userId: number) {  // ← userId로 필터링
    return this.prisma.baby.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const baby = await this.prisma.baby.findUnique({ where: { id } });
    if (!baby) throw new NotFoundException('아기를 찾을 수 없습니다.');
    const ageMonths = differenceInMonths(new Date(), baby.birthDate);
    return { ...baby, ageMonths };
  }
}