import * as Router from 'koa-router';
import { home } from './home'
import { user }  from './user'

const router = new Router();

router.use('/', home.routes(), home.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());

export const routes = router;