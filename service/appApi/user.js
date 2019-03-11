const Router = require('koa-router');
const mongoose = require('mongoose');
let router = new Router();

router.get('/', async(ctx) => {
    ctx.body = '这是用户操作首页'
})
router.post('/register', async(ctx) => {
    // console.log(ctx.request.body);
    // // ctx.body = '用户注册接口'
    // ctx.body = ctx.request.body;
    const User = mongoose.model('User');
    let newUser = new User(ctx.request.body);
    global.password = ctx.request.body.params.password;
    global.userName = ctx.request.body.params.userName;
    await newUser.save().then(() => {
        ctx.body = {
            code: 200,
            message: '注册成功'
        }
    }).catch(error => {
        ctx.body = {
            code: 500,
            message: error
        }
    })

})

module.exports = router;