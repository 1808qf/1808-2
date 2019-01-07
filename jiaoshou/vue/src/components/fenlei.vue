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
            re:['挂壁式空调','挂壁式空调','挂壁式空调','挂壁式空调','挂壁式空调']
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
    flex: 1;
}
.cleft{
    width: 25%;
    height: 100%;
    background: #eaeaea;
}
.cright{
    width: 75%
   
}
</style>