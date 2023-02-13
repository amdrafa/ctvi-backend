import { ScheduleModel } from "../model/ScheduleModel";

export interface IScheduleService{
    list(bookingId: string):string[];

    listDetail(id:string[]):ScheduleModel[];
}