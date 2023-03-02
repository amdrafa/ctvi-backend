import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne,  } from "typeorm";
import { RolesEnum } from "../enums/roleEnumerator";
import { CompanyModel } from "./CompanyModel";

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
    roles: RolesEnum;

    @CreateDateColumn({ name: 'created_at'})
    createdAt?: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;

    @ManyToOne(() => CompanyModel, company => company.users)
    public company: CompanyModel;
}