import { Injectable } from "@nestjs/common";
import { IEmailSender } from "./i-email-sender";

@Injectable()
export class EmailSenderService implements IEmailSender {
    async sendEmail(to: string, subject: string, body: Record<string, any>): Promise<boolean> {
        // Implementation for sending email
        return true;
    }
}