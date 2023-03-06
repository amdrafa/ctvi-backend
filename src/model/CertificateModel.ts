import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { UserModel } from './UserModel';
import { CertificateEnum } from '../enums/certificateEnumerator';

@Entity("certificate")
export class CertificateModel{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({name: 'certificate_name'})
    certificateName: string;

    @Column({name: 'certificate_code'})
    certificateCode: string;

    @Column({name: "certificate_type",type: "enum", enum: CertificateEnum})
    certificateType: CertificateEnum

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

}
