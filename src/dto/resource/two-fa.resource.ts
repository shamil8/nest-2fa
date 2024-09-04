import { ApiProperty } from '@nestjs/swagger';

export class GenerateTwoFAResource {
  @ApiProperty()
  qr!: string;

  @ApiProperty()
  otpUrl!: string;

  @ApiProperty()
  secretTwoFA!: string;
}
