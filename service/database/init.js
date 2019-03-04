const mongoose = require('mongoose');
const db = 'mongodb://127.0.0.1:27017/webapp';
const use = { useNewUrlParser: true };
const glob = require('glob');
const { resolve } = require('path');

exports.initSchemas = () => {
    glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require);
}
exports.connect = () => {
    //链接数据库
    mongoose.connect(db, use);
    let maxNum = 0;

    return new Promise((resolve, reject) => {

        //数据库断开连接
        mongoose.connection.on('disconnect', () => {
            console.log('*******数据库断开连接');
            if (maxNum <= 3) {
                maxNum++;
                mongoose.connect(db, use);
            } else {
                reject();
                throw new error('数据库发生问题,请人为处理')
            }

        });
        //数据库连接错误
        mongoose.connection.on('error', error => {
            if (maxNum <= 3) {
                maxNum++;
                mongoose.connect(db, use);
            } else {
                reject();
                throw new error(error, '数据库发生问题,请人为处理')
            }
        });
        //连接打开时
        mongoose.connection.once('open', () => {
            console.log('数据库成功连接');
            resolve()
        })
    })

}