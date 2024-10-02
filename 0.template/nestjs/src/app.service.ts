import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';
import { City } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getManyCity(): Promise<City[]> {
    const cities = await this.prisma.city.findMany({
      // take: 10,
      // select: { Name: true },
      where: {
        countryCode: { equals: 'USA' },
      },
    });
    return cities;
  }
}
