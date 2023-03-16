import { TypeORMDataSource } from "../config/DataSourceConnection"
import { UserModel } from "../model/UserModel"

export class UserRepository{

    repository = TypeORMDataSource.getRepository(UserModel)

    public async getAllUsers(): Promise<UserModel[]> {
        return await this.repository.find({relations:{certificates:true, company:{}}})
    }

    public async getUserById(id: number): Promise<UserModel> {
        return await this.repository.findOne({where:{id: id}, relations:{certificates:true, company:{}}})
    }

    public async getUserByIdWithCertificates(id: number): Promise<UserModel> {
        return await this.repository.findOne({where:{id: id}, relations:{certificates:true, company:{users:false}}});
    }

    public async createUser(user: UserModel): Promise<UserModel> {
        return await this.repository.save(user)
    }

    public async updateUser(user: UserModel): Promise<UserModel> {
        const currentUser = await this.repository.findOneBy({email: user.email})
        if (!currentUser){
            throw new Error('User not found')
        }

        const updatedUser = await this.repository.update({id: user.id}, user)

        if(!updatedUser){
            throw new Error("Error when updating user")
        }
      
        return this.getUserById(currentUser.id)
    }

    public async deleteUser(id: number) {

        return await this.repository.softDelete({id: id})
    
    }

    public async getUserByEmail(email: string): Promise<UserModel> {
        return await this.repository.findOneBy({email: email})
    } 

    public async getUserByEmailAndPassword(email: string, password: string): Promise<UserModel> {
        return await this.repository.findOne({where:{email: email, password: password}, relations:{certificates:true}})
    } 

    public async updateUserWithRelations(user: UserModel): Promise<UserModel>{
        return await this.repository.save(user);
    }
}