import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class TwoFaEmailCommand {
    @ApiProperty({
        required: true,
        description: 'Two fa code number',
        example: '169512',
    })
    @IsNotEmpty()
    @Length(6, 6)
    code!: number;

    @ApiProperty({
        required: true,
        description: 'The email address',
        example: 'user@example.com',
    })
    @IsNotEmpty()
    @IsEmail()
    @Transform(({ value }) => value.toLowerCase())
    email!: string;
}