import { JwtPayload } from './../modules/auth/auth.service';
import { shield, deny, rule, allow } from 'graphql-shield';
import { Role } from 'src/common/const';

const isLogin = rule()(async (parent, args, ctx) => {
  return !!ctx.user;
});

const isAdmin = rule()(async (parent, args, ctx) => {
  const { roles } = ctx?.user as JwtPayload;
  return roles?.includes(Role.ADMIN);
});

export const permissions = shield(
  {
    Query: {
      '*': allow,
      // findManyCity: deny,
    },
    Mutation: {
      '*': deny,
      // createOneUser: and(isLogin, isEmail),
    },
    User: isAdmin,
  },
  {
    // 黑名单模式：兜底权限控制规则，默认登录了就可以使用（已在req.middleware校验是否登录）
    fallbackRule: allow,
  },
);
