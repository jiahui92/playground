import { paljs } from '@paljs/nexus';
import { makeSchema } from 'nexus';
import { getPath } from 'src/common/utils';
import * as genTypes from './nexus';
import { genFilterPlugin, GqlApiConfig } from './genFilterPlugin';

// 设置放开部分gql.api
const gqlAPiConfig: GqlApiConfig = {
  User: {
    queries: ['find*'],
    queryDisabledFields: ['password', 'roles'],
    mutations: ['create*'],
    mutationDisabledFields: ['id', 'roles', 'createdAt'],
  },
  City: {
    queries: ['*'],
    queryDisabledFields: [],
    mutations: ['*'],
    mutationDisabledFields: [],
  },
};

export function getNexusSchema(shouldExitAfterGenerateArtifacts: boolean) {
  const schema = makeSchema({
    types: [],
    shouldExitAfterGenerateArtifacts,
    shouldGenerateArtifacts: true,
    prettierConfig: getPath('.prettierrc'),
    outputs: {
      schema: getPath('src/generated/schema.gql'),
      typegen: getPath('src/generated/nexus-typings.ts'),
    },
    plugins: [paljs(), genFilterPlugin(genTypes, gqlAPiConfig)],
  });
  return schema;
}

// export function getTypeGraphqlSchema() {
//   /**
//    * https://typegraphql.com/docs/performance.html#further-performance-tweaks
//    * 为了加速gql接口解析速度(快70%)，schema.prisma处已开启simpleResolver，意味着底层不会执行field.resolver进行权限控制，如有需要可考虑以下方案:
//    * 1. 屏蔽整个Model下的query和mutation，可配置xxx
//    * 2. 对Model做RoleGuard类的权限控制可考虑在Prisma.middleware处进行
//    * */
//   applyResolversEnhanceMap({
//     User: {
//       _all: [RolesGuard([Role.ADMIN])],
//     },
//   });
//   const schema = buildSchemaSync({
//     resolvers,
//     validate: false,
//   });
// }
