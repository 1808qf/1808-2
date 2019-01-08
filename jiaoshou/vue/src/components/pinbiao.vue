<template>
  <div class="hello">
      <header>
            <span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span>
            <form>
                <button><span class="iconfont icon-sousuo"></span></button>
                <input type="search"/>
            </form>
           
      </header>
      <section>
        <ul>
            <li>综合排序<span class="iconfont icon-fanhui4"></span></li>
            <li>拱野区</li>
            <li>筛选</li>
        </ul>
      </section>
      <footer>
          <div class="clie">
              <div class="cltu">图片</div>
              <ul>
                  <li>介绍</li>
                  <li>特点</li>
                  <li>$455<span>评价</span></li>
              </ul>
          </div>
      </footer>
  </div>
</template>

<script>
export default {
    name:'pinbiao',
    data() {
        return {
            value:'',
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
section{
    height: 5%;
    border-top: 2px solid #e2e2e2;
    border-bottom: 3px solid #e2e2e2;
}
section ul{
    margin-top:5px; 
     display: flex;
     justify-content: space-around;
    width: 100%
}
section li{
    
    text-align: center;
    width: 30%;
}
footer{
    overflow: scroll;
    flex: 1;
}
header{
    display: flex;
    height: 58px;
    justify-content: space-around;
    align-items: center;
}
form {
    width: 86%;
    height: 40px;
    background: #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}
form button{
    width: 13%;
    border: none;
    height: 30px;
}
form input{
        width: 83%;
    height: 30px;
    border: none;
    background: #e2e2e2;
}
.clie{
   
    border-bottom:2px solid #e2e2e2; 
    height: 24%;
    display: flex;
}
.cltu{
    width: 30%;
    height:100%;
}
footer li{
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
}
footer ul{
    width: 70%
}
</style>