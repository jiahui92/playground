import { PrismaService } from './../../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CityService {
  deleteMany(ids: number[], prisma: PrismaService) {
    return prisma.city.deleteMany({ where: { ID: { in: ids } } });
  }
}
