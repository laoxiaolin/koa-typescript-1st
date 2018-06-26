import * as Koa from 'koa';

import { config } from './config/config';
import { logger } from './utility/logging';
import { routes } from './router/index';

const app = new Koa();

app.use(logger);
app.use(routes.routes()).use(routes.allowedMethods());

app.listen(config.port);

console.log(`Server running on port ${config.port}`);