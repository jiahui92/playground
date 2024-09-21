import {
  Injectable,
  CanActivate,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/common/const';

const rolesKey = 'roles';
// @RolesGuard([Role.ADMIN])
export const RolesGuard = (roles: Role[]) => SetMetadata(rolesKey, roles);

@Injectable()
export class RolesGuardClass implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 优先controller.handler的设置，再取controller的设置
    const roles =
      this.reflector.get<string[]>(rolesKey, context.getHandler()) ||
      this.reflector.get<string[]>(rolesKey, context.getClass());
    // 只有配置了@Roles([Role.GUEST])，才默认为开放接口，不需要登录
    if (roles?.includes(Role.GUEST)) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) {
      return false;
    }
    return matchRoles(roles, user.roles);
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
