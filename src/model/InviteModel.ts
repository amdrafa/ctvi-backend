import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("invite")
export class InviteModel{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({name: 'booking_id'})
    bookingId: string;

    @Column({name: 'user_id', nullable: true})
    userId?: string;

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
