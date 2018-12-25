<template>
    <div>
        <swiper :options="swiperoptions">
           <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
               slide{{item}}
           </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
   </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'//这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:"swiperDirect",
    data(){
     return {
        slide:[1,2,3,4,5,6],
        swiperoptions:{
          loop:true,
          pagination:{
            el:'.swiper-pagination',
            clickable:true
        }

        }
      }
    },
 components: {
    swiper,
    swiperSlide
   },
    created(){

    },
    mounted(){

    },
    methods:{
       
    },
   
}
</script>
<style scoped>
.swiper-slide{
    height:4rem;
    text-align:center;
    padding-top: 3rem;
    border-bottom:1px solid #ccc;
}
.swiper{
    height:7rem;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
}
</style>

