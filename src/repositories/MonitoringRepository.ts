import { MonitoringModel } from './../model/MonitoringModel';
import { TypeORMDataSource } from "../config/DataSourceConnection";
import { UpdateResult } from 'typeorm';

export class MonitoringRepository{
    repository = TypeORMDataSource.getRepository(MonitoringModel)

    async list(): Promise<MonitoringModel[]>{
        return await this.repository.find()
    }

    async listById(id: number): Promise<MonitoringModel>{
        return await this.repository.findOne({where:{id:id}})
    }

    async create(monitoring: MonitoringModel): Promise<MonitoringModel>{
        return await this.repository.save(monitoring)
    }

    async update(monitoring: MonitoringModel, id: number): Promise<UpdateResult>{
        return await this.repository.update({id:id},{...monitoring})
    }

    async delete(id: number): Promise<UpdateResult>{
        return await this.repository.softDelete({id:id})
    }
}