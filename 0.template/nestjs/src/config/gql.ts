import { GqlApiConfig } from 'src/generated/genFilterPlugin';

// TODO 如果业务有需要，后续可以考虑在'src/generate/index'里配置limit的大小
export const GQL_QUERY_SIZE_Limit = 1000;

// 设置放开部分gql.api
export const gqlApiConfig: GqlApiConfig = {
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
