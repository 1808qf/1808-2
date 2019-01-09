<template>
	<div class="a-other" >
		<h1>other</h1>
	</div>
</template>

<script>
	export default{
		name:"Other",
		data(){
			return{
				tit:'服务页面' , //控制的是头部标题
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style>
.a-other{
	color: #000000;
}
</style>