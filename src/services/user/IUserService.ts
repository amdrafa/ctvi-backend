import { UserModel } from "../../model/UserModel";
import { Request } from "express";

export interface IUserService{

    list():UserModel[];
    listById(id: number):UserModel;
    create(request: Request):UserModel;
    update(request: Request):UserModel;
    delete(id:number): boolean;
    login(email: string, password: string): UserModel;

}