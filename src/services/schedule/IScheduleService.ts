import { Request } from "express";
import { ScheduleModel } from "../../model/ScheduleModel";

export interface IScheduleService{

    create(request: Request): Promise<ScheduleModel[]>;

    listDetail(id:number):Promise<ScheduleModel>;

    listByBookingId(bookingId:number):Promise<ScheduleModel[]>;

    approveSchedule(request: Request): Promise<ScheduleModel>
    
}