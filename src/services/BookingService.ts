import { BookingModel } from "../model/BookingModel";
import { IBookingService } from "./IBookingService";
import { BookingRepository } from "../repositories/BookingRepository";
import { ScheduleService } from "./ScheduleService";
import { StatusEnum } from "../enums/statusEnumerator";
import { Request } from "express";
import { Converter } from "../utils/Converter";

export class BookingService implements IBookingService {
    
    private converter = new Converter()
    
    private bookingRepository = new BookingRepository;
  
    public list(): any {
        
        let scheduleService = new ScheduleService;
        let bookingArray = new Array;
        bookingArray.push(this.bookingRepository.getAllBookings());
        let jsonData = [];
        

        if (bookingArray != null){
            bookingArray[0].forEach(data => {
                console.log(data)
                let bookingModel = new BookingModel();
                bookingModel.id = data.id
                bookingModel.bookingId = data.bookingId
                bookingModel.userId = data.userId
                bookingModel.dataInicial = data.dataInicial
                bookingModel.dataFinal = data.dataFinal
                bookingModel.status = data.status
                bookingModel.createdAt = data.createdAt 
                bookingModel.deletedAt = data.deletedAt
                bookingModel.updatedAt = data.updatedAt

                jsonData.push({
                    bookingModel
                })          
            })
            return jsonData
        }   
        return;
    }

    listByBookingIdDetail(bookingId: string ): BookingModel {

        const booking = this.bookingRepository.getByBookingId(bookingId)

        return booking;
    }

    listByIdDetail(id: number): BookingModel {

        const booking = this.bookingRepository.getById(id)

        return booking;
    }

    create(request: Request): BookingModel {

        
        const bookingModel = new BookingModel();

        try {
            bookingModel.userId = request.body.userId
            bookingModel.scheduleList = request.body.scheduleList;
            bookingModel.dataInicial = this.converter.converterToDate(request.body.dataInicial)
            bookingModel.dataFinal = this.converter.converterToDate(request.body.dataFinal);

            const bookingResponse = this.bookingRepository.createBooking(bookingModel);

            return bookingResponse;
        } catch (error) {
            throw new Error(error)
        }
    }
    
    deleteById(id: number): boolean {
        const response = this.bookingRepository.deleteById(id)
        return response
    }

    deleteByBookingId(bookingId: string): boolean {
        const response = this.bookingRepository.deleteByBookingId(bookingId)
        return response
    }
    
}