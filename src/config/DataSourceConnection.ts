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

export const TypeORMDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "ctvi",
    synchronize: true,
    entities: [UserModel, CompanyModel, ResourceModel, BookingModel, ScheduleModel, TermsModel, EquipmentModel, MonitoringModel, CertificateModel],
    logging: false,
})
