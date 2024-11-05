import { paljs } from '@paljs/nexus';
import { makeSchema } from 'nexus';
import { getPath } from 'src/common/utils';
import * as genTypes from './nexus';
import { genFilterPlugin } from './genFilterPlugin';
import { gqlApiConfig } from 'src/config/gql';
import { Prisma } from '@prisma/client';

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
    plugins: [
      // https://github.com/paljs/prisma-tools/pull/341
      // 避免内部require('@prisma/client')，导致慢查询
      paljs({ prismaSelectOptions: { dmmf: [Prisma.dmmf] } }),
      genFilterPlugin(genTypes, gqlApiConfig),
    ],
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
