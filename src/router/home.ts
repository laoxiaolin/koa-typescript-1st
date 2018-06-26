import * as Router from 'koa-router';
import { Home } from './../controller/home'
const router = new Router();

router.get('/', Home);

export const home = router;