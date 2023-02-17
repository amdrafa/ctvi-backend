import { Request } from 'express';
import { CompanyRepository } from '../../repositories/CompanyRepository';
import { CompanyModel } from "../../model/CompanyModel";
import { ICompanyService } from "./ICompanyService";

export class CompanyService implements ICompanyService{

    companyRepository = new CompanyRepository()

    list(): CompanyModel[] {
        const allCompanies:CompanyModel[] = this.companyRepository.getAllCompanies()

        return allCompanies;
    }

    listDetail(id:number): CompanyModel{
        return this.companyRepository.getCompanyByID(id)
    }

    create(request: Request): CompanyModel{
        const companyObj = new CompanyModel()
        const {name, cnpj} = request.body
        companyObj.name = name
        companyObj.cnpj = cnpj
        return this.companyRepository.createCompany(companyObj)
    }

    update(request: Request): CompanyModel{
        const companyObj = new CompanyModel()
        const {name, cnpj} = request.body
        companyObj.name = name
        companyObj.cnpj = cnpj
        return this.companyRepository.updateCompany(companyObj) 
    }

    delete(id: number): boolean{
        return this.companyRepository.deleteCompany(id)
    }
}