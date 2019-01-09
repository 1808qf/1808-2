<template>
  <div class="hello">
      <header>
         <span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span>
         <h3>网点查询</h3>
         
     </header>
     <section>
    <div class="cdian">
             <p>杭州市拱野区<i class="iconfont "></i><span>|</span>附近网点</p>
             
             
         </div>
     </section>
  </div>
</template>

<script>
export default {
    name:'wangdian',
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
    flex: 1;
    overflow: auto;
}

</style>