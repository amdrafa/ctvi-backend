import { UserModel } from "../model/UserModel";
import { UserRepository } from "../repositories/UserRepository";
import { IUserService, UserProps } from "./IUserService";

export class UserService implements IUserService  {
    list(): UserModel[] {
        
        const userRepository = new UserRepository();

        return userRepository.getAllUsers();
    }
    create({ }: UserProps): void {
        throw new Error("Method not implemented.");
    }

}