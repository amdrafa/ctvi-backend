import { ScheduleModel } from "./ScheduleModel";

export class CompanyModel{
    constructor(){
        this.id = null;
        this.name = null;
        this.cnpj = null;
        this.status= null;
        this.createdAt = null;
        this.deletedAt = null;
        this.updatedAt = null;
    }

    id: number;
    name: string;
    cnpj: string;
    status: Enumerator;
    createdAt: Date;
    deletedAt: Date;
    updatedAt: Date;
    
}
