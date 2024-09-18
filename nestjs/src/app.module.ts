import { permissions } from './graphql/permissions';
import './generated/nexus-typings';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { makeSchema } from 'nexus';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { applyMiddleware } from 'graphql-middleware';
import {
  createComplexityRule,
  simpleEstimator,
} from 'graphql-query-complexity';
import { paljs } from '@paljs/nexus';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getPath, getUserFromToken, isDev } from './common/utils';
import * as genTypes from './generated/nexus';
import { PrismaService } from './prisma.service';
import { ReqMiddleware } from './middlewares/req.middleware';
import { BusinessModule } from './modules/index.module';
// import { FormatResponsePlugin } from './graphql/plugins';

const schema = makeSchema({
  types: [genTypes],
  shouldGenerateArtifacts: isDev(),
  plugins: [paljs()],
  outputs: {
    schema: getPath('src/generated/schema.gql'),
    typegen: getPath('src/generated/nexus-typings.ts'),
  },
  prettierConfig: getPath('.prettierrc'),
});

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      schema: applyMiddleware(schema, permissions),
      context: ({ req }) => {
        const user = getUserFromToken(req.token);
        return { prisma: req.prisma, user };
      },
      validationRules: [
        // 最多嵌套5层，防止DDOS或耗性能查询
        // TODO 嵌套的估算值？？？
        // TODO maximumComplexity的配置
        createComplexityRule({
          estimators: [simpleEstimator({ defaultComplexity: 1 })],
          maximumComplexity: 300,
        }),
      ],
      // autoSchemaFile: getPath('src/schema.gql'), // 搭配自动生成 schema.gql 文件
      playground: isDev(),
      introspection: isDev(), // 生产环境禁止获取query.__schema
      // TODO data可能为null
      // plugins: [FormatResponsePlugin],
    }),
    BusinessModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // 中间件
    consumer.apply(ReqMiddleware).forRoutes('*');
  }
}
