import { BookingModel } from "../model/BookingModel";

export interface IBookingService{
    list():BookingModel[];
    listDetail(bookingId: string):BookingModel;
    create(body:any):null;
}