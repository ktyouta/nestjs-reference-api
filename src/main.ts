import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { doubleCsrf } from 'csrf-csrf';
import { Env } from './config/schema/env.schema';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<Env, true>);

  const port = configService.get<number>('PORT');
  const corsProtocol = configService.get<string>('CORS_PROTOCOL');
  const corsDomain = configService.get<string>('CORS_DOMAIN');
  const corsPort = configService.get<string>('CORS_PORT');
  const csrfSecretKey = configService.get<string>('CSRF_SECRET');
  const nodeEnv = configService.get<string>('NODE_ENV');

  app.setGlobalPrefix('/reference');

  // CORS設定
  app.enableCors({
    origin: [`${corsProtocol}${corsDomain}${corsPort}`],
    credentials: true,
  });

  const cookieParser = require("cookie-parser");
  app.use(cookieParser());

  // CSRF保護の設定
  const { doubleCsrfProtection } = doubleCsrf({
    getSecret: () => {
      const secret = csrfSecretKey;
      return secret;
    },
    getSessionIdentifier: (req) => req.ip || "anonymous",
    cookieName: nodeEnv === "production" ? "__Host-psifi.x-csrf-token" : "csrf-token",
    cookieOptions: {
      httpOnly: true,
      sameSite: "lax",
      secure: nodeEnv === "production",
      path: "/",
    },
    size: 32,
    ignoredMethods: ["GET", "HEAD", "OPTIONS"],
  });

  // CSRF保護ミドルウェアを適用
  app.use(doubleCsrfProtection);

  // エラーハンドリング
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
  });

  process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  await app.listen(port);
}
bootstrap();
