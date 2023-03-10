import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("terms")
export class TermsModel{

    @PrimaryGeneratedColumn()
    id: number

    @Column({type:"text", nullable: true})
    title: string

    @Column({type:"text"})
    text: string

    @CreateDateColumn({name: "created_at"})
    createdAt: Date

    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date

    @DeleteDateColumn({name: "deleted_at"})
    deletedAt: Date
    
}