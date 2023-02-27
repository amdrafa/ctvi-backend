import { TermsRepository } from './../../repositories/TermsRepository';
import { UpdateResult } from "typeorm";
import { TermsModel } from "../../model/TermsModel";
import { ITermsInterface } from "./ITermsService";

export class TermsService implements ITermsInterface{

    repository = new TermsRepository()

    async list(): Promise<TermsModel[]> {
        return await this.repository.list()
    }

    async listById(id: number): Promise<TermsModel> {
        return await this.repository.listById(id)
    }

    async create(terms: TermsModel): Promise<TermsModel> {
        return await this.repository.create(terms)
    }

    async update(id:number, terms: TermsModel): Promise<UpdateResult> {
        return await this.repository.update(id,terms)
    }

    async delete(id:number): Promise<UpdateResult> {
        return await this.repository.delete(id)
    }

}