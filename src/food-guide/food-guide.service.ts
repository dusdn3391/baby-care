import { Injectable } from '@nestjs/common';
import { getFoodGuide } from './food-guide.data';

@Injectable()
export class FoodGuideService {
  getGuide(ageMonths: number) {
    return getFoodGuide(ageMonths);
  }
}