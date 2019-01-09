<template>
  <div class="hello">
      <!-- <header @click="foo(title)">{{title}}</header> -->
     
      
      <section>
    	   <router-view @toparent='getdata'></router-view>    	
      </section>
      <footer class="ss">
    	  <router-link to="/home" tag="span"><i class="iconfont icon-wo"></i>首页</router-link>
   		  <router-link to="/shangpins" tag='span'><i class="iconfont icon-home2"></i>商城</router-link>
   		  <router-link to='/fuwuye' tag="span"><i class="iconfont icon-yiguanzhu"></i>服务</router-link>
   		  <router-link to='/me' tag="span"><i class="iconfont icon-kefuyouxian"></i>我的</router-link>
   		  
      </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '登陆/注册'
    }
  },
  methods:{
       	getdata(msg){
  	    	this.title=msg;
           },
           foo(title){
           	if(title=="设备场景"){
           	console.log(888)
          	this.$router.push('/changjing')  //跳转到控制页面
           	}else{
           		console.log(666)
           	}
           }
           
         }
  }
</script>


<style scoped>
	.router-link-active{
 	color:#fff;
 }
 .hello{
 	height: 100vh;
 	width: 100vw;
 	display: flex;
 	flex-direction: column;
 	
 }
 
 header{
 	height: 50px;
 	background: green;
 	text-align: center;
 	line-height: 50px;
 	font-size: 20px;
 color:#fff;
 	
 	
 }
 section{
 	flex: 1;
 	overflow: auto;
 }
footer{
	height: 50px;
 	background: green;
 	text-align: center;
	overflow: hidden;
}

footer span{
	float: left;
	width:24%;
	display: flex;
	 flex-direction: column;
	 font-size: 12px;
	 
	
	
} 

.icon-wo{
	height: 30px;
	line-height: 30px;
	font-size: 30px;
}
.icon-home2{
	height: 30px;
	line-height: 30px;
	font-size: 30px;
}
.icon-yiguanzhu{
	height: 30px;
	line-height: 30px;
	font-size: 30px;
	color:red;
}
.icon-kefuyouxian{
	height: 30px;
	line-height: 30px;
	font-size: 30px;
}

</style>
