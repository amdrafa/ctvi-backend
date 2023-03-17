import { request, Request, RequestHandler } from "express";
import moment from "moment";
import { UpdateResult } from "typeorm";
import { UserCertificatesModel } from "../../model/UserCertificatesModel";
import { UserCertificatesRepository } from "../../repositories/UserCertificatesRepository";
import { CertificateService } from "../certificate/CertificateService";
import { UserService } from "../user/UserService";
import { IUserInterfaceService } from "./IUserCertificates";

export class UserCertificatesService implements IUserInterfaceService{

    repository = new UserCertificatesRepository()

    async create(request: Request): Promise<UserCertificatesModel> {
        let userCertificate: UserCertificatesModel = request.body
        if(userCertificate.certificate.expirationDate){
            let dates: string[] = userCertificate.certificate.expirationDate.split(' ')
            userCertificate.expireDate = moment().add((dates[0], dates[1])).toDate()
        }
        return await this.repository.create(userCertificate)
    }

    async createWithIdsAndFileName(request : Request, fileName:string): Promise<UserCertificatesModel>{
        let userService = new UserService()
        let certificateService = new CertificateService()

        const user = await userService.listById(Number(request.params.userId))
        request.params.id = request.params.certificateId
        const certificate = await certificateService.listByID(request)
        let obj = await this.repository.create({user, certificate})
        obj.fileName = fileName
        if(obj.certificate.expirationDate){
            let dates: string[] = obj.certificate.expirationDate.split(' ')
            obj.expireDate = moment().add((dates[0], dates[1])).toDate()
        }
        return await this.repository.update(obj)
    }
    async list(): Promise<UserCertificatesModel[]> {
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