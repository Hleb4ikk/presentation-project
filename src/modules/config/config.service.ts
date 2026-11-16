import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { AppConfiguration } from '../../interfaces/configuration.js';

@Injectable()
export class ConfigService {
  readonly app: AppConfiguration;

  constructor(private configService: NestConfigService) {
    this.app = {
      port: this.configService.getOrThrow('APP_PORT'),
      host: this.configService.getOrThrow('APP_HOST'),
    };
  }
}
