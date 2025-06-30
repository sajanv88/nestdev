export interface IForgetPassword {
    sendResetLink(email: string): Promise<void>;
    resetPassword(token: string, newPassword: string): Promise<void>;
    validateToken(token: string): Promise<boolean>;
}