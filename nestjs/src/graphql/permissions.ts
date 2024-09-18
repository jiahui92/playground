import { shield, deny, rule, and } from 'graphql-shield';
import * as utils from 'src/common/utils';

// 是否登录
// isAdmin

const isLogin = rule()(async () => {
  // return !!ctx.user;
  return true;
});

const isAdmin = rule()(async (parent, args, ctx) => {
  return utils.isAdmin(ctx);
});

export const permissions = shield(
  {
    Query: {
      '*': isLogin,
      // findManyCity: deny,
    },
    Mutation: {
      '*': deny,
      // createOneCity: and(isLogin, isAdmin),
    },
    CountryLanguage: isAdmin, // model级权限控制，防止gql嵌套级别的权限控制，比如city.country.countryLanguage
    City: {
      id: deny, // 字段级权限控制
    },
  },
  {
    // 黑名单模式：兜底权限控制规则，默认登录了就可以使用
    fallbackRule: isLogin,
  },
);
