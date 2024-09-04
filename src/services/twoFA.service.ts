import { Injectable } from '@nestjs/common';
import { LoggerService } from '@app/logger/services/logger.service';
import { Response } from 'express';
import { authenticator } from 'otplib';
import { toFileStream } from 'qrcode';

import config from '../../../config';
import { TwoFAConfig } from '../config/twoFA.config';
import { GenerateTwoFAResource } from '../dto/resource/two-fa.resource';

@Injectable()
export class TwoFAService {
  constructor(
    private readonly twoFAConfig: TwoFAConfig,
    private readonly logger: LoggerService
  ) {}

  async generateQR(secretTwoFA: string, email: string, response: Response): Promise<void> {
    const otpUrl = authenticator.keyuri(
      email,
      this.twoFAConfig.appName,
      secretTwoFA,
    );

    return toFileStream(response, otpUrl);
  }

  async generateTwoFA(email: string): Promise<GenerateTwoFAResource> {
    const secretTwoFA = authenticator.generateSecret();

    const otpUrl = authenticator.keyuri(
      email,
      this.twoFAConfig.appName,
      secretTwoFA,
    );

    return {
      secretTwoFA,
      otpUrl,
      qr: `${config.appUrl}${config.routePrefix}/2fa/qr/${secretTwoFA}`,
    };
  }

  async verifyTwoFA(code: string, secretTwoFA: string): Promise<boolean> {
    return authenticator.verify({
      token: code,
      secret: secretTwoFA,
    });
  }
}
