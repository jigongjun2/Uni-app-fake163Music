<template>
	<view class="">
		<web-view :webview-styles="webviewStyles" :src="swiperUrl"></web-view>
	</view>
</template>

<script>
let app=getApp()
	export default {
		data() {
			return {
				swiperUrl:''
			};
		},
		mounted(options) {
			this.swiperUrl = app.globalData.swiperUrl
		},
	};

</script>

<style>
</style>
