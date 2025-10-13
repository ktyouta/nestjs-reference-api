import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './config/schema/env.schema';


@Module({
  imports: [
    ConfigModule.forRoot({
      // 全モジュールで環境変数を使えるようにする
      isGlobal: true,
      envFilePath: ['.env'],
      validate: (config) => {

        const parsed = envSchema.safeParse(config);

        if (!parsed.success) {
          console.error("Invalid environment variables:", parsed.error.format());
          throw new Error("Invalid environment variables");
        }

        return parsed.data;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
