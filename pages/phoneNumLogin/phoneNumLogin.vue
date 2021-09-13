<template>
	<view class="">
		<view class="" style='width: 100vw;text-align: center;'>
			<image @click="back" src="../../static/quxiao.png" mode="" style="width: 20px;height: 20px;position: absolute;left: 10px;"></image>
			<text style="font-size: 16px;">手机号登录</text>
		</view>
		<view class="" style="margin-top: 20px;padding-left: 10px;font-size: 18px;">登录体验更多精彩</view>
		<view class="" style="margin-top: 6px;padding-left: 10px;font-size: 14px;color: gray;">未注册手机号登录后将自动创建账号</view>
		<view class="" style="margin-top: 10px;border-bottom: 1px solid #e4e4e4;">
			<input type="text" value="" placeholder="请输入手机号" placeholder-style="color:#c4c4c4;font-size:16px" v-model="phoneNumber" focus="."/>
		</view>
		<view :class="btn" style="width: 90vw;margin-left: 5vw;border: 1px solid white;height: 6vh;border-radius: 20px;display: flex;justify-content: center;align-items: center;
		margin-top: 6vh;" @click="next">
			下一步
		</view>
	</view>
</template>

<script>
	let app=getApp()
	export default {
	    components: {},
		data() {
			return {
				phoneNumber:'',
				btn:"nothing",
			};
		},
		mounted() {
			
		},
		onShow(options) {
			
		},
		onLoad() {
			
		},
		methods: {
			back(){
				uni.reLaunch({
					url:"../login/login"
				})
			},
			next(){
				const that=this
				if(this.phoneNumber!==""){
					app.globalData.phoneNumber=that.phoneNumber
					uni.request({
					    url: 'http://music.eleuu.com/captcha/sent',
					    data: {
					        phone:that.phoneNumber,
							ctcode:86
					    },
					    success: (res) => {
							console.log("验证",res)
							// that.$set(item,"url",res.data.urls[0].url)
					    },
						
					})
				}
				this.$nextTick(function(){
					uni.navigateTo({
						url:"../yanzhengcode/yanzhengcode"
					})
				})
			},
		},
		watch: {
			phoneNumber(a,b){
				const that=this
				console.log("a.length",a.length)
				console.log("a",a)
				if(a.length>=1){
					that.btn="havething"
				}else{
					that.btn="nothing"
				}
			},
		},
		computed: {
			
		}
	};
</script>

<style scoped>
.nothing{
	background-color: #f6c9c4;
	color: #f8d7d5;
}
.havething{
	background-color: red;
	color: white;
}
</style>
