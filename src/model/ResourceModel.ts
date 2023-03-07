import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ResourceType } from "../enums/ResourceType";

@Entity("resource")
export class ResourceModel{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type:'enum',
        enum: ResourceType,
    })
    type: ResourceType;

    @Column({nullable: true})
    capacity: number;

    @Column({name: 'is_active', type:'boolean'})
    isActive: boolean;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: Date;

    @UpdateDateColumn({name: 'update_at'})
    updatedAt: Date;

}
