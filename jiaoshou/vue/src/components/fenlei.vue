<template>
  <div class="hello">
     <header>
         <span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span>
         <h3>商品分类</h3>
         <span class="iconfont icon-sousuo"></span>
     </header>
     <section>
         <div class="cleft">
             <dl>
                 <dt>tt</dt>
                 <dd>dd</dd>
             </dl>
         </div>
         <div class="cright">
             <div>
                 <p>热门分类</p>
                 <ul>
                     <li v-for="item in re" :key="item.id">{{item}}</li>
                 </ul>
                 <p>热门单品</p>
                 <div class="cdan" v-for="item in xinghao" :key="item.id">
                     <h2>商品图</h2>
                     <div class="cxinghao">
                     <p>型号</p>
                     <p>{{item.name}}</p>
                     <p>价格</p>
                     <p>{{item.age}}</p>
                     </div>
                 </div>
             </div>
         </div>
     </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    
    name:'fenlei',
    data() {
        return {
            re:['挂壁式空调','挂壁式空调','挂壁式空调','挂壁式空调','挂壁式空调'],
            xinghao:[{name:'t',age:'3'},{name:'t',age:'3'},{name:'t',age:'3'}]
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
    justify-content: space-between;
    border: 1px solid #bbbbbb;
}
section{
    display:flex;
    justify-content: space-between;
    border: 1px solid #bbbbbb;
}
header h3{
    width: 40%;
    text-align:center;
    line-height: 37px;
}
header span{
    margin: 10px;
}
section{
    overflow-y: auto;
    flex: 1;
}
.cleft{
    position: fixed;
    width: 25%;
    height: 100%;
    background: #eaeaea;
}
.cright{
    margin-left: 25%;
    width: 75%
   
}
.cright ul{
    display: flex;
    flex-wrap: wrap;
}
.cright li{
    width: 32.5%;
    height:92px ;
    border:1px solid #e2e2e2;
}
.cdan{
   display: flex;

}
.cdan h2{
    width:30%;
}
.cxinghao{
    width: 70%;
}
</style>