import { TypeORMDataSource } from './../config/DataSourceConnection';
import { UpdateResult } from 'typeorm';
import { CompanyModel } from './../model/CompanyModel';

export class CompanyRepository{

    repository = TypeORMDataSource.getRepository(CompanyModel)

    public async getAllCompanies(): Promise<CompanyModel[]> {
        return await this.repository.find()
    }

    public async getCompanyByID(id: number): Promise<CompanyModel>{
        return await this.repository.findOneBy({id:id})
    }

    public async createCompany(company: CompanyModel): Promise<CompanyModel>{
        return this.repository.save(this.repository.create(company))
    }

    public async updateCompany(company: CompanyModel): Promise<CompanyModel>{
        return await this.repository.save(company)
    }

    public async deleteCompany(id:number): Promise<UpdateResult>{
        return await this.repository.softDelete({id:id})
    }

}