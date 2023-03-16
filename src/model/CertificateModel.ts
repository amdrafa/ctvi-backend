import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CertificateEnum } from '../enums/certificateEnumerator';
import { UserCertificatesModel } from "./UserCertificatesModel";

@Entity("certificate")
export class CertificateModel{

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({name:"expiration_date"})
    expirationDate: string

    @Column({name: 'certificate_name'})
    certificateName: string;

    @Column({name: 'certificate_code', nullable: true})
    certificateCode?: string;

    @Column({name: "certificate_type",type: "enum", enum: CertificateEnum})
    certificateType: CertificateEnum

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @OneToMany(()=>UserCertificatesModel, userCertificate=> userCertificate.certificate)
    userCertificate: UserCertificatesModel[]

}
