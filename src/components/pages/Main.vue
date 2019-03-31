<template>
    <div>
      <div class="main-div">
          <keep-alive>
               <router-view/>
          </keep-alive>
        </div>
       <van-tabbar v-model='active' @change="changeTabbar">
         <van-tabbar-item icon="shop">首页</van-tabbar-item>
         <van-tabbar-item icon="records">列表页</van-tabbar-item>
         <van-tabbar-item icon="cart">购物车</van-tabbar-item>
         <van-tabbar-item icon="contact">会员中心</van-tabbar-item>
       </van-tabbar>
    </div>
</template>

<script>

import {URL} from '@/config/url';
import { Toast } from 'vant';
export default {
  name: 'Main',
  data () {
    return {
      active:0,
      nowpath:''
    }
  },
  components: {
   
  },
  created(){
     this.changeTabBarActive();
  },
//   updated(){
//     this.changeTabBarActive();
//   },
  methods:{
    changeTabBarActive(){
       this.nowpath = this.$route.path;
       if (this.nowpath == '/cart') {
         this.active = 2;
       }
    },
   changeTabbar(active){
     switch(active) {
         case 0:
         this.$router.push({name:'ShoppingMall'})
         break;
         case 1:
         this.$router.push({name:'CategoryList'})
         break;
         case 2:
         this.$router.push({name:'Cart'})
         break;
         default:
         this.$router.push({name:'People'})
     }
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
 
</style>
