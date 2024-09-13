import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CityService } from './city.service';
import { Prisma } from 'prisma/prisma-client';
import { PrismaService } from 'src/prisma.service';

@Controller('city')
export class CityController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cityService: CityService,
  ) {}

  @Get('findUnique/:id')
  findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.prisma.city.findUnique({
      where: { ID: id },
    });
  }

  @Get('findFirst')
  findFirst() {
    return this.prisma.city.findFirst();
  }

  @Post('create')
  create(@Body() city: Prisma.cityCreateArgs) {
    return this.prisma.city.create(city);
  }

  @Post('update')
  update(@Body() city: Prisma.cityUpdateArgs) {
    return this.prisma.city.update(city);
  }

  @Post('deleteMany')
  deleteMany(@Body() ids: number[]) {
    return this.cityService.deleteMany(ids, this.prisma);
  }
}
