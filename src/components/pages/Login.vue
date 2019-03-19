<template>
      <div>
       <van-nav-bar
        title="用户登录"
        left-text="返回"
        left-arrow
        @click-left="goBack"
        />
        <div class="register-panel">
        <van-field
            v-model="username"
            label="用户名"
            icon="clear"
            placeholder="请输入用户名"
            required
            @click-icon="username = ''"
            :error-message = 'usernameErrMsg'
        />
        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
            :error-message = 'passwordErrMsg'
        />
        <div class="register-button">
            <van-button type="primary" @click='loginAction'  :loading='openLoading' size="large">登录</van-button>
        </div>
       </div>
    </div>
</template>

<script>

import {URL} from '@/config/url';
import { Toast } from 'vant';
export default {
  name: 'register',
  data () {
    return {
      username:'',
      password:'',
      openLoading:false,//是否注册用户的loadding
      usernameErrMsg:'',
      passwordErrMsg:''
    }
  },
  components: {
   
  },
  created(){
      if (this.getStore('userInfo')) {
         Toast.success('你已经登录');
         this.$router.push('/')
      }
  },
  methods:{
    goBack(){
       this.$router.go(-1);
    },
   async axiosLogin() {
       this.openLoading = true;
       let data = await this.$http.post(URL.registerUser, {userName:this.username, password:this.password})
        console.log(data);
        this.openLoading = false;
     if (data.code === 200 && data.message === true) {
          await  this.saveName();
       } else {
          Toast.fail('登录失败');
          this.openLoading = false;
       }
    },
    async saveName() {
       new promise((r,j)=>{
          this.setStore('userInfo', this.username);
          setTimeout(()=>{
             r();
          }, 500)
       }).then(()=>{
          Toast.success('登录成功');
          this.$router.push('/')
       }).catch(err=>{
           Toast.fail('登录状态保存失败')
           console.log(err)
       })
    },
    loginAction() {
      this.checkForm() && this.axiosLogin();
    },
    //表单验证
     checkForm() {
       //需要优化
       let isOk = true;
       if (this.username.length < 5 ) {
           this.usernameErrMsg = '用户名不能少于5位';
           isOk = false;
       } else {
         this.usernameErrMsg = '';
       }
       if (this.password.length < 6 ) {
         this.passwordErrMsg = '密码不能少于6位';
          isOk = false;
       } else {
          this.passwordErrMsg =''
       }
        return isOk;
     }
   
  },
  filters:{
   
  },
    mounted () {
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .register-panel{
    width:96%;
    border-radius: 5px;
    margin:20px auto;
    padding-bottom:50px;
 }
.register-button{
    padding-top:10px;
}
</style>
