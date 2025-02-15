import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CoinModule } from './coin/coin.module';
import { PriceHistoryModule } from './price-history/price-history.module';

@Module({
  imports: [PrismaModule, CoinModule, UserModule, PriceHistoryModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
