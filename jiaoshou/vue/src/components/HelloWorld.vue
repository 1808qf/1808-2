<template>
  <div class="hello">
    <header>
      <div class="ckuang">
        
        <mt-search
          v-model="value"
          cancel-text="取消"
          placeholder="搜索">
        </mt-search>
        
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
          <li class="cfenlei" v-for="item in arr" :key="item">{{item}}</li>
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
export default {
  name: 'HelloWorld',
  data () {
    return {
      arr:['1','2','3','4','5','6','7','8'],
      str:[
        {name:'挂饰空',xiangqing:'智能',qian:'$500'},
        {name:'挂饰空调',xiangqing:'智能',qian:'$500'},
        {name:'挂饰空调',xiangqing:'智能',qian:'$500'}],
      value:"",

    }
  }
}
</script>


<style scoped>
.hello{
  height: 100vh;
  display: flex;
  flex-direction: column;
 
}
header{
  height: 60px;
 
 
}

.ckuang{
  height: 60px;
  background:sienna;
}
footer{
  overflow: scroll;
  flex: 1;
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
.cone{
  background:red;
}
.ctwo{
  background: aqua;
}
.cserry{
  background: chocolate;
}
</style>
