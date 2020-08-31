import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import setupSwagger from './setup/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
