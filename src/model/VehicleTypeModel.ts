import { BookingModel } from './BookingModel';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('vehicle_type')
export class VehicleTypeModel{
    @PrimaryGeneratedColumn()
    id:number

    @Column({name: 'passenger_car', default:0})
    passangerCar:number

    @Column({name: 'urban_light_bus', default:0})
    urbanLightBus:number

    @Column({name: 'coach_bus', default:0})
    coachBus:number

    @Column({name: 'light_duty_truck', default:0})
    lightDutyTruck:number

    @Column({name: 'urban_heavy_bus', default:0})
    urbanHeavyBus:number

    @Column({default:0})
    others:number

    @CreateDateColumn({name:'created_at'})
    createdAt:Date

    @UpdateDateColumn({name:'updated_at'})
    updatedAt:Date

    @DeleteDateColumn({name:'deleted_at'})
    deletedAt:Date
}