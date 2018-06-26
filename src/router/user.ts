import * as Router from 'koa-router';
import {User} from './../controller/user'

const router = new Router();

router.get('/signup', User.signUp);

router.get('/signin', User.signIn);

export const user = router;