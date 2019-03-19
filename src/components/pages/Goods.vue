<template>
   <div>
     商品详情
  </div>
</template>

<script>

import {URL} from '@/config/url'

export default {
    name: 'goods',
    data () {
        return {
            goodsId:'775e575ce28a4f89b1dfe2c99eb08ae7'
        }
    },
    components: {
        
    },
    methods:{
    
     async getGoods() {
         console.log(URL.getDetailGoodsInfo);
         let data = await this.$http.post(URL.getDetailGoodsInfo, {goodsId: this.goodsId});
         console.log(data);
      }
    },
    created () {
         
   },
    mounted () {
      this.getGoods();
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
</style>
