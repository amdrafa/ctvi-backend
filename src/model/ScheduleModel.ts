import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ResourceModel } from "./ResourceModel";

@Entity()
export class ScheduleModel{

    @PrimaryGeneratedColumn()
    id: number;

    // muitos schedules para um booking
    // id do booking será 
    @Column()
    scheduleId?: number;
    startDate: Date;
    finalDate: Date;
    listResource: [ResourceModel];
    status?: Enumerator;
    createdAt?: Date;
    deletedAt?: Date;
    updatedAt?: Date;
    isExclusive: boolean;

}