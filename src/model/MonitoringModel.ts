import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
@Entity('monitoring')
export class MonitoringModel{
    @PrimaryGeneratedColumn()
    id: number

    @Column({name:'lincense_plate', nullable:true})
    lincensePlate?: string

    @Column({name:'car_nickname', nullable:true})
    carNickname?: string

    @CreateDateColumn({name:'created_at'})
    createdAt: Date

    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date

    @DeleteDateColumn({name:'deleted_at'})
    deletedAt: Date
}