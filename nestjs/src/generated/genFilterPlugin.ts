import { VoidResolver } from 'graphql-scalars';
import { lowerFirst } from 'lodash';
import {
  asNexusMethod,
  NexusInputFieldDef,
  NexusOutputFieldDef,
  NexusPlugin,
} from 'nexus/dist/core';
import { GraphQLScalarType } from 'graphql';
import { Prisma } from '@prisma/client';

export type GqlApiConfig = {
  [key in Prisma.ModelName]?: GqlApiConfigItem;
};

interface GqlApiConfigItem {
  // 允许的query,支持通配符,如['*', 'find*']
  queries?: string[];
  // 允许的mutation,支持通配符,如['*', 'create*']
  mutations?: string[];
  // query不支持查询的字段(支持通配符)，同时也不能出现在查询参数里，比如where里
  queryDisabledFields?: string[];
  // mutation参数里不允许出现的字段(支持通配符)，一般代表由后端进行设置的字段
  mutationDisabledFields?: string[];
  // 以下为非配置项，用于存储运行过程中的预处理数据
  queriesRegExp?: RegExp | undefined;
  mutationsRegExp?: RegExp | undefined;
  queryDisabledFieldsRegExp?: RegExp | undefined;
  mutationDisabledFieldsRegExp?: RegExp | undefined;
}

interface GqlType {
  model: string;
  type: 'Query' | 'Mutation' | 'Input' | 'Output' | string;
  name: string;
}

/***
 * prisma目前支持的所有api
 *  https://www.prisma.io/docs/orm/reference/prisma-client-reference#findunique
 *
 * 注释掉的为paljs暂默认不支持的api，若要支持，需要手动添加模板
 *  https://github.com/paljs/prisma-tools/tree/main/packages/generator/src/nexus/templates
 */
const prismaApi = {
  query: [
    'findFirst',
    // 'findFirstOrThrow', // plajs默认不支持
    'findUnique',
    // 'findUniqueOrThrow', // plajs默认不支持
    'findMany',
    'findCount',
    'aggregate',
    // 'groupBy', // plajs默认不支持
    // 'count', // plajs默认不支持
  ],
  mutation: [
    'createOne',
    // 'createMany', // plajs默认不支持
    'updateOne',
    'updateMany',
    'deleteOne',
    'deleteMany',
    'upsertOne',
  ],
  outputType: [
    // 还有一个`${Model}`, 比如'User'
    'GroupByOutputType',
    'CountAggregateOutputType',
    'MinAggregateOutputType',
    'MaxAggregateOutputType',
  ],
  inputType: {
    query: [
      // TODO * 这里以后可能会有疑问，不允许查询传入，但是允许update,delete的where传入（极其小的概率，如果要兼容就得修改模板，并创建新Input）
      'WhereInput', // query+mutation *
      'WhereUniqueInput', // query+mutation *
      'OrderByWithRelationInput', // query?
      'OrderByWithAggregationInput', // query!
      'ScalarWhereWithAggregatesInput', // query!
      'CountOrderByAggregateInput', // query!
      'MaxOrderByAggregateInput', // query?
      'MinOrderByAggregateInput', // query?
    ],
    mutation: [
      'CreateInput', // mutation!
      'UncheckedCreateInput', // mutation!
      'CreateManyInput', // mutation!

      'UpdateInput', // mutation!
      'UncheckedUpdateInput', // mutation!
      'UpdateManyMutationInput', // mutation!
      'UncheckedUpdateManyInput', // mutation!
    ],
  },
};

let gqlApiConfig: GqlApiConfig;
function setGqlApiConfig(userConfig: GqlApiConfig) {
  // 预处理gqlApiConfig数据
  Object.keys(userConfig).forEach((model) => {
    const config = userConfig[model];
    config.queriesRegExp = getRegExp(config.queries);
    config.mutationsRegExp = getRegExp(config.mutations);
    config.queryDisabledFieldsRegExp = getRegExp(config.queryDisabledFields);
    config.mutationDisabledFieldsRegExp = getRegExp(
      config.mutationDisabledFields,
    );
    const fields: string[] = Object.values(Prisma[`${model}ScalarFieldEnum`]);
    config.queryDisabledFields?.forEach((disabledField) => {
      const index = fields.findIndex((f) => getRegExp([disabledField]).test(f));
      if (index === -1) {
        throw Error(
          `GqlApiConfig配置有问题: ${model}.queryDisabledFields.${disabledField}在模型中不存在`,
        );
      }
    });
    config.mutationDisabledFields?.forEach((disabledField) => {
      const index = fields.findIndex((f) => getRegExp([disabledField]).test(f));
      if (index === -1) {
        throw Error(
          `GqlApiConfig配置有问题: ${model}.mutationDisabledFields.${disabledField}在模型中不存在`,
        );
      }
    });
  });

  gqlApiConfig = userConfig;
}
function getGqlApiConfigItem(model: string): GqlApiConfigItem {
  return gqlApiConfig[model];
}

export function genFilterPlugin(genTypes, userConfig: GqlApiConfig) {
  setGqlApiConfig(userConfig);

  return new NexusPlugin({
    name: 'genFilterPlugin',
    onInstall: (builder) => {
      const types = Object.keys(genTypes);
      types.forEach((type) => {
        const gqlType = getGqlType(type);
        // TODO 目前只过滤Query和Mutation，后续可以过滤掉用不到的ts类型(可以做成通用过滤，类似去掉没被引用的变量)
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
  });
}

// 将nexusType变量名转成gqlType
function getGqlType(funcName: string): GqlType {
  // CityFindManyQuery, CityCreateOneMutation
  if (/.+(Mutation|Query)$/.test(funcName)) {
    const apiArr = [...prismaApi.query, ...prismaApi.mutation];
    const regexp = new RegExp(`(.*)(${apiArr.join('|')})(.*)`, 'i');
    const arr = funcName.match(regexp);
    const model = arr[1];
    let name = lowerFirst(arr[2]) + model;
    // 模板里的特殊处理 https://github.com/paljs/prisma-tools/blob/main/packages/generator/src/nexus/templates/findCount.ts
    if (arr[2] === 'FindCount') {
      name = `findMany${model}Count`;
    }
    const type = arr[3];
    return { model, type, name };
  }
  return {
    model: '',
    type: '',
    name: '',
  };
}

// 将字符串通配符数组转成正则表达式，方便校验
function getRegExp(strs: string[]): RegExp | undefined {
  if (!strs || !strs.length) return;
  // 替换通配符
  const regExpArr = strs.map((str) => {
    return str.replace('*', '.*');
  });
  return new RegExp(`^(${regExpArr.join('|')})$`);
}

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
