import { IsEmail, IsNotEmpty, IsPhoneNumber, MinLength, } from 'class-validator';
export class CreateUserDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsPhoneNumber('VN')
    phone: string;
}
