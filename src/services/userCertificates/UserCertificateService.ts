import { Request } from "express";
import moment from "moment";
import { UpdateResult } from "typeorm";
import { UserCertificatesModel } from "../../model/UserCertificatesModel";
import { UserCertificatesRepository } from "../../repositories/UserCertificatesRepository";
import { IUserInterfaceService } from "./IUserCertificates";

export class UserCertificatesService implements IUserInterfaceService{

    repository = new UserCertificatesRepository()

    async create(request: Request): Promise<UserCertificatesModel> {
        let userCertificate: UserCertificatesModel = request.body
        let dates: string[] = userCertificate.certificate.expirationDate.split(' ')
        //userCertificate.expireDate = moment().add(moment.duration(dates[0], dates[1])).toDate()
        return await this.repository.create(userCertificate)
    }
    async list(request: Request): Promise<UserCertificatesModel[]> {
        return await this.repository.find()
    }
    async listById(request: Request): Promise<UserCertificatesModel> {
        return await this.repository.findById(Number(request.params.id))
    }
    async update(request: Request): Promise<UserCertificatesModel> {
        if(await this.repository.findById(request.body.id)){
            return await this.repository.update(request.body)
        }
        throw new Error('This user does not exist')   
    }
    async delete(request: Request): Promise<UpdateResult> {
        return await this.repository.delete(Number(request.params.id))
    }

}