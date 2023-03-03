import { MonitoringRepository } from './../../repositories/MonitoringRepository';
import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { UpdateResult } from 'typeorm';
import { MonitoringModel } from '../../model/MonitoringModel';
import { IMonitoringService } from './IMonitoringService';
export class MonitoringService implements IMonitoringService{
    repository =  new MonitoringRepository()
    async list(): Promise<MonitoringModel[]> {
        return await this.repository.list()
    }
    async listById(request: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>): Promise<MonitoringModel> {
        return await this.repository.listById(Number(request.params.id))
    }
    async create(request: Request): Promise<MonitoringModel> {
        return await this.repository.create(request.body)
    }
    async update(request: Request): Promise<UpdateResult> {
        return await this.repository.update(request.body, Number(request.params.id))
    }
    async delete(request: Request): Promise<UpdateResult> {
        return await this.repository.delete(Number(request.params.id))
    }

}