import { Module } from "@nestjs/common";
import { EmailSenderService } from "@nestdev/shared/services/email-sender.service";
import { AuthLoginService } from "services/auth-login.service";
import { AuthRegisterService } from "services/auth-register.service";
import { AuthForgetPasswordService } from "services/auth-forget-password.service";
import { CqrsModule } from "@nestjs/cqrs";

@Module({
    imports: [CqrsModule],
    controllers: [],
    providers: [EmailSenderService, AuthRegisterService, AuthLoginService, AuthForgetPasswordService],
    exports: []
})
export class AuthModule { }