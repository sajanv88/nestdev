export interface IEmailSender {
    sendEmail(to: string, subject: string, body: Record<string, any>): Promise<boolean>;
}