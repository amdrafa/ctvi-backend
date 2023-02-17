import { Request } from "express";
import { UserModel } from "../../model/UserModel";
import { UserRepository } from "../../repositories/UserRepository";
import { IUserService } from "./IUserService";

export class UserService implements IUserService  {

    private userRepository = new UserRepository();
    
    list(): UserModel[] {

        return this.userRepository.getAllUsers();
    }

    listById(id: number): UserModel {
        return this.userRepository.getUserById(id);
    }

    create(request: Request): UserModel {

        const user: UserModel = {
            name: request.body.name,
            password: request.body.password,
            email: request.body.email,
            document: request.body.document,
            isForeigner: request.body.isForeigner
        }
        
        return this.userRepository.createUser(user)
        
    }

    update(request: Request): UserModel {

        const user: UserModel = {
            id: request.body.id,
            companyId: request.body.companyId,
            name: request.body.name,
            password: request.body.password,
            email: request.body.email,
            document: request.body.document,
            isForeigner: request.body.isForeigner,
        };
        
        return this.userRepository.updateUser(user);
        
    }

    delete(id:number): boolean {

        return this.userRepository.deleteUser(id);
        
    }

    login(email: string, password: string): number {
    
        return 200
    }

}