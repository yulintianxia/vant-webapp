<template>
<div>
   <div class="search-bar">
        <van-row>
            <van-col span="3">
                <img :src="locationIcon" width="80%" class="location-icon"/>
            </van-col>
            <van-col span="16">
                <input type="text" class="search-input" />
            </van-col>
            <van-col span="5">
                <van-button size="mini">查找</van-button>
            </van-col>
        </van-row>
     </div>
        <!-- swiper区域 -->
     <div class="swiper-area">
        <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(image, index) in bannerPicArray" :key="index">
            <img v-lazy="image.image" />
        </van-swipe-item>
        </van-swipe>
       </div>
       <!--type bar-->
        <div class="type-bar">
          <div v-for="(cate,index) in category" :key="index" >
             <img class="cateImg" v-lazy="cate.image" />
            <span>{{cate.mallCategoryName}}</span> 
         </div>
        </div>
     <!--adbanner area-->
        <div>
            <img v-lazy="adBanner.PICTURE_ADDRESS" class="adbanner" />
        </div>
    <!--Recommend goods area-->
    <div class="recommend-area">
        <div class="recommend-title">
            商品推荐
        </div>
        <div class="recommend-body">
          <swiper :options="swiperOption">
               <swiper-slide v-for="(item, index) in recommendGoods" :key="index">
                 <div class="recommend-item">
                   <img :src="item.image" width="80%" />
                      <div>{{item.goodsName}}</div>
                      <div>￥{{item.price | moneyFilter}} (￥{{item.mallPrice | moneyFilter}})</div>
                  </div>
               </swiper-slide>
              <!-- <div class="swiper-pagination" slot="pagination"></div>  -->
         </swiper>
        </div>
         <floor-component :floorData='floor1' :floorTitle='floorName.floor1'></floor-component>
         <floor-component :floorData='floor2' :floorTitle='floorName.floor2'></floor-component>
         <floor-component :floorData='floor3' :floorTitle='floorName.floor3'></floor-component>
   </div>
    <div class="hot-area">
    <div class="hot-title">热卖商品</div>
    <div class="hot-goods">
      <!--这里需要一个list组件-->
       <van-list>
          <van-row gutters='20'>
           <van-col span ='12' v-for="(item,index) in hotGoods" :key="index">
               <goods-info :goodsId='item.goodsId' :goodsName='item.Name' :goodsImage='item.image'></goods-info>
           </van-col>
          </van-row>
        </van-list>
     </div>
   </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'//这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import swiperDefault from "../swiper/swiperDefault"
import floorComponent from "../component/floorComponent"
import filterMoney from  '@/common/filter'
import goodsInfo from '../component/goodsinfo'
import {URL} from '@/config/url'

export default {
  name: 'shoppingMall',
  data () {
    return {
       locationIcon:require("../../assets/images/location.png"),
       bannerPicArray:[],
       category:[],
       adBanner:"",
       recommendGoods:[],
       floor1:[],         
       floor2:[],       
       floor3:[],        
       floorName:{} ,
       hotGoods:[], //热卖
       list:[] ,
       loading: false,
       finished: false,
       swiperOption: {
       slidesPerView:3,
       pagination:{
       el:'.swiper-pagination'
           }
        },
        
    }
  },
  components: {
    swiper,
    swiperSlide,
    floorComponent,
    goodsInfo
  },
  methods:{
    async getData(){
      let data = await this.$http.get(URL.getShoppingMall);
      console.log(data);
      this.category = data.data.category;//type-bar
      this.adBanner = data.data.advertesPicture;//广告
      this.bannerPicArray = data.data.slides;//轮播
      this.recommendGoods = data.data.recommend;//推荐商品
      this.floor1 = data.data.floor1; //floor1
      this.floor2 = data.data.floor2 //floor2
      this.floor3 = data.data.floor3  //floor3
      this.floorName = data.data.floorName;
      this.hotGoods  = data.data.hotGoods;//热卖商品

    },
    //列表加载
   onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  },
  filters:{
    moneyFilter(money){
       return filterMoney(money);
    }
  },
   created () {
         
   },
    mounted () {
       this.getData();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-bar{
    height:2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
}
.search-input{
    width:100%;
    height: 1.3rem;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    border-bottom:1px solid #fff !important;
    background-color: #e5017d;
    color:#fff;
}
.location-icon{
    padding-top:.2rem;
    padding-left:.3rem;
}
.swiper-area{
    clear:both;
    max-height:15rem;
    overflow: hidden;
}
.swiper-area img{
    width:100%;
    height:10rem;
}
.type-bar{
    background-color: #fff;
    margin:0 .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size:14px;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
}
.type-bar div{
    padding:.3rem;
    font-size:12px;
    text-align: center;
    flex:1;
}
img.cateImg{
    width:90%;
}
.adbanner{
  width:100%;
}
.recommend-area{
    background-color: #fff;
    margin-top: .3rem;
  }
.recommend-title{
    border-bottom:1px solid #eee;
    font-size:14px;
    padding:.2rem;
    color:#e5017d;
}
.recommend-body{
   border-bottom: 1px solid #eee;
}
.recommend-item{
    width:99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    
    text-align: center;
 }
  .floor-anomaly{
      display: flex;
      flex-direction:row;
      background-color: #fff;
      border-bottom:1px solid #ddd;
  }
  .floor-anomaly div{
     width:10rem;
     box-sizing: border-box;
     -webkit-box-sizing: border-box;
  }
  .floor-one{
      border-right:1px solid #ddd;
  }
  .floor-two{
      border-bottom:1px solid #ddd;
  }
  .floor-rule{
      display: flex;
      flex-direction: row;
      /* flex-wrap:wrap; */
      background-color: #fff;
  }
  .floor-rule div{
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width:50%;
      border-bottom:1px solid #ddd;
  }
  .floor-rule div:nth-child(odd){
      border-right: 1px solid #ddd;
  }
  .hot-area{
      text-align: center;
      font-size:14px;
      height: 1.8rem;
      line-height:1.8rem;
  }
  .hot-goods{
    height:115rem;
    overflow: hidden;
    background: white;
  }
</style>
