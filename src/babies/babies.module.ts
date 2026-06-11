import { Module } from '@nestjs/common';
import { BabiesService } from './babies.service';
import { BabiesController } from './babies.controller';

@Module({
  providers: [BabiesService],
  controllers: [BabiesController],
})
export class BabiesModule {}