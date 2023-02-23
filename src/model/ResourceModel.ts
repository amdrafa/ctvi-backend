import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ResourceType } from "../enums/ResourceType";
import { StatusEnum } from "../enums/statusEnumerator";
import { ScheduleModel } from "./ScheduleModel";


@Entity()
export class ResourceModel{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;
    
    @Column()
    type?: ResourceType;

    @Column()
    capacity: number;

    @Column({name: "is_active"})
    isActive?: boolean;

    
    @CreateDateColumn({ name: 'created_at'})
    createdAt?: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;
}
