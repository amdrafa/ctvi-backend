import { BookingModel } from "../model/BookingModel";

export class BookingRepositorie{

    public getAllBookings(): [] {
        return require("../test/mockup/booking.json")
    }

}