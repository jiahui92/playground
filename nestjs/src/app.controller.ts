import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { NexusGenObjects } from './generated/typings';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getManyCity')
  async getManyCity(): Promise<NexusGenObjects['city'][]> {
    return await this.appService.getManyCity();
  }
}
