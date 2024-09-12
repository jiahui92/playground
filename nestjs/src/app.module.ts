import { MiddlewareConsumer, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { makeSchema, fieldAuthorizePlugin } from 'nexus';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getPath, getUserFromToken, isDev } from './common/utils';
import * as genTypes from './generated/nexus';
import * as extendTypes from './graphql/extendTypes';
import { cityAuth } from './graphql/city';
import { PrismaService } from './prisma.service';
import { ReqMiddleware } from './middleware/req.middleware';

const schema = makeSchema({
  types: [extendTypes, genTypes, cityAuth],
  shouldGenerateArtifacts: isDev(),
  outputs: {
    schema: getPath('src/generated/schema.gql'),
    typegen: getPath('src/generated/typings.ts'),
  },
  prettierConfig: getPath('.prettierrc'),
  plugins: [fieldAuthorizePlugin()],
});

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      schema,
      context: ({ req }) => {
        const user = getUserFromToken(req.token);
        return { prisma: req.prisma, user };
      },
      // autoSchemaFile: getPath('src/schema.gql'), // 搭配自动生成 schema.gql 文件
      playground: isDev(),
    }),
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
