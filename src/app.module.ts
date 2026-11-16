import { Module } from '@nestjs/common';
import { ConfigModule } from '../src/modules/config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
