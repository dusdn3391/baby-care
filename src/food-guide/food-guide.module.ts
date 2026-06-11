import { Module } from '@nestjs/common';
import { FoodGuideService } from './food-guide.service';
import { FoodGuideController } from './food-guide.controller';

@Module({
  providers: [FoodGuideService],
  controllers: [FoodGuideController],
})
export class FoodGuideModule {}