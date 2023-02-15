import { CompanyModel } from "../model/CompanyModel";
import { CompanyRepository } from "../repositories/CompanyRepository";
import { ICompanyService } from "./ICompanyService";

export class CompanyService implements ICompanyService{
    list(): CompanyModel[] {
        
        const companyRepository = new CompanyRepository();

        const allCompanies:CompanyModel[] = companyRepository.getAllCompanies()

        return allCompanies;
    }

}