import { BookingModel } from "../model/BookingModel";
import { IBookingService } from "./IBookingService";

export class BookingService implements IBookingService {
    constructor(){}

    public list(): any {
        const bookingFile = require("../test/mockup/booking.json")
        let jsonData = [];

        if (bookingFile != null){
            bookingFile.forEach(data => {
                let bookingModel = new BookingModel();
                bookingModel.id = data.id
                bookingModel.bookingId = data.bookingId
                bookingModel.userId = data.userId
                bookingModel.scheduleId = data.scheduleId
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