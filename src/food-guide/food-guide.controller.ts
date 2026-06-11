import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FoodGuideService } from './food-guide.service';

@ApiTags('food-guide')
@Controller('food-guide')
export class FoodGuideController {
  constructor(private readonly foodGuideService: FoodGuideService) {}

  @Get(':ageMonths')
  getGuide(@Param('ageMonths', ParseIntPipe) ageMonths: number) {
    return this.foodGuideService.getGuide(ageMonths);
  }
}