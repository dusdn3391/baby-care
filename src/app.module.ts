import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BabiesModule } from './babies/babies.module';
import { FeedingModule } from './feeding/feeding.module';
import { MealModule } from './meal/meal.module';
import { FoodGuideModule } from './food-guide/food-guide.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(), 
    PrismaModule,    
    AuthModule,
    UsersModule,
    BabiesModule,
    FeedingModule,
    MealModule,
    FoodGuideModule,
    NotificationModule,
    ScheduleModule.forRoot(),
    NotificationModule,
  ],
})
export class AppModule {}