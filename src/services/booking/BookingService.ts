import { BookingModel } from "../../model/BookingModel";
import { IBookingService } from "./IBookingService";
import { BookingRepository } from "../../repositories/BookingRepository";
import { ScheduleService } from "../schedule/ScheduleService";
import { StatusEnum } from "../../enums/statusEnumerator";
import { Request } from "express";
import { Converter } from "../../utils/Converter";
import { UpdateResult } from "typeorm";

export class BookingService implements IBookingService {
    
    private converter = new Converter()
    
    private bookingRepository = new BookingRepository;
  
    async list(): Promise<BookingModel[]> {
        
        return await this.bookingRepository.getAllBookings();

    }

    async listByBookingIdDetail(bookingId: string ): Promise<BookingModel> {

        return await this.bookingRepository.getByBookingId(bookingId)

    }

    async listByIdDetail(id: number): Promise<BookingModel> {

        return await this.bookingRepository.getById(id)

    }

    async create(request: Request): Promise<BookingModel> {

        return await this.bookingRepository.createBooking(request.body)

    }
    
    async deleteById(id: number): Promise<UpdateResult> {
        
        return await this.bookingRepository.deleteById(id);

    }

    async deleteByBookingId(bookingId: string): Promise<UpdateResult> {
        
        return await this.bookingRepository.deleteByBookingId(bookingId);

    }
    
}