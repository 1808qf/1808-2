<template>
  <div class="hello">
      <header>
         <span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span>
         <h3>进度查询</h3>
     </header>
     <section>
         <div class="ccha">
             <span class="iconfont icon-quanbudingdan1"></span>
             <p>暂无订单</p>
         </div>
     </section>
  </div>
</template>

<script>
export default {
    name:'jindu',
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
    
    border: 1px solid #bbbbbb;
}
header h3{
    width: 88%;
    text-align:center;
    line-height: 37px;
}
header span{
    margin: 10px;
}
section{
    overflow: scroll;
    flex: 1;
}
.ccha{
    width: 30%;
    display: flex;
    height: 17%;
    background: #e2e2e2;
    border-radius: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50% auto;
}
.ccha .iconfont{
    font-size: 75px;
}

</style>