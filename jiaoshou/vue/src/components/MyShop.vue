<template>
	<div class="MyShop">
		<header>
			<p><span class="fanhui" @click="tap()">&lt;</span>我的商城</p>	
		</header>
	    <div class="a-dingdan">
	    	<div class="a-dingdan-a">
	    		<span>全部订单</span>
	    		<p @click="map()">
		    		<span>查看详情</span>
		    		<i class="iconfont icon-xiaojiantou"></i>
	    		</p>	
	    	</div>
	    	<div class="a-dingdan-b">
	    		<div class="a-bb">
	    			<i class="iconfont icon-31daifukuan"></i>
	    		    <p>待支付</p>
	    		</div>
	    		<div class="a-cc">
	    			<i class="iconfont icon-31daishouhuo"></i>
	    		    <p>待发货</p>
	    		</div>
	    		<div class="a-dd">
	    			<i class="iconfont icon-daishouhuo"></i>
	    		    <p>待收货</p>
	    		</div>
	    		<div class="a-ee">
	    			<i class="iconfont icon-dianzan"></i>
	    		    <p>评&nbsp;&nbsp;价</p>
	    		</div>
	    		<div class="a-ff">
	    			<i class="iconfont icon-tuikuan"></i>
	    		    <p>退款/售后</p>
	    		</div>
	    	</div>
	    </div>
	    
	    <div class="a-shoucang">
	    	<div class="a-shoucang-a">
	    		<h1>0</h1>
	    		<p>我的收藏</p>
	    	</div>
	    	<div class="a-shoucang-b">
	    		<h1>10</h1>
	    		<p>我的积分</p>
	    	</div>
	    	<div class="a-shoucang-c">
	    		<h1>0</h1>
	    		<p>优惠劵</p>
	    	</div>
	    	<div class="a-shoucang-d">
	    		<h1>0</h1>
	    		<p>礼品卡</p>
	    	</div>
	    </div>
	    
	    <div class="a-gouwu">
	    		<i class="iconfont icon-gouwuchexuanzhong"></i>
	    		<span >购物车</span>
	    		<i class="iconfont icon-xiaojiantou"></i>
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
			map(){
				this.$router.push('/Mydingdan')
                 console.log(11111)
			}
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
.a-dingdan{
	width: 100vw;
	height: 140px;
	border: 1px solid #ccc;
	margin-top:30px;
}
.a-dingdan .a-dingdan-a{
	width: 100vw;
	height: 40px;
	border-bottom: 1px solid #ccc;
	line-height: 40px;
}
.a-dingdan .a-dingdan-a span{
	float: left;  
	margin-left: 20px;
}
.a-dingdan .a-dingdan-a p{
	width: 150px;
	float: right;
	color:#666;
}

.a-dingdan .a-dingdan-a p .icon-xiaojiantou{
	margin-left: 20px;
}

.a-dingdan .a-dingdan-b {
	width: 100vw;
	height: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #666;
     
}
.a-dingdan-b .a-bb{
	text-align:center;
}
.a-dingdan-b  .iconfont{
	font-size:48px;
	
}
.a-shoucang{
    width: 100vw;
	height: 100px;
	border: 1px solid #ccc;
	margin-top:30px;
	display: flex;
	justify-content:space-around;
	align-items:center;	
}
.a-shoucang-a{
	text-align: center;
}
.a-shoucang-a h1{
	color:#666;
}
.a-shoucang-a p{
	color:#999;
}
.a-shoucang-b h1{
	color:#666;
}
.a-shoucang-b p{
	color:#999;
}
.a-shoucang-b{
	text-align: center;
}
.a-shoucang-c{
	text-align: center;
}
.a-shoucang-c h1{
	color:#666;
}
.a-shoucang-c p{
	color:#999;
}
.a-shoucang-d{
	text-align: center;
}
.a-shoucang-d h1{
	color:#666;
}
.a-shoucang-d p{
	color:#999;
}
.a-gouwu{
	width: 100vw;
	height: 50px;
	border: 1px solid #ccc;
	margin-top:30px;
	display: flex;
	align-items:center;
	justify-content: space-around;
	background:pink;
	float: left;	
}
.a-gouwu .icon-gouwuchexuanzhong{
	font-size:30px;
	margin:0 20px;
}
.a-gouwu span{
	display:inline-block;
	width:200px;
	
}
.a-gouwu .icon-xiaojiantou{
	font-size: 25px;
}
</style>