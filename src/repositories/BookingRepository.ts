import { UpdateResult } from "typeorm";
import { TypeORMDataSource } from "../config/DataSourceConnection";
import { BookingModel } from "../model/BookingModel";

export class BookingRepository{

    repository = TypeORMDataSource.getRepository(BookingModel);

    public async getAllBookings(): Promise<BookingModel[]> {
        return await this.repository.find();
    }

    public async getById(id:number): Promise<BookingModel> {
        return await this.repository.findOneBy({id: id})
    }

    public async getByBookingId(bookingId:string): Promise<BookingModel> {
        return await this.repository.findOneBy({bookingId: bookingId})
    }

    public async createBooking(booking: BookingModel): Promise<BookingModel> {
        return await this.repository.save(booking);
    }

    public async deleteByBookingId(bookingId: string): Promise<UpdateResult>{
        return await this.repository.softDelete({bookingId: bookingId})
    }

    public async deleteById(id: number): Promise<UpdateResult>{
        return await this.repository.softDelete({id: id})
    }   

    public async updateBooking(booking: BookingModel): Promise<UpdateResult>{
        return await this.repository.update({id: booking.id}, {...booking})
    }

}