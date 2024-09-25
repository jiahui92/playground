import { Request, Response, NextFunction } from 'express';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/modules/auth/auth.service';
import { jwtConstants } from 'src/common/const';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ReqMiddleware implements NestMiddleware {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // 将 Prisma 实例添加到 req 对象中
    req['prisma'] = this.prismaService;

    // req.user
    const token = extractTokenFromHeader(req);
    if (token) {
      try {
        const payload: JwtPayload = await this.jwtService.verifyAsync(token, {
          secret: jwtConstants.secret,
        });
        req['user'] = payload;
      } catch {
        console.error('token error');
      }
    }

    next();
  }
}

function extractTokenFromHeader(request: Request): string | undefined {
  const [type, token] = request.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}
