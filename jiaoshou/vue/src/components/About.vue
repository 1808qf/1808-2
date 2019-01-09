<template>
	<div class="a-about">
		<h1>about</h1>
	</div>
</template>

<script>
	export default{
		name:"About",
		data(){
			return{
				tit:'商城首页' //控制的是头部标题
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style>
.a-about{
	color: #000000;
}
</style>