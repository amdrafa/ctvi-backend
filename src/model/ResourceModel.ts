import { ResourceType } from "../enums/ResourceType";
import { StatusEnum } from "../enums/statusEnumerator";
import { ScheduleModel } from "./ScheduleModel";

export class ResourceModel{
    constructor(){
        this.id = null;
        this.name = null;
        this.type = null;
        this.capacity = null;
        this.isActive = null;
        this.createdAt = null;
        this.deletedAt = null;
        this.updatedAt = null;
    }

    id?: number;
    name: string;
    type?: ResourceType;
    capacity: number;
    isActive?: boolean;
    createdAt?: Date;
    deletedAt?: Date;
    updatedAt?: Date;
}
