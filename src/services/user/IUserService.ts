import { UserModel } from "../../model/UserModel";
import { Request } from "express";

export interface IUserService{

    list():Promise<UserModel[]>;
    listById(id: number):Promise<UserModel>;
    create(request: Request):Promise<UserModel>;
    update(request: Request):Promise<UserModel>;
    delete(id:number): Promise<boolean>;
    login(email: string, password: string): Promise<UserModel>;
    bindToCompany(userId: number, companyId: number): Promise<boolean>;

}