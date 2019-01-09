<template>
  <div class="hello">
      <header>
          <h1>服务</h1>
          <p>随时为您提供舒心的服务</p>
      </header>
      <section>
          <div class="cfuwu">
              <img src="../assets/vue1.jpg">
          </div>
          <div class="cfuwu2">
              <router-link to="/jindu" tag="div" class="aee">
              <span class="iconfont icon-serviceshangmenanzhuang"></span>
              <p>进度查询</p>
              </router-link>
              <router-link to="/anzhuang" tag="div" class="aee">
              <span class="iconfont icon-serviceshangmenanzhuang"></span>
              <p>安装服务</p>
              </router-link>
              <router-link to="/weixiu" tag="div" class="aee">
              <span class="iconfont icon-serviceshangmenanzhuang"></span>
              <p>维修服务</p>
              </router-link>
          </div>
          <ul class="cwang">
              <router-link to="/kefu" tag="li">
                <span class="iconfont icon-kefu"></span>
                在线客服
              </router-link>
              <router-link to="/wangdian" tag="li">
              <span class="iconfont icon-tabulation1"></span>
                网点查询
              </router-link>
              <router-link to="" tag="li" >
                <span class="iconfont icon-quanbudingdan1"></span>
                收费政策
              </router-link>
              <router-link to="" tag="li">
                <span class="iconfont icon-fenxiang2"></span>
                真伪查询
              </router-link>
              
          </ul>
      </section>
  </div>
</template>

<script>
export default {
name:'fuwuye',
}

</script>
<style scoped>
.hello{
  height: 100vh;
  display: flex;
  flex-direction: column;
 
}
header {
    margin:10px;
}
section{
    overflow: scroll;
    flex:1;
}
.cfuwu{
    margin: 10px;
}
.cfuwu img{
    width: 100%;
    height: 100%;
}
.router-link-active{
    width: 20%;
    height: 20%;
}
.cfuwu2{
    display: flex;
    justify-content: space-between;
    margin: 10px;
    height: 26%;
    border-bottom: 2px solid #e2e2e2;
}
.aee{
    text-align: center;
    width: 30%;
    height: 100%;
}
.iconfont{
    font-size: 90px;
}
.cwang .iconfont{
    font-size: 38px;
}
.cwang .router-link-active{
    width: 100%;
    height: 20%;
    
}
</style>