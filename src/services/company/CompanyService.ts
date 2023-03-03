import { UpdateResult } from 'typeorm';
import { Request } from 'express';
import { CompanyRepository } from '../../repositories/CompanyRepository';
import { CompanyModel } from "../../model/CompanyModel";
import { ICompanyService } from "./ICompanyService";

export class CompanyService implements ICompanyService{

    companyRepository = new CompanyRepository()

    async list(): Promise<CompanyModel[]> {
        return await this.companyRepository.getAllCompanies()
    }

    async listDetail(id:number): Promise<CompanyModel>{
        return await this.companyRepository.getCompanyByID(id)
    }

    async create(request: Request): Promise<CompanyModel>{
        return await this.companyRepository.createCompany(request.body)
    }

    async update(request: Request): Promise<UpdateResult>{
        return await this.companyRepository.updateCompany(request.body) 
    }

    async delete(id: number): Promise<UpdateResult>{
        return await this.companyRepository.deleteCompany(id)
    }
}