import { BookingModel } from './BookingModel';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("terms")
export class TermsModel{

    @PrimaryGeneratedColumn()
    id: number

    @Column({type:"text"})
    text: string

    @ManyToOne(()=> BookingModel, booking => booking.terms)
    booking: BookingModel
}