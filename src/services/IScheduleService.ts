import { ScheduleModel } from "../model/ScheduleModel";

export interface IScheduleService{
    list(bookingId: string):ScheduleModel[];

    listDetail(id:string):ScheduleModel[];

    listByBookingId(bookingId:string):ScheduleModel[];

    create(schedule: ScheduleModel): ScheduleModel;
}