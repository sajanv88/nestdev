import { Injectable } from "@nestjs/common";
import { IForgetPassword } from "./i-forget-password";

@Injectable()
export class AuthForgetPasswordService implements IForgetPassword {

    async sendResetLink(email: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async resetPassword(token: string, newPassword: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async validateToken(token: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
