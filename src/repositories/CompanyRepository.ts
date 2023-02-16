import { CompanyModel } from './../model/CompanyModel';
import { Request } from 'express';
export class CompanyRepository{

    public getAllCompanies(): [] {
        return require("../test/mockup/company.json")
    }

    public getCompanyByID(id: number){
        return require("../test/mockup/company.json")
    }

    public createCompany(company: CompanyModel){
        return require("../test/mockup/company.json")
    }

    public updateCompany(company: CompanyModel){
        return require("../test/mockup/company.json")
    }

    public deleteCompany(id:number){
        return require("../test/mockup/company.json")
    }

}