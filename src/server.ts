import express from 'express';
import { router } from './routes';
import "reflect-metadata"
import { TypeORMDataSource } from './config/DataSourceConnection';
import cors from 'cors';
import path from 'path'

TypeORMDataSource.initialize()
    .then(() => {
        console.log("Database is running!")
    })
    .catch((error) => console.log("Error: " + error))

    const app = express();
    app.use(express.static('uploads'))
    app.use(cors())
    app.use(express.json());
    app.use(router);
    app.listen(8080, () => console.log('Server is running'));
