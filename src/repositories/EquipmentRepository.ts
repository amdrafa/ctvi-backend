import { EquipmentModel } from './../model/EquipmentModel';
import { TypeORMDataSource } from "../config/DataSourceConnection";
import { UpdateResult } from 'typeorm';

export class EquipmentRepository{
    repository = TypeORMDataSource.getRepository(EquipmentModel)

    async create(equipment: EquipmentModel): Promise<EquipmentModel>{
        return await this.repository.save(equipment)
    }

    async list():Promise<EquipmentModel[]>{
        return await this.repository.find()
    }

    async listById(id: number): Promise<EquipmentModel>{
        return await this.repository.findOneBy({id:id})
    }

    async update(equipment: EquipmentModel, id: number): Promise<UpdateResult>{
        return await this.repository.update(id, equipment)
    }

    async delete(id: number): Promise<UpdateResult>{
        return await this.repository.softDelete({id:id})
    }
}