import { InviteModel } from './../model/InviteModel';
import { VehicleTypeModel } from './../model/VehicleTypeModel';
import { MonitoringModel } from './../model/MonitoringModel';
import { EquipmentModel } from './../model/EquipmentModel';
import { TermsModel } from './../model/TermsModel';
import { ResourceModel } from './../model/ResourceModel';
import { CompanyModel } from './../model/CompanyModel';
import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserModel } from "../model/UserModel"
import { BookingModel } from '../model/BookingModel';
import { ScheduleModel } from '../model/ScheduleModel';
import { CertificateModel } from '../model/CertificateModel';
import { UserCertificatesModel } from '../model/UserCertificatesModel';

export const TypeORMDataSource = new DataSource({
    type: "postgres",
    host: "dsa-ctvi-server.postgres.database.azure.com",
    port: 5432,
    username: "CtviAdmin",
    password: "@dmin8548@",
    database: "ctvi",
    synchronize: true,
    entities: [UserModel, CompanyModel, ResourceModel, BookingModel, ScheduleModel, TermsModel, EquipmentModel, MonitoringModel, CertificateModel, VehicleTypeModel, InviteModel, UserCertificatesModel],
    logging: false,
    ssl: {rejectUnauthorized: false}
})
