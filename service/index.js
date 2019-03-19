const Koa = require('koa');
const app = new Koa();
const { connect, initSchemas } = require('./database/init.js');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
//解决跨域问题
const cors = require('koa2-cors');
const Router = require('koa-router');

app.use(bodyParser());
app.use(cors());

let user = require('./appApi/user.js');
let home = require('./appApi/home.js');
let goods = require('./appApi/goods.js');
//装载所有子路由




// (async() => {
//     await connect();
//     initSchemas();
//     const User = mongoose.model('User');
//     let oneUser = new User({ userName: 'jsRao6', password: '123456' });
//     oneUser.save().then(() => {
//         console.log('插入成功');
//     })
//     let user = await User.findOne({}).exec();
//     console.log(user);
// })()

let router = new Router();
router.use('/user', user.routes());
router.use('/home', home.routes());
router.use('/goods', goods.routes());


//加载中间件
app.use(router.routes());
app.use(router.allowedMethods());



(async() => {
    await connect();
    initSchemas();
})()



app.use(async(ctx) => {
    ctx.body = '<h1>hello word</h1>'
})



app.listen(3000, () => {
    console.log('service 3000')
})