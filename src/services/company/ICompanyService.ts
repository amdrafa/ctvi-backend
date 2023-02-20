import { Request } from "express";
import { CompanyModel } from "../../model/CompanyModel";

export interface ICompanyService {
    list():CompanyModel[];
    listDetail(id:number):CompanyModel;
    create(request: Request):CompanyModel;
    update(request: Request):CompanyModel;
    delete(id: number): boolean;
}