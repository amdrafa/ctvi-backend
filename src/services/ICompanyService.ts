import { CompanyModel } from "../model/CompanyModel";

export interface ICompanyService {
    list():CompanyModel[];
}