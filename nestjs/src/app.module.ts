import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { makeSchema, fieldAuthorizePlugin } from 'nexus';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaClient } from '@prisma/client';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getPath, getUserFromToken, isDev } from './common/utils';
import * as genTypes from './generated/nexus';
import * as extendTypes from './graphql/extendTypes';

const schema = makeSchema({
  types: [extendTypes, genTypes],
  shouldGenerateArtifacts: isDev(), // 只有开发模式才生成outputs
  outputs: {
    schema: getPath('src/generated/schema.gql'),
    typegen: getPath('src/generated/typings.ts'),
  },
  prettierConfig: getPath('.prettierrc'),
  plugins: [fieldAuthorizePlugin()],
});
const prisma = new PrismaClient();
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      schema,
      context: ({ req }) => {
        const user = getUserFromToken(req.token);
        return { prisma, user };
      },
      // autoSchemaFile: getPath('src/schema.gql'), // 搭配自动生成 schema.gql 文件
      playground: isDev(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
