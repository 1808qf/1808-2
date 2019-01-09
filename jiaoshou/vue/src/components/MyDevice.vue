<template>
	<div class="MyShop">
		<header>
			<p><span class="fanhui" @click="tap()">&lt;</span>我的设备<i class="iconfont icon-jia1"></i></p>	
		</header>
		
		
		
		
		
		
		
		
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
header .icon-jia1{
	float: right;
	margin-right: 20px;
}
</style>