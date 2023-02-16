import { UserModel } from "../model/UserModel";
import { UserRepository } from "../repositories/UserRepository";
import { IUserService, UserProps } from "./IUserService";

export class UserService implements IUserService  {

    private userRepository = new UserRepository();
    
    list(): UserModel[] {
        
        

        return this.userRepository.getAllUsers();
    }
    create({ }: UserProps): void {
        throw new Error("Method not implemented.");
    }

    login(email: string, password: string): number {
        

        return 200
    }

}