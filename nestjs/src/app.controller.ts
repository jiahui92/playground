import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { City } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getManyCity')
  async getManyCity(): Promise<City[]> {
    return await this.appService.getManyCity();
  }
}
