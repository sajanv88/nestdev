import { NewUserRegistrationDto } from "dtos/new-user-regsitration.dto";

export interface IRegister {
    register(NewUserRegistrationDto: NewUserRegistrationDto): Promise<void>;
}
