import { randomUUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, ManyToMany, JoinTable, Generated,  } from "typeorm";
import { RolesEnum } from "../enums/roleEnumerator";
import { CertificateModel } from "./CertificateModel";
import { CompanyModel } from "./CompanyModel";

@Entity("ctvi_users")
export class UserModel {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    @Generated('uuid')
    uuid: string
    
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

    @ManyToMany(() => CertificateModel)
    @JoinTable()
    certificates: CertificateModel[]
}