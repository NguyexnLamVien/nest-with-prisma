import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { CoinService } from './coin.service';

@Injectable()
export class CoinTask {
    constructor(private readonly coinService: CoinService) { }

    @Cron('0 */12 * * *') // Mỗi 12 tiếng
    async handleCron() {
        console.log('Running cronjob to fetch coin data...');
        // await this.coinService.fetchData();
    }
}
