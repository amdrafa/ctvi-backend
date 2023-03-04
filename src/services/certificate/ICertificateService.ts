import { Request } from 'express';
import { UpdateResult } from 'typeorm';
import { CertificateModel } from './../../model/CertificateModel';
export interface ICertificateService{
    list(): Promise<CertificateModel[]>
    listByID(request: Request): Promise<CertificateModel>
    create(request: Request): Promise<CertificateModel>
    update(request: Request): Promise<UpdateResult>
    delete(request: Request): Promise<UpdateResult>
}