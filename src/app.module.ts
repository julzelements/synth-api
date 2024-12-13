import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { PresetsModule } from './presets/presets.module';
import { LoggerMiddleware } from './logger.middleware';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import { ExceptionsTestController } from './exceptions-test.controller';
import { DatabaseModule } from './databases/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [HealthcheckController, ExceptionsTestController],
  imports: [
    PresetsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'presets', method: RequestMethod.POST });
  }
}
