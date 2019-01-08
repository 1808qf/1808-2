<template>
  <div>
      <header><span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span></header>
      <h2>商品列表</h2>
  </div>
</template>

<script>
export default {
    name:'pinbiao',
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
<style>
</style>