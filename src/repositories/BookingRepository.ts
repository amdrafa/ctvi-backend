import { BookingModel } from "../model/BookingModel";

export class BookingRepository{

    public getAllBookings(): [] {
        return require("../test/mockup/booking.json")
    }

}