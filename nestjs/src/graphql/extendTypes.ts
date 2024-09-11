import { scalarType, objectType } from 'nexus';
import { Kind } from 'graphql/language';

// 貌似nexus不支持新版prisma.decimal
const DecimalScalar = scalarType({
  name: 'Decimal',
  asNexusMethod: 'decimal', // 允许在 Nexus Schema 中使用 `decimal` 方法
  parseValue(value: string) {
    return parseFloat(value); // 从客户端传入时
  },
  serialize(value) {
    return value.toString(); // 返回给客户端时
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.FLOAT) {
      return parseFloat(ast.value);
    }
    return null;
  },
});

// https://github.com/graphql-nexus/nexus-plugin-prisma/issues/341
const BatchPayload = objectType({
  name: 'BatchPayload',
  definition(t) {
    t.int('count');
  },
});

export const extendTypes = [DecimalScalar, BatchPayload];
