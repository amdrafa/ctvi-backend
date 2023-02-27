import { StatusEnum } from './../enums/statusEnumerator';
import { CreateDateColumn, DeleteDateColumn, Entity, OneToMany, UpdateDateColumn } from 'typeorm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserModel } from './UserModel';
import { CompanyEnum } from '../enums/companyEnumerator';

@Entity("company")
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
            enum: CompanyEnum,
            default: CompanyEnum.Active
        }
    )
    status: CompanyEnum;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @DeleteDateColumn({name: 'deleted_at', nullable: true})
    deletedAt: Date;

    @UpdateDateColumn({ name: 'updated_at', nullable: true})
    updatedAt: Date;

    @OneToMany(() => UserModel, user => user.company, {cascade:true, eager: true})
    public users: UserModel[];
    
}
