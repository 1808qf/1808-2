<template>
  <div class="register">
    
    <header>{{ msg }}</header>
    <section>
    	<div class="a-reg">登陆</div>
    	<div id="dl">
			    	<input type="text" id="" placeholder="请输入用户名"/>
			    	<input type="text" id="" placeholder="请输入密码" />
			    	<input type="button" id="btn" value="登陆" />
    	</div>
    </section>
   <h1></h1>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      msg: '登陆'
    }
  }
}
</script>


<style scoped>
 .hello{
 	height: 100vh;
 	width: 100vm;
 	display: flex;
 	flex-direction: column;
 	color:#fff;
 }
 
 header{
 	height: 50px;
 	background: green;
 	text-align: center;
 	line-height: 50px;
 	
 }
 section{
 	flex: 1;
 }
section .a-reg{
	width:124px;
	height:124px;
	margin:50px auto;
	background: pink;
	flex-direction: column;
	text-align: center;
 	line-height: 124px;
 	border-radius: 50%;
 	font-size:30px;
	
}
#dl{
	width: 100vw;
	text-align: center;
}
input{
	width: 278px;
	height: 48px;
	margin: 10px auto;
	text-align: center;	
}

#btn{
	width: 150px;
	height: 58px;
	font-size: 20px;
	margin-top:40px;
}


</style>
