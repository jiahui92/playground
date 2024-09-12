import { Request, Response, NextFunction } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ReqMiddleware implements NestMiddleware {
  constructor(private readonly prismaService: PrismaService) {}

  use(req: Request, res: Response, next: NextFunction) {
    // 将 Prisma 实例添加到 req 对象中
    req['prisma'] = this.prismaService;
    next();
  }
}
