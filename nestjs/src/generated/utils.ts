import { lowerFirst } from 'lodash';

export interface GqlApiConfigItem {
  // 允许的query,支持通配符,如['*', 'find*']
  queries?: string[];
  // 允许的mutation,支持通配符,如['*', 'create*']
  mutations?: string[];
  // query不支持查询的字段，同时不能出现在查询参数里，比如where里
  // TODO 优化ts类型，不然输错了字段名称就尴尬了
  queryDisabledFields?: string[];
  // mutation参数里不允许出现的字段，一般代表由后端进行设置的字段
  // TODO 优化ts类型，不然输错了字段名称就尴尬了
  mutationDisabledFields?: string[];
  // 以下为非配置项，用于存储运行过程中的预处理数据
  queriesRegExp?: RegExp | undefined;
  mutationsRegExp?: RegExp | undefined;
  queryDisabledFieldsRegExp?: RegExp | undefined;
  mutationDisabledFieldsRegExp?: RegExp | undefined;
}

export interface GqlApiConfig {
  [Model: string]: GqlApiConfigItem;
}

let gqlApiConfig: GqlApiConfig;
export const setGqlApiConfig = (userConfig: GqlApiConfig) => {
  // 预处理gqlApiConfig数据
  Object.keys(userConfig).forEach((model) => {
    const config = userConfig[model];
    config.queriesRegExp = getRegExp(config.queries);
    config.mutationsRegExp = getRegExp(config.mutations);
    config.queryDisabledFieldsRegExp = getRegExp(config.queryDisabledFields);
    config.mutationDisabledFieldsRegExp = getRegExp(
      config.mutationDisabledFields,
    );
  });
  gqlApiConfig = userConfig;
};

export const getGqlApiConfigItem = (model) => gqlApiConfig[model];

/***
 * prisma目前支持的所有api
 *  https://www.prisma.io/docs/orm/reference/prisma-client-reference#findunique
 *
 * 注释掉的为paljs暂默认不支持的api，若要支持，需要手动添加模板
 *  https://github.com/paljs/prisma-tools/tree/main/packages/generator/src/nexus/templates
 */
export const prismaApi = {
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

interface GqlType {
  model: string;
  type: 'Query' | 'Mutation' | 'Input' | 'Output' | string;
  name: string;
}

// 将nexusType变量名转成gqlType
export function getGqlType(funcName: string): GqlType {
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
