import { extendType } from 'nexus';
import { isAdmin } from 'src/common/utils';

// 给city.population增加管理员权限，只是一个例子，建议在prisma.middleware.ts加权限校验
export const cityAuth = extendType({
  type: 'city',
  definition(t) {
    t.int('Population', {
      authorize: (_root, _args, ctx) => {
        return isAdmin(ctx);
      },
    });
  },
});
