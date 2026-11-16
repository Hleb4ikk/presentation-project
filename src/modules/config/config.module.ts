import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigService } from '../config/config.service.js';
import { validateConfig } from '../../utils/validate-config.util.js';

@Module({
  imports: [
    NestConfigModule.forRoot({
      validate: validateConfig,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
