<template>
  <div class="hello">
     <header>
         <span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span>
         <h3>商品</h3>
         <h3>详情</h3>
         <h3>评价</h3>
     </header>
     <section>
        <div class="clunbo">
        <mt-swipe :auto="4000">
          <mt-swipe-item class="cone"><img src="../assets/vue1.jpg"/></mt-swipe-item>
          <mt-swipe-item class="ctwo"><img src="../assets/vue2.jpg"/></mt-swipe-item>
          <mt-swipe-item class="cserry"><img src="../assets/vue3.jpg"/></mt-swipe-item>
        </mt-swipe>
      </div>
      <ul class="cjieshao">
          <li>介绍</li>
          <li>特点</li>
          <li>钱<span>库存</span></li>
      </ul>
      <ul class="cfuwu">
          <li>服务</li>
          <li>厂家认证</li>
          <li>全国联保</li>
          <li>全国包邮</li>
          <li>&gt;</li>
      </ul>
      <ul class="cyixuan">
          <li>已选</li>
          <li>太阳花一剑</li>
          <li>&gt;</li>
      </ul>
      <ul class="cpeisong">
          <li>配送</li>
          <li>杭州市至</li>
          <li>杭州市工业区</li>
          <li>17:00之前付款预计23号送达</li>
      </ul>
     </section>
     <footer>

     </footer>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    
    name:'xiangqingye',
    data() {
        return {
            
        }
    },
    methods: {
        fanhui(){
            this.$router.go(-1)
        }
    },

}

</script>
<style scoped>
.hello{
  height: 100vh;
  display: flex;
  flex-direction: column;
 
}
header{
    display:flex;
    justify-content:space-around;
    border: 1px solid #bbbbbb;
}
header span{
    line-height: 25px;
}
.clunbo{
  height: 160px;
  background: brown
}
.clunbo img{
  width: 100%;
  height: 100%;
}
.cjieshao{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 125px;
}
.cjieshao li{
    margin: 0 15px;
}
.cjieshao li~li{
    color: #ff9900;
}
.cjieshao li:last-child{
    font-size: 20px;
}
.cjieshao span{
    font-size: 14px;
    color: #999999;
    float: right;
}
.cfuwu,.cyixuan,.cpeisong{
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #e2e2e2;
    border-bottom: 2px solid #e2e2e2;
}
.cyixuan{
    
    margin-top: 20px;
}
</style>