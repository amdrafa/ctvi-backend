import { Request } from "express";
import { ResourceModel } from "../../model/ResourceModel";

export interface IResourceService {
    list():ResourceModel[];
    listDetail(id:number):ResourceModel;
    create(request: Request): ResourceModel;
    update(request: Request): ResourceModel;
    delete(id: number): boolean;
}