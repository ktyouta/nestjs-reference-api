import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT');
  const corsProtocol = configService.get<string>('CORS_PROTOCOL');
  const corsDomain = configService.get<string>('CORS_DOMAIN');
  const corsPort = configService.get<string>('CORS_PORT');

  app.setGlobalPrefix('/reference');

  // CORS設定
  app.enableCors({
    origin: [`${corsProtocol}${corsDomain}${corsPort}`],
    credentials: true,
  });

  const cookieParser = require("cookie-parser");
  app.use(cookieParser());

  // エラーハンドリング
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
  });

  process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
  });

  await app.listen(port ?? 3000);
}
bootstrap();
