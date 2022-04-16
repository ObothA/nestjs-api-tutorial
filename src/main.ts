import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // allows use validation pipes globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  // white list strips out un wanted paramters.

  await app.listen(3333);
}
bootstrap();
