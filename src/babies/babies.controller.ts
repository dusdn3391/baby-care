import { Controller, Get, Post, Param, Body, ParseIntPipe, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { BabiesService } from './babies.service';
import { CreateBabyDto } from './dto/create-baby.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('babies')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)  // ← 인증 필요!
@Controller('babies')
export class BabiesController {
  constructor(private readonly babiesService: BabiesService) {}

  @Post()
  create(@Body() dto: CreateBabyDto, @Request() req) {
    return this.babiesService.create(dto, req.user.id);  // ← userId 전달
  }

  @Get()
  findAll(@Request() req) {
    return this.babiesService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.babiesService.findOne(id);
  }
}