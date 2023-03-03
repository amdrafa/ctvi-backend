import { UpdateResult } from 'typeorm';
import { TermsModel } from './../../model/TermsModel';
export interface ITermsInterface{
    list(): Promise<TermsModel[]>
    listById(id: number): Promise<TermsModel>
    create(terms: TermsModel): Promise<TermsModel>
    update(id:number, terms:TermsModel): Promise<UpdateResult>
    delete(id:number): Promise<UpdateResult>
}