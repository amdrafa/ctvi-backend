import { BookingModel } from "../model/BookingModel";
import { ScheduleModel } from "../model/ScheduleModel";
import { Request } from 'express';


export interface IBookingService{
    list():BookingModel[];
    listByBookingIdDetail(bookingId: string):BookingModel;
    listByIdDetail(id:number):BookingModel
    create(request: Request):BookingModel;
    deleteById(id: number): boolean;
    deleteByBookingId(bookingId: string): boolean
}