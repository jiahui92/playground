import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserResolver } from './schema/user.resolver';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 或者 'postgres'
      host: process.env.DB_HOST,
      port: 3306, // 对于 PostgreSQL 使用 5432
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 自动载入实体
      synchronize: true, // 在开发环境下使用，自动同步数据库表结构
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // 自动生成 schema.gql 文件
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UserResolver],
})
export class AppModule {}
