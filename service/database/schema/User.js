const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
//加盐,加密
const bcrypt = require('bcrypt');
const SALE_WORK = 10;
//创建Userschema
const userSchema = new Schema({
    UserId: ObjectId,
    userName: { unique: true, type: String },
    password: String,
    createAt: { type: Date, default: Date.now() },
    lastLoginAt: { type: Date, default: Date.now() }
})
userSchema.pre('save', function(next) {
    console.log(this.password);
    bcrypt.genSalt(SALE_WORK, (err, salt) => {
        if (err) return next(111, err)
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next('222', err)
            this.password = hash
            next()
        });
    })
})

//发布模型
mongoose.model('User', userSchema);