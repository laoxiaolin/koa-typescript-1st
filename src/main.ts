import * as Koa from 'koa';
import * as jwt from 'koa-jwt';
import * as cors from './utility/cors';
import { config } from './config';
import { logger } from './utility/logging';
import { routes } from './routes';

const app = new Koa();



// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function(ctx, next){
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = 'Protected resource, use Authorization header to get access\n';
        } else {
            throw err;
        }
    });
});

// Middleware below this line is only reached if JWT token is valid
// unless the URL starts with '/public'
app.use(jwt({ secret: 'shhhhh' }).unless({ path: [/^\/public|\/login|\/logout/] }));

app.use(logger);
app.use(routes.routes()).use(routes.allowedMethods());

app.listen(config.port);

console.log(`Server running on port ${config.port}`);