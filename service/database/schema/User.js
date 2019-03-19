const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
//加盐,加密
const bcrypt = require('bcrypt');
const SALE_WORK = 10;
//创建Userschema
const userSchema = new Schema({
        serId: { type: ObjectId },
        userName: { unique: true, type: String },
        password: String,
        createAt: { type: Date, default: Date.now() },
        lastLoginAt: { type: Date, default: Date.now() }
    }, {
        collection: 'user'
    })
    //每次加密加盐处理
userSchema.pre('save', function(next) {
    //曲线救国,没法获取password,挂载于global;
    // console.log(global.password);
    bcrypt.genSalt(SALE_WORK, (err, salt) => {
        if (err) return next(err)
        bcrypt.hash(global.password, salt, (err, hash) => {
            if (err) {
                return next(err)
            }
            global.password = hash;
            this.password = global.password; 
            this.userName = global.userName;
            next()
        });
    })
})

//发布模型
mongoose.model('User', userSchema);