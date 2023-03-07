import { CertificateModel } from './../model/CertificateModel';
import { TypeORMDataSource } from "../config/DataSourceConnection";
import { UpdateResult } from 'typeorm';

export class CertificateRepository{
    repository = TypeORMDataSource.getRepository(CertificateModel)

    async create(certificate: CertificateModel): Promise<CertificateModel>{
        return await this.repository.save(certificate)
    }

    async list():Promise<CertificateModel[]>{
        return await this.repository.find()
    }

    async listById(id: number): Promise<CertificateModel>{
        return await this.repository.findOneBy({id:id})
    }

    async update(certificate: CertificateModel, id: number): Promise<UpdateResult>{
        return await this.repository.update(id, certificate)
    }

    async delete(id: number): Promise<UpdateResult>{
        return await this.repository.softDelete({id:id})
    }
}