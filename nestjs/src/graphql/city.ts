import { extendType } from 'nexus';
import { isAdmin } from 'src/common/utils';

// 给city.population增加管理员权限
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
