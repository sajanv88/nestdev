import { IsEmail, IsString, IsStrongPassword } from "class-validator";
import { IsEqualTo } from "@nestdev/shared/decorators/is-equal-to";

export class NewUserRegistrationDto {


    @IsString({ message: 'First name must be a string', always: true })
    firstName: string;

    @IsString({ message: 'Last name must be a string', always: true })
    lastName: string;

    @IsEmail({ allow_display_name: false, require_tld: true }, { message: 'Email must be a valid email address', always: true })
    email: string;

    @IsStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }, { message: 'Password must be strong', always: true })
    password: string;

    @IsEqualTo("password", { message: 'Confirm password must match password', always: true })
    confirmPassword: string;
}
