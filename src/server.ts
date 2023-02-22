import express from 'express';
import { router } from './routes';


import "reflect-metadata"
import { TypeOrmDataSource } from './config/DataSourceConnection';

TypeOrmDataSource.initialize()
    .then(() => {
        console.log("Database is running!")
    })
    .catch((error) => console.log("Error: " + error))

    const app = express();

    app.use(express.json());

    app.use(router);

    app.listen(3333, () => console.log('Server is running'));
