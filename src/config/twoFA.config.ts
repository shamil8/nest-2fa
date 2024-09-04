import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TwoFAConfig {
  public appName: string;

  constructor(private readonly configService: ConfigService) {
    this.appName = this.configService.getOrThrow<string>('TWO_FA_APP_NAME');
  }
}
