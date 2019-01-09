<template>
	<div class="MyShop">
		<header>
			<p><span class="fanhui" @click="tap()">&lt;</span>我的订单</p>	
		</header>
	    <div class="a-dingdan">
	    	<span>全部</span>	
	    	<ul>
	    		<li>代付款</li>
	    		<li>代发货</li>
	    		<li>代收货</li>
	    		<li>代评价</li>
	    		<li>售后退款</li>
	    		
	    	</ul>
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
	height: 40px;
	border: 1px solid #ccc;
	margin-top:30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
}
.a-dingdan span{
	width: 12vw;
	margin-left:5px;
	
}
.a-dingdan ul{
	width: 88vw;
	display: flex;
	justify-content: space-around;
	align-items: center;
	list-style: none;
	color: #666;
}

</style>