import { Injectable } from "@nestjs/common";
import { IRegister } from "./i-register";
import { NewUserRegistrationDto } from "dtos/new-user-regsitration.dto";

@Injectable()
export class AuthRegisterService implements IRegister {
    register(NewUserRegistrationDto: NewUserRegistrationDto): Promise<void> {

        throw new Error("Method not implemented.");
    }
}