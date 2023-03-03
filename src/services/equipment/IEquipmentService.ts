import { Request } from 'express';
import { UpdateResult } from 'typeorm';
import { EquipmentModel } from './../../model/EquipmentModel';
export interface IEquipmentService{
    list(): Promise<EquipmentModel[]>
    listByID(request: Request): Promise<EquipmentModel>
    create(request: Request): Promise<EquipmentModel>
    update(request: Request): Promise<UpdateResult>
    delete(request: Request): Promise<UpdateResult>
}