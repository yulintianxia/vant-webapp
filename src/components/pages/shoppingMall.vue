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
                      <div>￥{{item.price}} (￥{{item.mallPrice}})</div>
                  </div>
               </swiper-slide>
            
                <!-- <div class="swiper-pagination" slot="pagination"></div>  -->
         </swiper>
        </div>
        <!-- <swiperDefault></swiperDefault> -->

   </div> 
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'//这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import swiperDefault from "../swiper/swiperDefault"
export default {
  name: 'shoppingMall',
  data () {
    return {
       locationIcon:require("../../assets/images/location.png"),
       bannerPicArray:[],
       category:[],
       adBanner:"",
       recommendGoods:[],
       swiperOption: {
          slidesPerView:3,
          pagination: {
            el: '.swiper-pagination'
          }
        },
        //  swiperSlides: [1, 2, 3, 4, 5]
    }
  },
  components: {
    swiper,
    swiperSlide,
    swiperDefault
  },
  methods:{
    async getData(){
      let data=await this.$http.get("index");
      console.log(data);
      this.category=data.data.category;//type-bar
      this.adBanner=data.data.advertesPicture;//广告
      this.bannerPicArray=data.data.slides;//轮播
      this.recommendGoods =data.data.recommend  //推荐商品
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
</style>
