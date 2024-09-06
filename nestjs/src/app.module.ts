import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserResolver } from './schema/user.resolver';
import { getPath, isProd } from './common/utils';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      retryAttempts: 2,
      type: 'mysql', // 或者 'postgres'
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [`${__dirname}/entities/*.js`], // 自动载入实体
      synchronize: true, // 在开发环境下使用，自动同步数据库表结构
      logging: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: getPath('src/schema.gql'), // 自动生成 schema.gql 文件
      playground: !isProd(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UserResolver],
})
export class AppModule {}
