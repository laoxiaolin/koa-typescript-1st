import * as Router from 'koa-router';
import { Account } from './app/authenticate';

const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = 'Hello World!';
});

router.get('/test', async (ctx) => {
    ctx.status = 201;
    ctx.body = 'test';
});

router.get('/public', async(ctx) =>{
    ctx.body = 'unprotected!hahaha\n';
})

router.get('/login', Account.authenticate);

router.get('/home/:name', Account.home);

export const routes = router;