
<template>
    <div class="goods-info" @click="goGoodsPage">
        <div class="goods-image">
            <img v-lazy="goodsImage"  width="90%" />
        </div>
        <div class="goods-name">{{goodsName}}</div>
        <div class="goods-price">￥{{goodsPrice | moneyFilter }}</div>
    </div>
</template>

<script>
import filterMoney from  '@/common/filter'
export default {
  name : 'goods',
  props:['goodsImage','goodsName','goodsPrice','goodsId'],
  data () {
    return {
      
        
    }
  },
    filters:{
      moneyFilter(money){
      return filterMoney(money)
    }
    },
    components: {
      
    },
   methods:{
     goGoodsPage() {
       this.$router.push({name:'Goods', query:{goodsId:this.goodsId}}, )
     }
   },
   created () {
         
   },
    mounted () {
       
    },
    watch:{
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods-name{
    padding: 0 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap; 
}
</style>
