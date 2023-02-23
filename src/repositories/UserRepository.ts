import { Repository } from "typeorm"
import { TypeORMDataSource } from "../config/DataSourceConnection"
import { UserModel } from "../model/UserModel"

export class UserRepository{

    repository = TypeORMDataSource.getRepository(UserModel)

    public async getAllUsers(): Promise<UserModel[]> {
        return await this.repository.find()
    }

    public async getUserById(id: number): Promise<UserModel> {
        return await this.repository.findOneBy({id: id})
    }

    public async createUser(user: UserModel): Promise<UserModel> {
        return await this.repository.save(user)
    }

    public async updateUser(user: UserModel): Promise<UserModel> {
        const currentUser = await this.repository.findOneBy({email: user.email})
        if (currentUser){
            throw new Error('Email already registered')
        }

        const updatedUser = await this.repository.update({id: currentUser.id}, user)

        if(!updatedUser){
            throw new Error("Error when updating user")
        }
      
        return this.getUserById(currentUser.id)
    }

    public async deleteUser(id: number) {

        return await this.repository.softDelete({id: id})
    
    }

    public async getUserByEmailAndPassword(email: string, password: string): Promise<UserModel> {
        return await this.repository.findOneBy({email: email, password: password})
    } 

}