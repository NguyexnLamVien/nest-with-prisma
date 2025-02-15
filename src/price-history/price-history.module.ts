import { Module } from '@nestjs/common';
import { PriceHistoryService } from './price-history.service';
import { PriceHistoryController } from './price-history.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [PriceHistoryController],
  providers: [PriceHistoryService, PrismaClient],
})
export class PriceHistoryModule { }
  