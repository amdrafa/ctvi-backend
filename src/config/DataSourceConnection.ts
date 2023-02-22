import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserModel } from "../model/UserModel"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "admin",
    database: "test",
    entities: [UserModel],
    synchronize: true,
    logging: false,
})
