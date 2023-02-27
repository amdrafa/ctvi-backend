import { UpdateResult } from 'typeorm';
import { TermsModel } from './../model/TermsModel';
import { TypeORMDataSource } from "../config/DataSourceConnection";

export class TermsRepository{
    repository = TypeORMDataSource.getRepository(TermsModel)

    async list(): Promise<TermsModel[]>{
        return await this.repository.find()
    }

    async listById(id: number): Promise<TermsModel>{
        return await this.repository.findOneBy({id: id})
    }

    async create(terms: TermsModel): Promise<TermsModel>{
        return await this.repository.save(terms)
    }

    async update(id: number, terms: TermsModel): Promise<UpdateResult>{
        return await this.repository.update({id: id}, terms)
    }

    async delete(id: number): Promise<UpdateResult>{
        return await this.repository.softDelete({id:id})
    }
}