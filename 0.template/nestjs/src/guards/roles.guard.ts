import {
  Injectable,
  CanActivate,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/common/const';
import { JwtPayload } from 'src/middlewares/req.middleware';

const rolesKey = 'roles';
// @RolesGuard([Role.ADMIN])
export const RolesGuard = (roles: Role[]) => SetMetadata(rolesKey, roles);

// !!! gql的校验在`src/graphql/plugins/AuthPlugin.ts`
@Injectable()
export class RolesGuardClass implements CanActivate {
  constructor(private reflector: Reflector) {}

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
    const user = request.user as JwtPayload;
    if (!user || !matchRoles(roles, user?.roles)) return false;

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
  return requiredRoles.some((role) => userRoles?.includes(role));
}
