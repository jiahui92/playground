import './generated/nexus-typings';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { rateLimit } from 'express-rate-limit';
import { JwtModule } from '@nestjs/jwt';
import { ApolloArmor } from '@escape.tech/graphql-armor';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { isProd } from './common/utils';
import { getNexusSchema } from './generated';
import { PrismaService } from './prisma.service';
import { ReqMiddleware } from './middlewares/req.middleware';
import { BusinessModule } from './modules/index.module';
import { LoggerPlugin } from './graphql/plugins/LoggerPlugin';
import { AuthPlugin } from './graphql/plugins/AuthPlugin';
// import { FormatResponsePlugin } from './graphql/plugins';
import { AuthModule } from './modules/auth/auth.module';
import { jwtConstants } from './common/const';

// gql的通用安全套件
const armor = new ApolloArmor({
  blockFieldSuggestion: {
    enabled: isProd(),
  },
});
const protection = Object.assign(armor.protect(), {
  // 非生产环境时把报错堆栈返回来
  includeStacktraceInErrorResponses: !isProd(),
});
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
      schema,
      // schema: applyMiddleware(schema, permissions),
      context: ({ req }) => {
        return { req, user: req.user, prisma: req.prisma };
      },
      // autoSchemaFile: getPath('src/schema.gql'), // 搭配自动生成 schema.gql 文件
      playground: !isProd(),
      introspection: !isProd(), // 生产环境禁止获取query.__schema
      hideSchemaDetailsFromClientErrors: isProd(),
      nodeEnv: process.env.NODE_ENV, // 开发环境下报错时显示stacktrace
      formatError: (formattedError) => {
        return formattedError;
      },
      // TODO fieldResolver.simpleResolvers
      // TODO willSendResponse.response.data = null
      ...protection,
      validationRules: protection.validationRules,
      plugins: [AuthPlugin, LoggerPlugin, ...protection.plugins],
    }),
    AuthModule,
    BusinessModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
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
