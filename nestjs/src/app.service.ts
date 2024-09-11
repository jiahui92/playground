import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';
import { city } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World! jiahui';
  }

  async getManyCity(): Promise<city[]> {
    const cities = await this.prisma.city.findMany({
      // take: 10,
      // select: { Name: true },
      where: {
        CountryCode: { equals: 'USA' },
      },
    });
    return cities;
  }
}
