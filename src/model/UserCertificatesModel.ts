import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { certificateStatusEnum } from "../enums/certificateStatusEnum";
import { CertificateModel } from "./CertificateModel";
import { UserModel } from "./UserModel";

@Entity("user_certificates")
export class UserCertificatesModel{

    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=> CertificateModel, certificate=>certificate.userCertificate)
    certificate: CertificateModel

    @ManyToOne(()=> UserModel)
    user: UserModel

    @Column({name:'expire_date', nullable:true})
    expireDate?: Date

    @Column({type:'enum', enum:certificateStatusEnum, default:certificateStatusEnum.Valid})
    status: certificateStatusEnum

}