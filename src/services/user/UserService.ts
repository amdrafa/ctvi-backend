import { Request } from "express";
import { UserModel } from "../../model/UserModel";
import { UserRepository } from "../../repositories/UserRepository";
import { IUserService } from "./IUserService";
import bcrypt from 'bcrypt'
import { CompanyService } from "../company/CompanyService";
import { CompanyModel } from "../../model/CompanyModel";
import { RolesEnum } from "../../enums/roleEnumerator";

export class UserService implements IUserService  {

    private userRepository = new UserRepository();
    
    async list(): Promise<UserModel[]> {

        return await this.userRepository.getAllUsers();
    }

    listById(id: number): Promise<UserModel> {
        return this.userRepository.getUserById(id);
    }

    async create(request: Request): Promise<UserModel> {

        try {

            const user = new UserModel();

                console.log(request.body)

            
                user.name = request.body.name;
                user.password = request.body.password;
                user.email = request.body.email;
                user.document = request.body.document;
                user.isForeigner = request.body.isForeigner;
                user.roles = request.body.roles;
            
            return this.userRepository.createUser(user)
            
        } catch (error) {
            return null;
        }
        
        
        
    }

    update(request: Request): Promise<UserModel> {

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

    async delete(id:number): Promise<boolean> {

        const updateResult = await this.userRepository.deleteUser(id);
        
        return updateResult.affected > 0 ? true : false
    }

    async login(email: string, password: string): Promise<UserModel> {

        //const hashedPassword = await bcrypt.hash(password, 10)
    
        const user = await this.userRepository.getUserByEmailAndPassword(email, password);
        if(!user){
            return null
        }

        let approvedPasswordComparison = true 
        
        // bcrypt.compare(password, user.password, function(err, result) {

        //     approvedPasswordComparison = result;

        // });

        if(!approvedPasswordComparison){
           return null
        }
        
        return user;
    }

    async bindToCompany(userId: number, companyId: number): Promise<boolean> {
        
        const companyService = new CompanyService()

        const user = await this.userRepository.getUserById(userId);

        const company = await companyService.listDetail(companyId);

        if(!user || !company){
            throw new Error("User or company not found")
        }

        let updatedUser = new UserModel();

        updatedUser = user;

        updatedUser.companyId = companyId;

        const isUserUpdateSuccessful  = await this.userRepository.updateUser(updatedUser)

        return isUserUpdateSuccessful ? true : false;
    }

}