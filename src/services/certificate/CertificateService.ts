import { CertificateRepository } from './../../repositories/CertificateRepository';
import { Request } from 'express';
import { UpdateResult } from 'typeorm';
import { CertificateModel } from '../../model/CertificateModel';
import { ICertificateService } from './ICertificateService';
export class CertificateService implements ICertificateService{
    repository = new CertificateRepository()

    async list(): Promise<CertificateModel[]> {
        return await this.repository.list()
    }
    async listByID(request: Request): Promise<CertificateModel> {
        return await this.repository.listById(Number(request.params.id))
    }
    async listByIdNumber(id: Number): Promise<CertificateModel> {
        return await this.repository.listById(Number(id))
    }
    async create(request: Request): Promise<CertificateModel> {
        return await this.repository.create(request.body)
    }
    async update(request: Request): Promise<UpdateResult> {
        const certificate = await this.repository.listById(Number(request.params.id))
        if(certificate){
            return await this.repository.update(request.body, Number(request.params.id))
        }
        throw new Error("Certificate sended doesn't exists")
    }
    async delete(request: Request): Promise<UpdateResult> {
        const certificate = await this.repository.listById(Number(request.params.id))
        if(certificate){
            return this.repository.delete(Number(request.params.id))
        }
        throw new Error("Certificate sended doesn't exists")
    }
}