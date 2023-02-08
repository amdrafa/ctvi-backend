import { BookingModel } from "../model/BookingModel";
import { IBookingService } from "./IBookingService";

export class BookingService implements IBookingService {
    constructor(){}

    public list(): any {
        const bookingFile = require("../test/mockup/booking.json")
        const bookingModel = new BookingModel()

        let jsonData = [];

        //console.log(bookingFile)
        bookingFile.forEach(data => {
            jsonData.push({
                data
            })
            
            // bookingModel.id = data.id
            // bookingModel.bookingId = data.bookingId
            // bookingModel.userId = data.userId
            // bookingModel.scheduleId = data.scheduleId
            // bookingModel.status = data.status
            // bookingModel.createdAt = data.createdAt 
            // bookingModel.deletedAt = data.deletedAt
            // bookingModel.updatedAt = data.updatedAt
            
        })
        // return jsonData
        return bookingFile
    }

}