import { Request } from 'express';
import { UpdateResult } from 'typeorm';
import { MonitoringModel } from './../../model/MonitoringModel';
export interface IMonitoringService{
    list(): Promise<MonitoringModel[]>
    listById(request: Request): Promise<MonitoringModel>
    create(request: Request): Promise<MonitoringModel>
    update(request: Request): Promise<UpdateResult>
    delete(request: Request): Promise<UpdateResult>
}