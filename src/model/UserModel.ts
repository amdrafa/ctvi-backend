import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn,  } from "typeorm";
import { RolesEnum } from "../enums/roleEnumerator";

@Entity("user")
export class UserModel {
    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ name: 'company_id', nullable: true })
    companyId?: number;

    @Column()
    document: string;

    @Column({ name: 'is_foreigner' })
    isForeigner: boolean;

    @Column({type: "text"})
    roles: Enumerator<RolesEnum>;

    @CreateDateColumn({ name: 'created_at'})
    createdAt?: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;
}