import { UpdateResult } from 'typeorm';
import { Request } from "express";
import { InviteModel } from "../../model/InviteModel";

export interface IInviteService {
    list(): Promise<InviteModel[]>;
    listDetail(id:number):Promise<InviteModel>;
    create(request: Request):Promise<InviteModel>;
    update(request: Request):Promise<UpdateResult>;
    delete(id: number): Promise<UpdateResult>;
}