import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors(); // enable CORS for all routes
  // app.enableCors({ origin: 'http://localhost:3000' }); // enable CORS for specific origin
  // validate the request body
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  // whitelist: true will remove any properties that are not in the DTO
  // transform: true will transform the request body to the DTO class
  await app.listen(3000);
}
bootstrap();
