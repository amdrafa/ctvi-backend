import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { StatusEnum } from "../enums/statusEnumerator";
import { BookingModel } from "./BookingModel";
import { ResourceModel } from "./ResourceModel";

@Entity()
export class ScheduleModel{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    scheduleId: number;

    @Column({type: "timestamp with time zone"})
    startDate: Date;

    @Column({type: "timestamp with time zone"})
    finalDate: Date;

    @Column({name: "is_exclusive"})
    isExclusive: boolean;

    @Column({type: "enum", enum: StatusEnum})
    status: StatusEnum;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
    
    @ManyToOne(() => BookingModel, (booking) => booking.schedules)
    booking: BookingModel;

    @ManyToOne(() => ResourceModel, (resource) => resource.schedule)
    resource: ResourceModel;

}