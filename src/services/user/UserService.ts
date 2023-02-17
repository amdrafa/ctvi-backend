import { Request } from "express";
import { UserModel } from "../../model/UserModel";
import { UserRepository } from "../../repositories/UserRepository";
import { IUserService } from "./IUserService";
import bcrypt from 'bcrypt';

export class UserService implements IUserService  {

    private userRepository = new UserRepository();
    
    list(): UserModel[] {

        return this.userRepository.getAllUsers();
    }

    listById(id: number): UserModel {
        return this.userRepository.getUserById(id);
    }

    create(request: Request): UserModel {

        try {

            const user: UserModel = {
                name: request.body.name,
                password: request.body.password,
                email: request.body.email,
                document: request.body.document,
                isForeigner: request.body.isForeigner
            }

            bcrypt.hash(user.password, 10, function(err, hash){

                if(err){
                    throw new Error("Error when encrypting password");
                }
        
                user.password = hash;
           
            })

            return this.userRepository.createUser(user)
            
        } catch (error) {
            return null;
        }
        
        
        
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

    login(email: string, password: string): UserModel {
    
        const user = this.userRepository.getUserByEmailAndPassword(email, password);

        if(!user){
            return null
        }

        let isEncrypted = false 
        
        bcrypt.compare(password, user.password, function(err, result) {

            isEncrypted = result;

        });

        // Missing middleware

        return user;
    }

}