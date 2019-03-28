<template>
  <div>
    <div class="navbar-div">
      <van-nav-bar title="类别列表"/>
    </div>
    <div>
      <van-row>
        <van-col span="6">
          <div id="leftNav">
            <ul>
              <li
                @click="clickCategory(index, item.ID)"
                :class="{categoryAction:categoryIndex == index}"
                v-for="(item,index)  in category"
                :key="index"
              >{{item.MALL_CATEGORY_NAME}}</li>
            </ul>
          </div>
        </van-col>
        <van-col span="18">
          <van-tabs v-model="active" @click="onlickCagegorySub">
            <van-tab v-for="(item,index) in categorySub" :key="index" :title="item.MALL_SUB_NAME"></van-tab>
          </van-tabs>
          <div id="list-div">
            <van-pull-refresh v-model="isReFrese" @refresh="onRefresh">
              <van-list v-model="loading" :finished="finish" @load="onload">
                <div class="list-item" v-for="(item,index) in goodList" :key="index">
                  <div class="list-item-img">
                    <img :src="item.IMAGE1" width="100%">
                    <div class="list-item-text">
                      <div>{{item.NAME}}</div>
                      <div class>￥{{item.ORI_PRICE}}</div>
                    </div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { URL } from "@/config/url";
import { Toast } from "vant";
export default {
  name: "categotylist",
  data() {
    return {
      category: [],
      categoryIndex: 0,
      categorySub: [],
      active: 0,
      loading: false,
      finish: false,
      list: [], //商品数据
      page: 1,
      goodList: [], //商品列表信息
      categorySubId: "", //商品子类信息
      isReFrese: false //下拉刷新
    };
  },
  components: {},
  methods: {
    async getCategory() {
      let data = await this.$http.get(URL.getcategotylist);
      if (data.code === 200 && data.message) {
        console.log(data);
        this.category = data.message;
        this.getCategorySubById(this.category[0].ID);
      } else {
        Toast("服务器错误,获取失败");
      }
    },
    getClientHeight() {
      let ClientHeight = document.documentElement.clientHeight;
      document.querySelector("#leftNav").style.height =
        ClientHeight - 46 + "px";
      document.querySelector("#list-div").style.height =
        ClientHeight - 80 + "px";
    },
    clickCategory(index, id) {
      this.categoryIndex = index;
      this.getCategorySubById(id);
      this.page = 1;
      this.finished = false;
      this.goodList = [];
      this.getCategorySubById(this.categoryId);
    },
    //根据大类id获取小类列表
    async getCategorySubById(categoryId) {
      let data = await this.$http.post(URL.getCategorySubList, {
        categoryId: categoryId
      });
      console.log(data);
      if (data.code === 200 && data.message) {
        this.categorySub = data.message;
        this.active = 0;
        this.categorySubId = this.categorySub[0].ID;
        this.onload();
      } else {
        Toast("服务器错误,获取失败");
      }
    },
    //上拉加载
    onload() {
      setTimeout(() => {
        this.categorySubId = this.categorySubId
          ? this.categorySubId
          : this.categorySub[0].ID;
        this.getGoodList();
      }, 800);
    },
    //下拉刷新
    onRefresh() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.isReFrese = false;
        this.list = [];
        this.finish = false;
        this.onload();
      }, 500);
    },
    async getGoodList() {
      let data = await this.$http.post(URL.getGoodsListByCategorySubID, {
        categorySubId: this.categorySubId,
        page: this.page
      });
      if (data.code === 200) {
        if (data.message.length) {
          this.page++;
          this.goodList = this.goodList.concat(data.message);
        } else if (
          data.code === 200 &&
          (data.message.length === 0 || data.message == null)
        ) {
          this.finished = true;
        }
        this.loading = false;
      } else {
        console.log(error);
      }
    },
    onlickCagegorySub(index, title) {
      this.categorySubId = this.categorySub[index].id;
      console.log("categorySubId" + this.categorySubId);
      this.goodList = [];
      this.finished = false;
      this.page = 1;
      this.onload();
    }
  },
  filters: {
    moneyFilter(money) {
      return filterMoney(money);
    }
  },
  created() {},
  mounted() {
    this.getCategory();
    this.getClientHeight();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#leftNav ul li {
  line-height: 2rem;
  border-bottom: 1px solid #e4e7ed;
  padding: 3px;
  font-size: 0.8rem;
  text-align: center;
}
.categoryAction {
  background-color: #fff;
}
.list-item {
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  padding: 5px;
}
#list-div {
  overflow: scroll;
}
.list-item-img {
  flex: 8;
}
.list-item-text {
  flex: 16;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
