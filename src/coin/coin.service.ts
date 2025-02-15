import { Injectable } from '@nestjs/common';
// import { CreateCoinDto } from './dto/create-coin.dto';
// import { UpdateCoinDto } from './dto/update-coin.dto';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';

@Injectable()
export class CoinService {
  constructor(private model: PrismaClient) { }

  async fetchData(): Promise<void> {
    try {
      const response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100', {
        headers: { 'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY },
      });

      const data = response.data; // Update with the correct structure
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  // async create(createCoinDto: CreateCoinDto) {
  //   return 'This action adds a new coin';
  // }

  async findAll() {
    return this.model.coin.findMany();
  }

  async findOne(id: number) {
    return `This action returns a #${id} coin`;
  }

  // async update(id: number, updateCoinDto: UpdateCoinDto) {
  //   return `This action updates a #${id} coin`;
  // }

  async remove(id: number) {
    return `This action removes a #${id} coin`;
  }
}
