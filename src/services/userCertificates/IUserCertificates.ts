import { Request } from "express";
import { UpdateResult } from "typeorm";
import { UserCertificatesModel } from "../../model/UserCertificatesModel";

export interface IUserInterfaceService{
    create(request: Request):Promise<UserCertificatesModel>
    list():Promise<UserCertificatesModel[]>
    listById(request: Request):Promise<UserCertificatesModel>
    update(request: Request):Promise<UserCertificatesModel>
    delete(request: Request):Promise<UpdateResult>
}