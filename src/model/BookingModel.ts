import { StatusEnum } from "../enums/statusEnumerator";
import { ScheduleModel } from "./ScheduleModel";

export class BookingModel{
    constructor(){
        this.id = null;
        this.bookingId = null;
        this.userId = null;
        this.dataInicial = null;
        this.dataFinal = null;
        this.status = null;
        this.createdAt = null;
        this.deletedAt = null;
        this.updatedAt = null;
    }

    id?: number;
    bookingId?: string;
    userId: number;
    dataInicial: Date;
    dataFinal: Date;
    scheduleList: [ScheduleModel];
    status?: StatusEnum;
    createdAt?: Date;
    deletedAt?: Date;
    updatedAt?: Date;
}
