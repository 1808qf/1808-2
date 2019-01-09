<template>
  <div class="hello">
      <header>
         <span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span>
         <h3>在线客服</h3>
         
     </header>
  </div>
</template>

<script>
export default {
    name:'kefu',
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

</style>