import "reflect-metadata"
import { DataSource } from "typeorm"

export const TypeORMDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "123456",
    database: "ctvi",
    synchronize: true,
    logging: false,
})
