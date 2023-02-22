import { Request } from "express";
import { UserModel } from "../../model/UserModel";
import { UserRepository } from "../../repositories/UserRepository";
import { IUserService } from "./IUserService";
import bcrypt from 'bcrypt'

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

            const user = new UserModel();

            
                user.name = request.body.name;
                user.password = request.body.password;
                user.email = request.body.email;
                user.document = request.body.document;
                user.isForeigner = request.body.isForeigner;
            

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

        const user = new UserModel();

        
            user.id = request.body.id;
            user.companyId = request.body.companyId;
            user.name = request.body.name;
            user.password = request.body.password;
            user.email = request.body.email;
            user.document = request.body.document;
            user.isForeigner = request.body.isForeigner;
        
        
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

        let approvedPasswordComparison = false 
        
        // bcrypt.compare(password, user.password, function(err, result) {

        //     approvedPasswordComparison = result;

        // });

        if (password === user.password){
            approvedPasswordComparison = true;
        }
        // if(!approvedPasswordComparison){
        //    return null
        // }
        user.password = ''
        return user;
    }

}