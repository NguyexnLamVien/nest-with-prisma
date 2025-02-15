import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsPhoneNumber, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsNotEmpty()
    name?: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password?: string;

    @IsNotEmpty()
    @IsPhoneNumber('VN')
    phone?: string;
}
