var jwt = require('jsonwebtoken');

const Account = {
    authenticate: (ctx) => {
        let ctx_query = ctx.query;
        if(ctx_query.username === 'admin' && ctx_query.password === 'admin'){
            //过期时间的单位为秒 60*60 = 1h，也可用 '1h'来替换 60*60 还可以这样表示 "2 days", "10h", "7d"
            const token = jwt.sign(ctx_query, 'shhhhh', { expiresIn: '1h' });  
            ctx.body = {token: token};
        }else{
            ctx.body = {err: 'is error! test value is ' + ctx_query.test};
        }
    },

    home: (ctx, name) => {
        if(name){
            try {
                ctx.body = ctx.state.user;
            } catch(err) {
                ctx.body = {err: err};
            }
        }
    }
}

export { Account };
