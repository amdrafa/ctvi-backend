import { Request } from "express";
import { UpdateResult } from "typeorm";
import { ResourceModel } from "../../model/ResourceModel";

export interface IResourceService {
    list():Promise<ResourceModel[]>;
    listDetail(id:number):Promise<ResourceModel>;
    create(request: Request): Promise<ResourceModel>;
    update(request: Request): Promise<UpdateResult>;
    delete(id: number): Promise<UpdateResult>;
}