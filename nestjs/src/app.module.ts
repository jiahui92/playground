import { permissions } from './graphql/permissions';
import './generated/nexus-typings';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { applyMiddleware } from 'graphql-middleware';
import { rateLimit } from 'express-rate-limit';
import { JwtModule } from '@nestjs/jwt';
import { ApolloArmor } from '@escape.tech/graphql-armor';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { isDev } from './common/utils';
import { getNexusSchema } from './generated';
import { PrismaService } from './prisma.service';
import { ReqMiddleware } from './middlewares/req.middleware';
import { BusinessModule } from './modules/index.module';
import { LoggerPlugin } from './graphql/plugins/LoggerPlugin';
// import { FormatResponsePlugin } from './graphql/plugins';
import { AuthModule } from './modules/auth/auth.module';
import { jwtConstants } from './common/const';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuardClass } from './guards/roles.guard';

// gql的通用安全套件
const armor = new ApolloArmor();
const protection = armor.protect();
const schema = getNexusSchema(false);

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn, noTimestamp: true },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      schema: applyMiddleware(schema, permissions),
      context: ({ req }) => {
        return { req, user: req.user, prisma: req.prisma };
      },
      // autoSchemaFile: getPath('src/schema.gql'), // 搭配自动生成 schema.gql 文件
      playground: isDev(),
      introspection: isDev(), // 生产环境禁止获取query.__schema
      ...protection,
      plugins: [LoggerPlugin, ...protection.plugins],
      validationRules: [...protection.validationRules],
    }),
    BusinessModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuardClass,
    },
    AppService,
    PrismaService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // 中间件
    // 限制10分钟内最多600次请求
    consumer
      .apply(
        rateLimit({
          max: 600,
          windowMs: 10 * 60 * 1000, // 10min
          message: 'Too many requests, please try again later.',
        }),
      )
      .forRoutes('*');
    consumer.apply(ReqMiddleware).forRoutes('*');
  }
}
