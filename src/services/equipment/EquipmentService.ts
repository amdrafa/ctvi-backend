import { EquipmentRepository } from './../../repositories/EquipmentRepository';
import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { UpdateResult } from 'typeorm';
import { EquipmentModel } from '../../model/EquipmentModel';
import { IEquipmentService } from './IEquipmentService';
export class EquipmentService implements IEquipmentService{
    repository = new EquipmentRepository()

    async list(): Promise<EquipmentModel[]> {
        return await this.repository.list()
    }
    async listByID(request: Request): Promise<EquipmentModel> {
        return await this.repository.listById(Number(request.params.id))
    }
    async create(request: Request): Promise<EquipmentModel> {
        return await this.repository.create(request.body)
    }
    async update(request: Request): Promise<UpdateResult> {
        const equipment = await this.repository.listById(Number(request.params.id))
        if(equipment){
            return await this.repository.update(request.body, Number(request.params.id))
        }
        throw new Error("Equipment sended doesn't exists")
    }
    async delete(request: Request): Promise<UpdateResult> {
        const equipment = await this.repository.listById(Number(request.params.id))
        if(equipment){
            return this.repository.delete(Number(request.params.id))
        }
        throw new Error("Equipment sended doesn't exists")
    }

}