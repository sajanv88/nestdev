import { Injectable } from "@nestjs/common";
import { IRegister } from "./i-register";
import { NewUserRegistrationDto } from "dtos/new-user-regsitration.dto";
import { IEmailSender } from "@nestdev/shared/services/i-email-sender";
import { verify } from "crypto";

@Injectable()
export class AuthRegisterService implements IRegister {
    constructor(private emailSender: IEmailSender) { }
    register(NewUserRegistrationDto: NewUserRegistrationDto): Promise<void> {

        this.emailSender.sendEmail(
            NewUserRegistrationDto.email,
            "Welcome to NestDev",
            {
                name: NewUserRegistrationDto.firstName + " " + NewUserRegistrationDto.lastName,
                message: "Thank you for registering with NestDev! We are excited to have you on board.",
                supportEmail: "support@nestdev.com",
                verifyLink: '{generateVerificationLink(NewUserRegistrationDto.email)}',
            }
        );

        throw new Error("Method not implemented.");
    }
}