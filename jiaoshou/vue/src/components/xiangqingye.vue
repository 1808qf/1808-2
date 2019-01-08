<template>
  <div class="hello">
     <header>
         <span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span>
         <router-link to="/pinbiao" tag="span">商品</router-link>
         <router-link to="/xiangqing" tag="span">详情</router-link>
         <router-link to="/pingjia" tag="span">评价</router-link>
     </header>
     <section>
         <router-view></router-view>
        
     </section>
     <footer>
        <div class="cche">
            <span class="iconfont icon-shoucang"></span>
            <span class="iconfont icon-gouwuche2"></span>
            <mt-button type="primary" @click="foo()">加入购物车</mt-button>
            <mt-button type="danger">立即购买</mt-button>
        </div>

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
        },
        foo(){
            console.log(33)
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
section{
    overflow-y: auto;
    flex: 1;
}
header span{
    
    line-height: 25px;
}

footer{
    background: red;
    height: 54px;
    
}
footer .iconfont{
    font-size: 47px;
}
.cche{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>