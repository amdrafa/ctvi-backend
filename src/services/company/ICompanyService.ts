import { UpdateResult } from 'typeorm';
import { Request } from "express";
import { CompanyModel } from "../../model/CompanyModel";

export interface ICompanyService {
    list(): Promise<CompanyModel[]>;
    listDetail(id:number):Promise<CompanyModel>;
    create(request: Request):Promise<CompanyModel>;
    update(request: Request):Promise<UpdateResult>;
    delete(id: number): Promise<UpdateResult>;
}