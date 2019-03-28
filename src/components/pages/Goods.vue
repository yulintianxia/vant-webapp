<template>
  <div>
    <div class="navbar-div">
      <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft"/>
    </div>
    <div class="topimage-div">
      <img :src="goodsInfo.IMAGE1" width="100%">
    </div>
    <div class="goods-name">{{goodsInfo.NAME}}</div>
    <div class="goods-price">价格 ：￥{{goodsInfo.PRESENT_PRICE | moneyFilter}}元</div>
    <div>
      <van-tabs swipeable sticky>
        <van-tab title="商品详情">
          <div class="detail" v-html="goodsInfo.DETAIL"></div>
        </van-tab>
        <van-tab title="评论">评论制作中</van-tab>
      </van-tabs>
    </div>
      <div class="goods-bottom">
            <div>
                <van-button size="large" type="primary" @click="addGoodsToCart">加入购物车</van-button>
            </div>
            <div>
                <van-button size="large" type="danger">直接购买</van-button>
            </div>
        </div>
  </div>
</template>

<script>
import { URL } from "@/config/url";
import { Toast } from "vant";
import filterMoney from "@/common/filter";
export default {
  name: "goods",
  data() {
    return {
      goodsId: "",
      goodsInfo: {} //商品详细数据
    };
  },
  components: {},
  filters: {
    moneyFilter(money) {
      return filterMoney(money);
    }
  },
  methods: {
    async getGoods() {
      this.goodsId = this.$route.query.goodsId;
      console.log(this.goodsId);
      let data = await this.$http.post(URL.getDetailGoodsInfo, {
        goodsId: this.goodsId
      });
      if (data.code === 200 && data.message) {
        this.goodsInfo = data.message;
      } else {
        Toast("服务器错误,数据获取失败");
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    addGoodsToCart() {
      //取出本地购物车中的商品
      //localStorage.removeItem('cartInfo')
      let cartInfo = localStorage.cartInfo? JSON.parse(localStorage.cartInfo): [];
      let isHaveGoods = cartInfo.find(cart => cart.goodsId == this.goodsId);
      console.log(isHaveGoods);
      console.log(this.goodsInfo);
      if (!isHaveGoods) {
        let newGoodsInfo = {
          goodsId: this.goodsInfo.ID,
          name: this.goodsInfo.NAME,
          price: this.goodsInfo.PRESENT_PRICE,
          image: this.goodsInfo.IMAGE1,
          count: 1
        };
        cartInfo.push(newGoodsInfo);
        localStorage.cartInfo = JSON.stringify(cartInfo);
        Toast.success("添加成功");
      } else {
        Toast.success("已有此商品");
      }

      this.$router.push({ name: "Cart" });
    }
  },
  created() {},
  mounted() {
    this.getGoods();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .goods-name{
        background-color: #fff;
    } 
    .goods-price{
        background-color: #fff;
    }
    .detail {
        font-size:0px;
    }
    .goods-bottom{
        position:fixed;
        bottom:0px;
        left:0px;
        background-color: #FFF;
        width:100%;
        display: flex;
        flex-direction: row;
        flex-flow:nowrap;
    }

    .goods-bottom > div {
        flex:1;
        padding:5px;
    }
</style>
