import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from '@app/logger/logger.module';

import { TwoFaConfig } from './config/two-fa.config';
import { TwoFaService } from './services/two-fa.service';

@Global()
@Module({
  imports: [ConfigModule, LoggerModule],
  providers: [
    //config
    TwoFaConfig,

    // services
    TwoFaService,
  ],
  exports: [TwoFaService],
})
export class TwoFaModule {}
