import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class TwoFaConfirmDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(6, 6)
  code!: number;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email!: string;
}
