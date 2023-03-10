import { InviteModel } from './InviteModel';
import { VehicleTypeModel } from './VehicleTypeModel';
import { TermsModel } from './TermsModel';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToOne, JoinColumn } from "typeorm";
import { StatusEnum } from "../enums/statusEnumerator";
import { ScheduleModel } from "./ScheduleModel";

@Entity("booking")
export class BookingModel{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({nullable: true})
    bookingId?: string;

    @Column()
    userId: number;

    @OneToMany(()=>InviteModel, invite=>invite.booking)
    invite:InviteModel

    @OneToOne(()=> VehicleTypeModel)
    @JoinColumn()
    vehicleType:VehicleTypeModel

    @Column({type: "timestamp"})
    dataInicial: Date;

    @Column({type: "timestamp"})
    dataFinal: Date;

    @Column({type: "enum", enum: StatusEnum, nullable: true})
    status: StatusEnum;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @OneToMany(() => ScheduleModel, schedule => schedule.booking, {cascade:true, eager: true, nullable: true})
    public schedules?: ScheduleModel[];

    @ManyToMany(() => TermsModel)
    @JoinTable()
    terms: TermsModel[]
}
