import { Injectable } from "@nestjs/common";
import { ILogin } from "./i-login";

@Injectable()
export class AuthLoginService implements ILogin {

    async login(email: string, password: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
