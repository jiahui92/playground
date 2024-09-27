import { paljs } from '@paljs/nexus';
import { makeSchema } from 'nexus';
import { getPath } from 'src/common/utils';
import * as genTypes from './nexus';
import {
  asNexusMethod,
  NexusInputFieldDef,
  NexusOutputFieldDef,
  NexusPlugin,
} from 'nexus/dist/core';
import {
  getGqlApiConfigItem,
  setGqlApiConfig,
  getGqlType,
  prismaApi,
} from './utils';
import { GraphQLScalarType } from 'graphql';
import { VoidResolver } from 'graphql-scalars';

// 设置放开部分gql.api
setGqlApiConfig({
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
});

function setVoid(field: NexusInputFieldDef | NexusOutputFieldDef) {
  field.type = 'Void';
  if (field.wrapping?.length) {
    const nonNullIndex = field.wrapping.findIndex((w) => w === 'NonNull');
    if (nonNullIndex !== -1) {
      // 修改为非必填
      field.wrapping.splice(nonNullIndex, 1);
    }
  }
}

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
      paljs(),
      new NexusPlugin({
        name: 'onInstallExample',
        onInstall: (builder) => {
          const types = Object.keys(genTypes);
          types.forEach((type) => {
            const gqlType = getGqlType(type);
            // TODO 目前只过滤Query和Mutation，后续可以过滤掉用不到的ts类型
            if (['Query', 'Mutation'].includes(gqlType.type)) {
              const config = getGqlApiConfigItem(gqlType.model);
              const key = {
                Query: 'queriesRegExp',
                Mutation: 'mutationsRegExp',
              }[gqlType.type];
              const regExp = config?.[key];
              if (!regExp?.test(gqlType.name)) {
                return;
              }
            }
            builder.addType(genTypes[type]);
          });

          // Void: nexus不支持删除已经定义的字段，所以只能使用void替代删除的效果
          if (!builder.hasType('Void')) {
            builder.addType(
              asNexusMethod(new GraphQLScalarType(VoidResolver), 'void'),
            );
          }
        },
        onInputObjectDefinition: (block, objectConfig) => {
          if (block.typeName === 'UserCreateInput') {
            // block.field('id', { type: 'String' });
            // block.field('password', { type: 'String' });
            // block.field('role', { type: 'String' });
          }
          // console.log(block, objectConfig);
        },
        onAddOutputField(field) {
          // 修改prismaApi.outputType上字段的定义为Void
          // TODO 这里会有小概率replace不掉的情况，然后又取到了config的值
          const regExp = new RegExp(`${prismaApi.outputType.join('|')}$`);
          const model = field.parentType.replace(regExp, '');
          const config = getGqlApiConfigItem(model);
          if (config?.queryDisabledFieldsRegExp?.test(field.name)) {
            // 禁止查询该字段，无论如何都返回空字符串
            setVoid(field);
          }
        },
        onAddInputField(field) {
          // if (/user/i.test(field.parentType)) {
          //   console.log(field.parentType, field.name);
          // }
          // query: 类似whrerInput要使用queryDisabledFields去禁传，因为where过滤类似查询的效果
          const regExpStr1 = `(${prismaApi.inputType.query.join('|')})$`;
          if (new RegExp(`.*${regExpStr1}`).test(field.parentType)) {
            const model = field.parentType.replace(new RegExp(regExpStr1), '');
            const config = getGqlApiConfigItem(model);
            if (config?.queryDisabledFieldsRegExp?.test(field.name)) {
              setVoid(field);
            }
          }

          // mutation: 新增、更新等禁止某字段传参
          const regExpStr2 = `(${prismaApi.inputType.mutation.join('|')})$`;
          if (new RegExp(`.*${regExpStr2}`).test(field.parentType)) {
            const model = field.parentType.replace(new RegExp(regExpStr2), '');
            const config = getGqlApiConfigItem(model);
            if (config?.mutationDisabledFieldsRegExp?.test(field.name)) {
              setVoid(field);
            }
          }
        },
      }),
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
