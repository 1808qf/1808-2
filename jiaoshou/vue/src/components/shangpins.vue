<template>
  <div class="hello">
    <header>
      <div class="ckuang">
        <h2>商城</h2>
        <div class="csousuo">
        <mt-search
          v-model="value"
          cancel-text="取消"
          placeholder="搜索">
        </mt-search>
        </div>
         <span class="iconfont icon-gouwucheman"></span>
      </div>
    </header>
    <footer>
      <div class="clunbo">
        <mt-swipe :auto="4000">
          <mt-swipe-item class="cone"><img src="../assets/vue1.jpg"/></mt-swipe-item>
          <mt-swipe-item class="ctwo"><img src="../assets/vue2.jpg"/></mt-swipe-item>
          <mt-swipe-item class="cserry"><img src="../assets/vue3.jpg"/></mt-swipe-item>
        </mt-swipe>
      </div>
      <div>
        <ul class="cfen">
          <li class="cfenlei" v-for="item in arr" :key="item"><router-link to="/fenlei" tag="span">{{item}}</router-link></li>
        </ul>
        <div class="chantu">
          <p>产品图片</p>
        </div>
        <ul>
          <li v-for="item in str" :key="item.value">
            <h2>{{item.name}}</h2>
            <p>{{item.xiangqing}}</p>
            <p>{{item.qian}}</p>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'shangpins',
  data () {
    return {
    	tit:'商城首页' ,//控制的是头部标题
      arr:['1','2','3','4','5','6','7','8'],
      str:[
        {name:'挂饰空',xiangqing:'智能',qian:'$500'},
        {name:'挂饰空调',xiangqing:'智能',qian:'$500'},
        {name:'挂饰空调',xiangqing:'智能',qian:'$500'}],
      value:"",
      
    }
  },
  mounted() {
    console.log(this.sto)
    this.$emit('toparent',this.tit)
    // axios({
    //   method:'get',
    //   url:'http://10.8.155.74:8080/airdb/GoodsTypeAll.do'
    // }).then((data)=>{
    //   console.log(data.data.data)
    // })
  },
}
</script>


<style scoped>
ul,li{
	list-style:none;
}
.hello{
	
  height: 100vh;
  display: flex;
  flex-direction: column;
 
}
header{
  height:52px;
 
 
}

.ckuang{
  display: flex;
  height: 52px;
  background:#d9d9d9;
}

footer{
  overflow: scroll;
  flex: 1;
}
.csousuo{
  width: 67%;
}
.ckuang h2,.ckuang span{
  line-height: 52px;
}
.clunbo{
  height: 160px;
  background: brown
}
.clunbo img{
  width: 100%;
  height: 100%;
}
.cfen{
  display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
}
.cfenlei{
  width: 24%;
  height: 92px;
  
   
  border: 1px solid #bc8f8f;
}
.chantu{
  height: 150px;
  background: chartreuse;
}
.cfenlei span{
  display: block;
    width: 100%;
    height: 100%;
}
</style>
