import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './interceptors/logger.interceoptor';
import { RolesGuardClass } from './guards/roles.guard';
import { Reflector } from '@nestjs/core';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    // 放开gql.playground的一些资源加载
    // https://docs.nestjs.com/security/helmet
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        directives: {
          defaultSrc: [`'self'`],
          styleSrc: [
            `'self'`,
            `'unsafe-inline'`,
            'cdn.jsdelivr.net',
            'fonts.googleapis.com',
          ],
          fontSrc: [`'self'`, 'fonts.gstatic.com'],
          imgSrc: [`'self'`, 'data:', 'cdn.jsdelivr.net'],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`, `cdn.jsdelivr.net`],
        },
      },
    }),
  );
  app.useGlobalGuards(new RolesGuardClass(new Reflector()));
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
