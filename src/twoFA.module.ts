import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from '@app/logger/logger.module';

import { TwoFAConfig } from './config/twoFA.config';
import { TwoFAService } from './services/twoFA.service';

@Global()
@Module({
  imports: [ConfigModule, LoggerModule],
  providers: [
    //config
    TwoFAConfig,

    // services
    TwoFAService,
  ],
  exports: [TwoFAService],
})
export class TwoFAModule {}
