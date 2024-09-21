import {
  Injectable,
  CanActivate,
  ExecutionContext,
  SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants, Role } from 'src/common/const';
import { JwtPayload } from 'src/modules/auth/auth.service';

const rolesKey = 'roles';
// @RolesGuard([Role.ADMIN])
export const RolesGuard = (roles: Role[]) => SetMetadata(rolesKey, roles);

@Injectable()
export class RolesGuardClass implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 优先controller.handler的设置，再取controller的设置
    const roles =
      this.reflector.get<string[]>(rolesKey, context.getHandler()) ||
      this.reflector.get<string[]>(rolesKey, context.getClass());
    // 只有配置了@Roles([Role.GUEST])才为开放接口，不需要登录
    if (roles?.includes(Role.GUEST)) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token = extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload: JwtPayload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });

      if (!matchRoles(roles, payload.roles)) return false;
      request.user = payload;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }
}

function matchRoles(requiredRoles: string[], userRoles: string[]): boolean {
  if (userRoles?.includes(Role.ADMIN)) {
    return true;
  }
  if (!requiredRoles || requiredRoles.length === 0) {
    requiredRoles = [Role.USER];
  }
  return requiredRoles.some((role) => userRoles.includes(role));
}

function extractTokenFromHeader(request: Request): string | undefined {
  const [type, token] = request.headers.get('authorization')?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}
