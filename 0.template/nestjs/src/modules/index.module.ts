import { CityModule } from './city/city.module';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

// 简单逻辑可以直接写controller，待逻辑复杂后再抽service和module
@Module({
  imports: [CityModule],
  controllers: [],
  providers: [PrismaService],
})
export class BusinessModule {}
