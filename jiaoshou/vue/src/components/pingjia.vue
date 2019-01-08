<template>
<div class="cjia">
    <div>
        <p>总体评价</p>
        <p>tudiap</p>
        <p>用户印象</p>
        <mt-button type="default">满意</mt-button>
        <mt-button type="default">节能</mt-button>
        <mt-button type="default">静电胜点</mt-button>
    </div>
    <div class="cpingjia">
        <ul>
           <li class="cfuk">
           <input type="checkbox"/><h3>xxxx</h3>
           </li>
           <li>dddddddddddddd</li>
           <li>时间</li>
        </ul>
 
    </div>
  </div>
</template>

<script>
export default {
    name:'pingjia',
    data() {
        return {
            
        }
    },
}

</script>
<style scoped>
.cjia{
    height:100%;
  
}


.cfuk{
    display: flex;
    align-items: baseline;
}
.cpingjia{
    border-top: 2px solid #e2e2e2;
    border-bottom: 2px solid #e2e2e2;
    height: 25%;
}
.cpingjia ul{
    height: 100%;
}
.cpingjia ul li:nth-of-type(1){
    height: 17%;
}
.cpingjia ul li:nth-of-type(2){
    height: 66%;
}
.cpingjia ul li:nth-of-type(3){
    height: 17%;
    float: right;
}
</style>