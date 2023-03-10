import { BookingModel } from './BookingModel';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("invite")
export class InviteModel{

    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToOne(()=>BookingModel, booking=>booking.invite)
    booking: BookingModel;

    @Column({name: 'user_id', nullable: true})
    userId?: number;

    @Column({name: 'guest_name'})
    guestName: string;

    @Column({name: 'guest_email'})
    guestEmail: string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

}
