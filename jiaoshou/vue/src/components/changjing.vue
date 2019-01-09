<template>
<div class="a-changjing">
		<header>
			<p><span class="fanhui" @click="tap()">&lt;</span>设备 场景</p>	
		</header>
		
		<section>
			<h1>场景</h1>
			<div class="a-keting">
				<h2>客厅</h2>
				<p>清新、节能</p>
			</div>
			<div class="a-woshi">
				<h2>卧室</h2>
				<p>舒适、健康</p>
			</div>
			<div class="a-weiyu">
				<h2>卫浴</h2>
				<p>温暖、舒适</p>
			</div>
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
.a-changjing{
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

section h1{
	font-weight: 100;
	margin:15px 20px;
	font-size: 28px;
}
section .a-keting{
	width:325px;
	height: 80px;
	background: pink;
	border-radius:10px;
	margin: 25px auto;
	overflow: hidden;
	
}
section .a-keting h2{
	font-weight: 100;
	margin: 10px 20px;
	font-size: 25px;
}
section .a-keting p{
	margin: 10px 20px;
}
section .a-woshi{
	width:325px;
	height: 80px;
	background: pink;
	border-radius:10px;
	margin: 25px auto;
	overflow: hidden;
	
}
section .a-woshi h2{
	font-weight: 100;
	margin: 10px 20px;
	font-size: 25px;
}
section .a-woshi p{
	margin: 10px 20px;
}
section .a-weiyu{
	width:325px;
	height: 80px;
	background: pink;
	border-radius:10px;
	margin: 25px auto;
	overflow: hidden;
	
}
section .a-weiyu h2{
	font-weight: 100;
	margin: 10px 20px;
	font-size: 25px;
}
section .a-weiyu p{
	margin: 10px 20px;
}
</style>