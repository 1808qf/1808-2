<template>
	<div class="a-me">
		<div class="a-me-1">
			  <div class="a-left"></div>
			  <div class="a-center">
			    	<h1>个人名称</h1>
			        <p>查看并编辑个人资料</p>
			  </div>
			  <div class="a-right">
			  	<i class="iconfont icon-xiaojiantou"></i>
			  </div>
			  
		</div>
		<div class="a-shangcheng">
			 <i class="iconfont icon-31shezhi"></i> 
			 <span>我的商城</span>
			 <i class="iconfont icon-xiaojiantou" @click="tap()"></i> 
	    </div>
		
		<div class="a-wode">
			 <i class="iconfont icon-31shezhi"></i> 
			 <span>我的设置</span>
			 <i class="iconfont icon-xiaojiantou"@click="map()"></i> 
	    </div>
	    
	    <div class="a-bangzhu">
			 <i class="iconfont icon-31shezhi"></i> 
			 <span>帮助中心</span>
			 <i class="iconfont icon-xiaojiantou" @click="pap()"></i> 
	    </div>
	    
	    <div class="a-shezhi">
			 <i class="iconfont icon-31shezhi"></i> 
			 <span>设置</span>
			 <i class="iconfont icon-xiaojiantou" @click="bap()"></i> 
	    </div>
		
	
	</div>
</template>

<script>
	export default{
		name:"Me",
		data(){
			return{
				tit:'我的'//控制的是头部标题
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		},
		methods:{
			tap(){
				this.$router.push('/MyShop')
			},
			map(){
				this.$router.push('/MyDevice')
			},
			pap(){
				this.$router.push('/HelpCenter')
			},
			bap(){
				this.$router.push('/SheZhi')
			},
			
		},
	}
	
	
	
	
	
</script>

<style>
.a-me-1{
	width:100vw;
	height: 130px;
	border:1px solid #ccc;
	display: flex;  
    align-items: center;

	
}
 .a-left{
	width:80px;
	height:80px;
	border:1px solid #ccc;
	border-radius: 80px;
	margin-left: 30px;
}	
.a-center{
	width:200px;
	height:80px;
	padding:0 20px;
	line-height:40px;
	
}
.a-center h1{
	font-weight: 100;
	}
.a-center p{
	color:#666;
	}
.a-right{
	width:20px;
	height:80px;
	line-height: 80px;
	float:right;
	margin-right:30px;
}
.a-right .icon-xiaojiantou	{
	font-size:30px;
	
	
}
.a-shangcheng{
	width:100vw;
	height:50px;
	border:1px solid #ccc;
	margin:10px 0;
	line-height: 50px;
}
.a-shangcheng .icon-31shezhi{
	font-size: 30px;
	margin-left:30px;
	
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
.a-wode .icon-31shezhi{
	font-size: 30px;
	margin-left: 30px;
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
.a-bangzhu .icon-31shezhi{
	font-size: 30px;
	margin-left: 30px;
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

.a-shezhi{
	width:100vw;
	height:50px;
	border:1px solid #ccc;
	margin:10px 0;
	line-height: 50px;
}
.a-shezhi .icon-31shezhi{
	font-size: 30px;
	margin-left: 30px;
}
.a-shezhi span{
	font-size:20px;
	margin-left: 10px;
}
.a-shezhi .icon-xiaojiantou	{
	float:right;
	margin-right: 30px;
	font-size: 30px;
}
</style>
