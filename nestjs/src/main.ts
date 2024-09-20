import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RolesGuard } from './guards/roles.guard';
import { LoggingInterceptor } from './interceptors/logger.interceoptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new RolesGuard());
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
