<template>
	<div class="myhead">
		<div class="profile">

		</div>
		<h1 class="words">
			个人简历
		</h1>
		<span class="line"></span>
		<p class="introduce">我叫王永</p>
		<p class="introduce">我只是个小前端。</p>
		<p class="introduce">此简历项目使用vuex全家桶构建<a href="http://www.flqin.com/" target='_blank'>项目地址</a></p>
		<p  class="introduce"></p>

	</div>
</template>
<script>

export default {
	name:'myhead',
	data(){
		return {
			
		}
	}
}
</script>
<style scoped lang="scss">
.myhead{
	// font:44px/55px '';
	width:100%;
	height:100%;
	background: url(../assets/bg.png);
	background-color:  #87b0a5;
	position:relative;
	z-index:1;
	&::before{
		content:'';
		display: table;
		height:0;
		width:0;
	}
	.profile{
		width:150px;
		height:150px;
		border-radius:50%;
		margin:120px auto 0 auto;
		background: #efe url(../assets/dijia.png) no-repeat center;
		background-size: contain;

	}
	.words{
		color:white;
		text-align:center;
		margin-top:30px;
		font:28px/38px '';
	}
	.line{
		display: block;
		height:1px;
		background: white;
		width:60%;
		margin: auto;
		margin-top:12px;
		margin-bottom: 12px;
	}
	.introduce{
		font:18px/38px '';
		color:white;
		a{
			color:#ff003e;
		}
	}

}
</style>