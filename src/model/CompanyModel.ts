import { StatusEnum } from './../enums/statusEnumerator';
import { CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ScheduleModel } from "./ScheduleModel";

@Entity()
export class CompanyModel{
   
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cnpj: string;

    @Column(
        {
            type: "enum",
            enum: StatusEnum,
            default: StatusEnum.PreApproved
        }
    )
    status: StatusEnum;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @DeleteDateColumn({name: 'deleted_at', nullable: true})
    deletedAt: Date;

    @UpdateDateColumn({ name: 'updated_at', nullable: true})
    updatedAt: Date;
    
}
