<template>
  <div class="hello">
      <header>
         <span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span>
         <h3>维修服务</h3>
     </header>
     <section>
         
         <ul class="czhuang">
             <li v-for="item in str" :key="item.id">{{item}}<span>请选择&gt;</span></li>
         </ul>
         
         <div class="cxuan">
             <div class="rong">
                 <p>选填内容为了更快的为您服务</p>
                 <mt-button type="default">产品型号</mt-button>
                 <mt-button type="default">机身条码</mt-button>
                 <form>
                 <input type="text" placeholder="请输入型号">
                 <textarea placeholder="其他备注"></textarea>
                 </form>
             </div>
           
         </div>
        <button class="ctijiao">提交</button>
     </section>
  </div>
</template>

<script>
export default {
    name:'anzhuang',
    data() {
        return {
            str:['维修产品','故障类型','期望时间','服务地址']
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
    margin:0 10px;
    overflow: scroll;
    flex: 1;
}
.czhuang{
    height:26%;
    margin-top: 20px;
}
.czhuang li{
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 24%;
    border-top: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;

}
.czhuang span{
    font-size: 14px;
    color: #a8a2a2;
}
.cxuan{
    margin-top:20px; 
    margin-top: 20px;
    height: 40%;
    border-top: 2px solid #e2e2e2;
    border-bottom: 2px solid #e2e2e2;
}
.rong{
        height: 91%;
            margin: 0 10px;
}
.rong p{
        margin-bottom: 9px;
}
.rong form{
        width: 84%;
    margin-top: 9px;
    height: 61%;
}
.rong form input{
    width: 100%;
    height: 26%;
}
    
.rong form textarea{
    margin: 15px 0px 0px;
    width: 100%;
    height: 53%;
}
.ctijiao{
        width: 100%;
    height: 7%;
    margin-top: 13%;
}
</style>