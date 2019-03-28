import { LOCALURL } from './axiosConfig';
export const URL = {
    getShoppingMall: 'index', //商城首页所有信息
    getGoodsInfo: 'getGoodsInfo',
    registerUser: LOCALURL + 'user/register', //用户注册接口
    getDetailGoodsInfo: LOCALURL + 'goods/getDetailGoodsInfo', //获取商品详情
    getcategotylist: LOCALURL + 'goods/getCategoryList', //获取大类信息
    getCategorySubList: LOCALURL + 'goods/getCategorySubList', //获取商品小类信息
    getGoodsListByCategorySubID: LOCALURL + 'goods/getGoodsListByCategorySubID',
};