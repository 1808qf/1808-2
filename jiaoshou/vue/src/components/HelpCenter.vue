<template>
	<div class="MyShop">
		<header>
			<p><span class="fanhui" @click="tap()">&lt;</span>帮助中心</p>	
		</header>
		
		
		<div class="a-shangcheng">
			 <span>智能设备</span>
			 <i class="iconfont icon-xiaojiantou" @click="bap()"></i> 
	    </div>
		
		<div class="a-wode">
			  
			 <span>商城</span>
			 <i class="iconfont icon-xiaojiantou" @click="map()"></i> 
	    </div>
	    
	    <div class="a-bangzhu">
			  
			 <span>问题反馈</span>
			 <i class="iconfont icon-xiaojiantou" @click="pap()"></i> 
	    </div>
	    
	   
		
		
		
		
		
		
		
		
	</div>
</template>

<script>
	export default{
		name:'Detail',
		data(){
			return{
				detail:""
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
			pap(){
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


.a-shangcheng{
	width:100vw;
	height:50px;
	border:1px solid #ccc;
	margin:10px 0;
	line-height: 50px;
}

.a-shangcheng span{
	font-size:20px;
	margin-left: 10px;
	
}
.a-shangcheng .icon-xiaojiantou	{
	float:right;
	margin-right: 30px;
	font-size: 30px;
}

.a-wode{
	width:100vw;
	height:50px;
	border:1px solid #ccc;
	margin:10px 0;
	line-height: 50px;
}

.a-wode span{
	font-size:20px;
	margin-left: 10px;
}
.a-wode .icon-xiaojiantou	{
	float:right;
	margin-right: 30px;
	font-size: 30px;
}

.a-bangzhu{
	width:100vw;
	height:50px;
	border:1px solid #ccc;
	margin:10px 0;
	line-height: 50px;
}

.a-bangzhu span{
	font-size:20px;
	margin-left: 10px;
}
.a-bangzhu .icon-xiaojiantou	{
	float:right;
	margin-right: 30px;
	font-size: 30px;
}


</style>