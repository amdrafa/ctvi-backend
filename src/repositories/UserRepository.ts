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
        const currentUser = this.repository.findBy({email: user.email})
        if (currentUser){
            throw new Error('Email already registered')
        }
        return await this.repository.save(currentUser, user)
    }

    public deleteUser(id: number) {
        return require("../test/mockup/user.json")
    }

    public getUserByEmailAndPassword(email: string, password: string): UserModel {
        const user =  require("../test/mockup/user.json")
        return user[0]
    }

}