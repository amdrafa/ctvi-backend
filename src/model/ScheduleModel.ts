import { ResourceModel } from "./ResourceModel";

export class ScheduleModel{
    
    constructor(){
        this.id = null;
        this.scheduleId = null;
        this.startDate = null;
        this.finalDate = null;
        this.listResource = null;
        this.status = null;
        this.createdAt = null;
        this.deletedAt = null;
        this.updatedAt = null;
    }

    id: number;
    scheduleId: Array<number>;
    startDate: Date;
    finalDate: Date;
    listResource: [ResourceModel];
    status: Enumerator;
    createdAt: Date;
    deletedAt: Date;
    updatedAt: Date;

}