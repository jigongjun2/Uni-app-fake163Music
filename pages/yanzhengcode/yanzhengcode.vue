<template>
	<view class="">
		<view class="">请输入验证码</view>
		<view class="">已发送至+86 {{phoneNumber}}</view>
		
		<!-- 基本用法 -->
		<smh-verification-code :unit="4" :focus="true" @change="handle"></smh-verification-code>
		<!-- 属性说明 -->
		<!-- unit:验证码的位数
		focus:是否自动打开键盘，可点击验证码区域手动打开
		ontime:是否实时返回数据，如果不设置，则是到验证码输入完成后返回，如设置为true，则每次输入都会返回数据 -->
		
		<!-- 事件用法 -->
		<!-- @change对应的事件则是返回的验证码
		methods: {
		    handle(code){
		        console.log(code)//code就是验证码
		    }
		} -->
	</view>
</template>

<script>
	let app=getApp()
	export default {
	    components: {},
		data() {
			return {
				phoneNumber:'',
			};
		},
		mounted() {
			this.phoneNumber=app.globalData.phoneNumber
		},
		onShow(options) {
			
		},
		onLoad() {
			
		},
		methods: {
			handle(code){
				const that=this
			    console.log(code)
				uni.request({
				    url: 'http://music.eleuu.com/captcha/verify',
				    data: {
				        phone:that.phoneNumber,
						captcha:code
				    },
				    success: (res) => {
						console.log("验证验证码",res)
						if(res.data.data==true){
							uni.switchTab({
								url:"../index/index"
							})
						}
				    },
					
				})
			}
		},
		watch: {
			
		},
		computed: {
			
		}
	};
</script>

<style>
</style>
