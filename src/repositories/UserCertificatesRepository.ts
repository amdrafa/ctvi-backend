import { UpdateResult } from "typeorm";
import { TypeORMDataSource } from "../config/DataSourceConnection";
import { UserCertificatesModel } from "../model/UserCertificatesModel";

export class UserCertificatesRepository{
    repository = TypeORMDataSource.getRepository(UserCertificatesModel)

    async create(userCertificate: UserCertificatesModel): Promise<UserCertificatesModel>{
        return await this.repository.save(userCertificate)
    }

    async find():Promise<UserCertificatesModel[]>{
        return await this.repository.find({relations:{certificate:true, user:true}})
    }

    async findById(id: number): Promise<UserCertificatesModel>{
        return await this.repository.findOne({where:{id:id},relations:{certificate:true, user:true}})
    }

    async update(userCertificate: UserCertificatesModel): Promise<UserCertificatesModel>{
        return await this.repository.save(userCertificate)
    }

    async delete(id: number): Promise<UpdateResult>{
        return await this.repository.softDelete({id:id})
    }
}