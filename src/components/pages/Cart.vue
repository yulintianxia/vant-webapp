<template>
  <div>
     <div class="navbar-div">
         <van-nav-bar title="购物车" />
     </div>
     <div class="cart-title">
        <van-button size="small" type="danger" @click="clearCart" plain>
            清空购物车
        </van-button>
     </div>
     <!-- 显示购物车商品 -->
     <div class="cart-list"> 
        <div class="pang-row" v-for="(item, index) in cartInfo" :key="index">
            <div class="pang-img">
               <img :src="item.image" width="100%"/>
            </div>
            <div class="pang-text">
               <div class="pang-goods-name">{{item.name}}</div>
               <div class="pang-control">
                   <van-stepper v-model='item.count'/>
               </div>
            </div>
            <div class="pang-goods-price">
                <div>¥{{item.price | moneyFilter}}</div>
                <div> 
                    x{{item.count}}
                </div>
                <div class='allPrice'>
                    ¥{{item.price*item.count | moneyFilter}}
                </div>
             </div>
        </div>
      </div>
       <!-- 显示总价格 -->
       <div class="totalMoney">
           商品总价:¥{{totalMoney | moneyFilter}}
       </div>
  
  </div>
</template>

<script>
import { URL } from "@/config/url";
import { Toast } from "vant";
import filterMoney from "@/common/filter";
export default {
  name: "cart",
  data() {
    return {
      cartInfo:[],
      isEmpty:false,
    };
  },
  components: {},
  filters: {
    moneyFilter(money) {
      return filterMoney(money);
    }
  },
  methods: {
    //获取购物车信息
    getcartInfo(){
        if (this.getStore('cartInfo')) {
           this.cartInfo = JSON.parse(this.getStore('cartInfo'));
        }
        console.log(this.cartInfo);
        this.isEmpty = this.cartInfo.length ? true:false
    },
    //清空购物车
    clearCart(){
      this.removeStore('cartInfo');
      this.cartInfo = [];
    }
  },
  computed:{
    totalMoney(){
        let allMoney = 0;
        this.cartInfo.forEach((item,index)=>{
            allMoney += item.price*item.count;
        })
        this.setStore('cartInfo',JSON.stringify(this.cartInfo));
        return allMoney;
    }
  },
  created() {
      this.getcartInfo();
  },
  mounted() {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-title{
    height: 2rem;
    line-height: 2rem;
    background-color: #fff;
    border-bottom:1px solid #E4E7ED;
    padding:5px;
    text-align:right;
}

.cart-list{
    background-color: #fff;
}
.pang-row{
    display: flex;
    flex-direction: row;
    flex-wrap:nowrap;
    padding:0.5rem;
    font-size:0.85rem;
    border-bottom:1px solid #E4E7ED;
}

.pang-img{
    flex:6;
}
.pang-text{
    flex:14;
    padding-left:10px;
}
.pang-control{
    padding-top:10px;
}
.pang-goods-price{
    flex:4;
    text-align: right;
}
.allPrice{
    color:red;
}
.totalMoney{
    text-align: right;
    background-color: #fff;
    border-bottom:1px solid #E4E7ED;
    padding:5px;
}
</style>
