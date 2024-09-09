import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { makeSchema } from 'nexus';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaClient } from '@prisma/client';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserResolver } from './gql/user.resolver';
import { getPath, isProd } from './common/utils';
import * as genTypes from './graphql';
import { nexusFixTypes } from './common/nexusFixTypes';

const nexusGenTypes = Object.getOwnPropertyNames(genTypes).map(
  (n) => genTypes[n],
);
const schema = makeSchema({
  types: [...nexusFixTypes, ...nexusGenTypes],
  outputs: {
    schema: getPath('src/generated/schema.gql'),
    typegen: getPath('src/generated/typings.ts'),
  },
  prettierConfig: getPath('.prettierrc'),
});

const prisma = new PrismaClient();
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      schema,
      context: () => ({ prisma }),
      // autoSchemaFile: getPath('src/schema.gql'), // 搭配自动生成 schema.gql 文件
      playground: !isProd(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserResolver],
})
export class AppModule {}
