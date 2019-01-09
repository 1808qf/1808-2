<template>
	<div class="MyShop">
		<header>
			<p><span class="fanhui" @click="tap()">&lt;</span>设置</p>	
		</header>
	    <div class="a-meset">
	    	<div class="a-meset-a">
		    	<span>通知栏快捷方式</span>
		    	<mt-switch v-model="value1" class="d1"></mt-switch>
	    	</div>
	    	<div class="a-meset-b">
		    	<span>新消息提醒</span>
		    	<mt-switch v-model="value2" class="d2"></mt-switch>
	    	</div>
	    	<div class="a-meset-c">
		    	<span>所有消息免打扰</span>
		    	<mt-switch v-model="value3" class="d3"></mt-switch>
	    	</div>
	    </div>
	    
	    <div class="a-shangcheng">
			 <span>检查固件升级</span>
			 <i class="iconfont icon-xiaojiantou" @click="bap()"></i> 
	    </div>
		
		<div class="a-wode"> 
			 <span>清除缓存</span>
			 <i class="iconfont icon-xiaojiantou"@click="map()"></i> 
	    </div>
	    
	  <button id="btn">退出登陆</button>
	    
	    
	    
	    
	   
	</div>
</template>

<script>
	export default{
		name:'Detail',
		data(){
			return{
				detail:"",
				value1:'',
				value2:'',
				value3:'',
				
			}
		},
		methods:{
			tap(){
				this.$router.go(-1)  //返回上一层路径，也可以/home，就是返回home路径
			},
			bap(){
				this.$router.push('/MyDevice')
			},
			map(){
				this.$router.push('/MyShop')
			},
		},	
	}
</script>

<style>
header{
 	height: 50px;
 	border:1px solid #666;
 	color:#666;
 	
 }
 header p{
 	line-height: 50px;
 	text-align: center;
 	font-size: 20px;	
 }
 
 header .fanhui{
 	position: absolute;
    left: 20px;
 } 

.a-meset-a{
	width: 100vw;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 30px;
	border: 1px solid #ccc;
}

.a-meset-a span{
	margin-left: 20px;	
}

.a-meset-a .d1{
	margin-right: 20px;
} 

.a-meset-b{
	width: 100vw;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #ccc;
}

.a-meset-b span{
	margin-left: 20px;	
}

.a-meset-b .d2{
	margin-right: 20px;
} 

.a-meset-c{
	width: 100vw;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #ccc;
}

.a-meset-c span{
	margin-left: 20px;	
}

.a-meset-c .d3{
	margin-right: 20px;
} 


.a-shangcheng{
	width:100vw;
	height:50px;
	border:1px solid #ccc;
	margin-top:30px;
	line-height: 50px;
}

.a-shangcheng span{
	
	margin-left: 20px;
	
}
.a-shangcheng .icon-xiaojiantou	{
	float:right;
	margin-right: 40px;
	font-size: 20px;
}

.a-wode{
	width:100vw;
	height:50px;
	border:1px solid #ccc;
	line-height: 50px;
}

.a-wode span{
	margin-left: 20px;
}
.a-wode .icon-xiaojiantou	{
	float:right;
	margin-right: 40px;
	font-size: 20px;
}


#btn{
	width:100vw;
	height:40px;
	text-align: center;
	line-height: 40px;
	background: #fff;
	margin-top:50px;
	border:1px solid #ccc;
	font-size: 18px;
	
}




</style>