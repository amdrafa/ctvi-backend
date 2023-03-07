import { BookingModel } from "../../model/BookingModel";
import { ScheduleModel } from "../../model/ScheduleModel";
import { Request } from 'express';
import { UpdateResult } from "typeorm";


export interface IBookingService{
    list(): Promise<BookingModel[]>;
    listByBookingIdDetail(bookingId: string):Promise<BookingModel>;
    listByIdDetail(id:number):Promise<BookingModel>;
    create(request: Request): Promise<BookingModel>;
    createWithSchedules(request: Request): Promise<BookingModel>;
    updateBooking(request: Request): Promise<UpdateResult>;
    updateTermsByBookingId(request: Request): Promise<BookingModel>;
    deleteById(id: number): Promise<UpdateResult>;
    deleteByBookingId(bookingId: string): Promise<UpdateResult>
    approveBooking(request: Request): Promise<BookingModel>
    listByUserId(request: Request): Promise<BookingModel[]>
}