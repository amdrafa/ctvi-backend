import { BookingModel } from "../model/BookingModel";
import { IBookingService } from "./IBookingService";
import { BookingRepository } from "../repositories/BookingRepository";
import { ScheduleService } from "./ScheduleService";
import { StatusEnum } from "../enums/statusEnumerator";

export class BookingService implements IBookingService {
    
    
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

    listDetail(bookingId: string): BookingModel {

        const booking = this.bookingRepository.getById(bookingId)

        return booking;
    }
    
    create({ userId, dataFinal, dataInicial, scheduleList }: BookingModel): BookingModel {
        
        const booking = {
            userId,
            dataFinal,
            dataInicial,
            scheduleList,
            status: StatusEnum.PreApproved
        }

        try{
            const bookingResponse = this.bookingRepository.createBooking(booking)
            return bookingResponse;
        }catch(err){
            throw new Error(err);
        }

    }
    
}