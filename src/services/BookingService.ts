import { BookingModel } from "../model/BookingModel";
import { IBookingService } from "./IBookingService";
import { BookingRepositorie } from "../repositories/BookingRepositorie";

export class BookingService implements IBookingService {
    constructor(){}

    public list(): any {
        let bookingRepositorie = new BookingRepositorie;
        let jsonData = [];

        if (bookingRepositorie.getAllBookings != null){
            bookingRepositorie.getAllBookings.forEach(data => {
                let bookingModel = new BookingModel();
                bookingModel.id = data.id
                bookingModel.bookingId = data.bookingId
                bookingModel.userId = data.userId
                bookingModel.scheduleId = data.scheduleId
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
}