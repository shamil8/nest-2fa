import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length } from 'class-validator';

export class TwoFaPhoneCommand {
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
        description: 'The phone number',
        example: '+71238564512',
    })
    @IsNotEmpty()
    @IsString()
    phone!: string;
}
