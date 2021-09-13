<template>
	<view class="main">
		<image class='img1' src="../../static/qidong.png" mode=""></image>
		<view class="denglu" @click="toPhoneNumLogin">手机登录</view>
		<view class="tiyan" @click="toIndex">立即体验</view>
		<view class="desc">
			<text class='text1'>登录即已同意</text>
			<text class="text2">《服务条款》</text>
			<text class="text3">《隐私政策》</text>
			<text class="text4">《儿童隐私政策》</text>
		</view>
		<view class="desc2">
			<text class="text5">《中国移动认证服务协议》</text>
		</view>
		<view class="imgs">
			<image src="../../static/wechat.png" mode=""></image>
			<image src="../../static/QQ.png" mode=""></image>
			<image src="../../static/weibo.png" mode=""></image>
			<image src="../../static/apple.png" mode="" style='width: 120px'></image>
			<image src="../../static/wangyi.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	let app=getApp()
	export default {
	    components: {},
		data() {
			return {
				
			};
		},
		mounted() {
			
		},
		onShow(options) {
			
		},
		onLoad() {
			
		},
		methods: {
			toIndex(){
				uni.reLaunch({
					url:"../index/index"
				})
			},
			toPhoneNumLogin(){
				uni.reLaunch({
					url:"../phoneNumLogin/phoneNumLogin"
				})
			},
		},
		watch: {
			
		},
		computed: {
			
		}
	};
</script>

<style lang="scss">
.main{
	.img1{
		width: 100vw;
		height: 100vh;
	}
	.denglu{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 70vw;
		height: 6vh;
		background-color: white;
		border-radius: 15px;
		position: absolute;
		top: 45vh;
		left: 15vw;
		color: #dc2d20;
	}
	.tiyan{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 70vw;
		height: 6vh;
		background-color: white;
		border-radius: 15px;
		position: absolute;
		top: 52vh;
		left: 15vw;
		color: white;
		background-color: #dc2d20;
		border: 1px solid white;
	}
	.desc{
		width: 100vw;
		display: flex;
		justify-content: center;
		position: absolute;
		top:62vh;
		font-size: 10px;
		.text1{
			color: #da8076;
		}
		.text2,.text3,.text4{
			color: #f0cfcc;
		}
	}
	.desc2{
		width: 100vw;
		display: flex;
		justify-content: center;
		position: absolute;
		top:65vh;
		font-size: 10px;
		.text5{
			color: #f0cfcc;
		}
	}
	.imgs{
		display: flex;
		justify-content: center;
		position: absolute;
		top:75vh;
		width: 100vw;
		display: flex;
		image{
			margin-left: 10px;
			width: 30px;
			height: 30px;
		}
	}
	
}
</style>
