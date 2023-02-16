import { BookingModel } from "../model/BookingModel";
import { ScheduleModel } from "../model/ScheduleModel";
import { Request } from 'express';


export interface IBookingService{
    list():BookingModel[];
    listDetail(bookingId: string):BookingModel;
    create(request: Request):BookingModel;
}