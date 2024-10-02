import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { City } from '@prisma/client';
import { RolesGuard } from './guards/roles.guard';
import { Role } from './common/const';

@Controller()
@RolesGuard([Role.GUEST])
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getHeartbeat')
  getHeartbeat(): string {
    return 'Service is alive!';
  }

  @Get('getManyCity')
  @RolesGuard([Role.USER])
  async getManyCity(): Promise<City[]> {
    return await this.appService.getManyCity();
  }
}
