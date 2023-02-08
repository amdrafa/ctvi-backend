import { BookingModel } from "../model/BookingModel";
import { IBookingService } from "./IBookingService";
import test from "../test/mockup/booking.js"

export class BookingService implements IBookingService {
    constructor(){}

    public list(): BookingModel[] {
        const bookingFile = require("../test/mockup/booking.js")

        return bookingFile
    }




}