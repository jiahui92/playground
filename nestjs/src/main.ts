import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './interceptors/logger.interceoptor';
import { RolesGuardClass } from './guards/roles.guard';
import { Reflector } from '@nestjs/core';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TODO 把graphql.playground的jsdeliver.js给block了
  // app.use(helmet());
  app.useGlobalGuards(new RolesGuardClass(new Reflector()));
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
