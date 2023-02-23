import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserModel } from "../model/UserModel"

export const TypeORMDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "ctvi",
    synchronize: true,
    entities: [UserModel],
    logging: false,
})
