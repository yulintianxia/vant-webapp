const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
const fs = require('fs');

router.get('/insertAllGoodsInfo', async(ctx) => {
    fs.readFile('./data_json/newGoods.json', 'utf8', (err, data) => {
        console.log(err);
        console.log(data);
        data = JSON.parse(data);
        let saveCount = 0;

        const Goods = mongoose.model('Goods');
        data.map((value, index) => {
            let newGoods = new Goods(value);
            newGoods.save().then(() => {
                saveCount++;
                console.log('成功' + saveCount);
            }).catch(error => {
                console.log(error)
            })
        })
    })
    ctx.body = '开始导入数据'
})


router.get('/insertAllCategoySub', async(ctx) => {
        fs.readFile('./data_json/category_sub.json', 'utf8', (err, data) => {
            data = JSON.parse(data);
            let saveCount = 0;
            const Categorysub = mongoose.model('CategorySub');
            console.log(data);
            data.RECORDS.map((value, index) => {
                let categorysub = new Categorysub(value);
                categorysub.save().then(() => {
                    saveCount++;
                    console.log('成功' + saveCount);
                }).catch(error => {
                    console.log(error);
                })
            })
        })


        ctx.body = '开始导入数据'
    })
    //获取商品详情信息的接口
router.post('/getDetailGoodsInfo', async(ctx) => {
    let goodsId = ctx.request.body.goodsId;
    const Goods = mongoose.model('Goods');
    await Goods.findOne({ ID: goodsId }).exec()
        .then(async(result) => {
            ctx.body = { code: 200, message: result };
        })
        .catch(error => {
            console.log(error);
            ctx.body = { code: 500, message: error };
        })
})


module.exports = router;