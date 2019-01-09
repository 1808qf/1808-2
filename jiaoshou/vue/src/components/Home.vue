<template>
	<div class="a-home">
		
		<img src="../assets/imgs/a-shouye1.jpg" alt="" />
		<h1 class="a-t">您还没有添加设备</h1>
		<p  class="a-p" @click="tap()"><i class="iconfont icon-chucuo"></i><span >添加设备</span></p>
		
		<button @click="tap()">tiaozhuan</button>	
		
	</div>
</template>

<script>
	export default{
		name:"Home",
		data(){
			return{
				tit:'设备场景', //控制的是头部标题
				
			}
		},
		methods:{
			tap(){
				this.$router.push('/Set')
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
			
			
			
			
		}
	}
</script>

<style>
	.a-home{
		color: #000000;
	
	}
	
	img{
		width: 100vw;
		height: 40vh;
	}
	.a-t{
		font-size: 24px;
		text-align: center;
	}
	.a-p{
		font-size: 14px;
		margin-top:10px;
		height: 30px;
		display: flex;
		
	}
	
	.a-p i{
		display: block;
		transform:rotate(45deg);
		font-size: 30px;
		margin:0 10px 0 120px;
	}
	.a-p span{
		float: left;
		line-height:30px ;
		
		
	}
</style>