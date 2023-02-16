import { BookingModel } from "../model/BookingModel";
import { ScheduleModel } from "../model/ScheduleModel";


export interface IBookingService{
    list():BookingModel[];
    listDetail(bookingId: string):BookingModel;
    create({userId, dataFinal, dataInicial, scheduleList}: BookingModel):BookingModel;
}