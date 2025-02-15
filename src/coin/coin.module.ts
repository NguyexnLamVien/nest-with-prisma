import { Module } from '@nestjs/common';
import { CoinService } from './coin.service';
import { CoinController } from './coin.controller';
import { CoinTask } from './coin.task';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaClient } from '@prisma/client';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [CoinController],
  providers: [CoinService, CoinTask, PrismaClient],
  imports: [ScheduleModule.forRoot(), HttpModule],
})
export class CoinModule { }
