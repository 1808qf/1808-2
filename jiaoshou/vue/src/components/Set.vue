<template>	
	<div class="a-set">
		<header>
			<p><span class="fanhui" @click="tap()">&lt;</span>添加设备</p>
			<div class="a-ss">
				<img src="../assets/imgs/a-erwei.jpg"/>
				<span class="a-sm">扫描家电二维码</span>
			</div>
			
		</header>
		<form >
		    <i class="iconfont icon-sousuo"></i>
			<input type="text" name="" id="" placeholder="请输入家电型号" />
		</form>
		<section>
			<h1>{{detail}}</h1>
			<ul class="a-u">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</section>
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
.a-set{
 	height: 100vh;
 	display: flex;
 	flex-direction: column;
 }
 header{
 	height: 200px;
 	background:#494949;
 }
 header p{
 	height: 50px;
 	line-height: 50px;
 	text-align: center;
 	font-size: 30px;
 	color:#fff;
 	margin: 10px ;
 }
 header .a-ss{
 	width: 230px;
 	height:60px;
 	border: 1px solid #ccc;	
 	margin: 40px auto;
 	text-align: center;
 	line-height: 60px;
 	border-radius: 60px;
 }
header .a-ss img{
	width: 24px;
	height: 24px;

	
} 
header .a-ss span{
	margin-left: 20px;
	color:#fff;
} 
 header .fanhui{
 	color: #fff;
 	position: absolute;
    left: 20px;
 }
 
 form{
 	width: 344px;
 	
 	background:#F2F2F2 ;
 	text-align: center;
 	line-height: 40px;
 	margin:30px auto ;
 	border-radius:40px ;
 	overflow:hidden;
 }
 form .icon-sousuo{
 	color:#ccc;
 	font-size:30px;
 	
 }
 form input{
 	margin-left:20px;
 	height: 30px;
 	border: 0;
 	background:#F2F2F2 ;
 	font-size:14px;
 }
 section{
 	flex: 1;
 	overflow-y:auto;
 }
 section .a-u{
 	width: 100vw;
 	display: flex;
 	flex-wrap: wrap;
 	
 	
 }
section .a-u li{
	width: 32.8%;
	height: 100px;
	border: 1px solid #ccc;
	list-style: none;
}
</style>