import { BookingModel } from "../model/BookingModel";

export class BookingRepository{

    public getAllBookings(): [] {
        return require("../test/mockup/booking.json")
    }

    public getById(id:string): any {
        return require("../test/mockup/booking.json")
    }

    public createBooking(props: BookingModel): BookingModel {
        return props
    }

}