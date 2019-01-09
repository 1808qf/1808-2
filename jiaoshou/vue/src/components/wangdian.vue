<template>
  <div class="hello">
      <header>
         <span class="iconfont icon-qiehuanqizuo" @click="fanhui()"></span>
         <h3>网点查询</h3>
         
     </header>
     <section>
            <div class="cdian">
             <p>杭州市拱野区<i class="iconfont icon-fanhui4"></i><span>|</span>附近网点</p>
            </div>
            <div class="cchaxun">
            <ul class="cgongsi">
                <li>1杭州有限公司</li>
                <li>业务范围：销售家电</li>
                <li>2.6km|
                    <div>
                    <p>eeeeeeeeeeeeeeeeeeeee</p>
                    <p>uuuuuuu</p>
                    </div>
                </li>
            </ul>
            <div class="cdianhua">
                <ul>
                    <li>tu</li>
                    <li>电话</li>
                </ul>
                <ul>
                    <li>tu</li>
                    <li>电话</li>
                </ul>
            </div>
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
.cdian{
    height: 5%;
}
.cdian span{
    margin: 0 10px;
}
.cchaxun{
    border-top:1px solid #e2e2e2; 
    border-bottom:1px solid #e2e2e2; 
    display: flex;
    height: 17%;
    margin-top:10px; 
}
.cgongsi{
    width:70%;
}
.cdianhua{
    width: 30%;
}
.cdianhua{
    display: flex;
}
.cdianhua ul{
    width: 50%;
}
.cgongsi li:nth-child(3){
    display: flex;
    height: 50%;
}
</style>