import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { MorganInterceptor } from './../morgan.interceptor';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  app.useGlobalInterceptors(new MorganInterceptor(logger));
  await app.listen(process.env.PORT ?? 3000);

  Logger.log(`Server running on http://localhost:${process.env.PORT ?? 3000}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
