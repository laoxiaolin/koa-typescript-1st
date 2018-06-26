const User = {
    signUp: async (ctx)=>{
        ctx.status = 201;
        ctx.body = 'signUp';
    },

    signIn: async (ctx)=>{
        ctx.status = 201;
        ctx.body = 'signIn';
    }
}

export { User }