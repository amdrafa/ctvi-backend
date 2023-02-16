import { BookingModel } from "../model/BookingModel";

export class BookingRepository{

    public getAllBookings(): [] {
        return require("../test/mockup/booking.json")
    }

    public getById(id:number): any {
        return require("../test/mockup/booking.json")
    }

    public getByBookingId(bookingId:string): any {
        return require("../test/mockup/booking.json")
    }

    public createBooking(props: BookingModel): BookingModel {
        return props
    }

    public deleteByBookingId(bookingId: string): boolean{
        return true
    }

    public deleteById(id: number): boolean{
        return true
    }

    public updateBooking(id: number): BookingModel{
        return
    }

}