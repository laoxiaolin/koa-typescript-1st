import * as Koa from 'koa';

import { config } from './config';
import { logger } from './utility/logging';
import { routes } from './routes';

import { createConnection } from "typeorm";

createConnection().then(async connection => {
    const app = new Koa();

    app.use(logger);
    app.use(routes);

    app.listen(config.port);

    console.log(`Server running on port ${config.port}`);
    console.log(`Server running on port ${config.port}`);
}).catch(error => console.log("TypeORM connection error: ", error));