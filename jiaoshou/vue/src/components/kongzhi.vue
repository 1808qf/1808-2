<template>
<div class="a-kongzhi">
		<header>
			<p><span class="fanhui" @click="tap()">&lt;</span>挂式空调</p>	
		</header>
		
		<section>
			<div class="a-gua">24°</div>
			<ul class="a-feng">
				<li>风速低</li>
				<li>风向上</li>
				<li>手动风向</li>
			</ul>
		</section>
		<footer>
			<div class="a-fo">
				<ul class="a-fo-u1">
					<li>开关</li>
					<li>模式</li>
				</ul>
				<ul class="a-fo-u2">
					<li>风速</li>
					<li>风向</li>
					<li>扫风</li>
					
				</ul>
				<ul class="a-fo-u3">
					<li>-</li>
					<li>温度</li>
					<li>+</li>
					
				</ul>
				<ul class="a-fo-u4">
					<li>定时</li>
					<li>睡眠</li>
					<li>睡眠</li>	
				</ul>
			</div>
		</footer>
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
.a-kongzhi{
 	height: 100vh;
 	display: flex;
 	flex-direction: column;
 }
 header{
 	height: 50px;
 	border:1px solid #666
 }
 header p{
 	line-height: 50px;
 	text-align: center;
 	font-size: 30px;	
 }
 
 header .fanhui{
 	position: absolute;
    left: 20px;
 } 
section .a-gua{
	width: 200px;
	height: 100px;
	background: pink;
	margin: 78px auto;
	text-align: center;
	line-height: 100px;
	font-size: 30px;
	border: 1px solid #666;
} 
section .a-feng{
	display: flex;
	justify-content: space-around;
	list-style: none;
	font-size:16px;
}
footer .a-fo{
	margin-top: 50px;
	border: 1px solid #666;
}
footer .a-fo-u1{
	display: flex;
	list-style: none;
	
}
footer .a-fo-u1 li{
	width: 186px;
	height: 70px;
	text-align: center;
	line-height: 70px;
	font-size: 16px;
	border: 1px solid #666;
}
footer .a-fo-u2{
	display: flex;
	list-style: none;
}
footer .a-fo-u2 li{
	width: 186px;
	height: 70px;
	text-align: center;
	line-height: 70px;
	font-size: 16px;
	border: 1px solid #666;
}
footer .a-fo-u3{
	display: flex;
	list-style: none;
}
footer .a-fo-u3 li{
	width: 186px;
	height: 70px;
	text-align: center;
	line-height: 70px;
	font-size: 16px;
	
}
footer .a-fo-u4{
	display: flex;
	list-style: none;
}
footer .a-fo-u4 li{
	width: 186px;
	height: 70px;
	text-align: center;
	line-height: 70px;
	font-size: 16px;
	border: 1px solid #666;
}






</style>