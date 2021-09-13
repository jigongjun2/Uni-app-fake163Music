<template>
	<scroll-view scroll-x="true" style='border-bottom: 1px solid #cecece;width: 100%;height: 100%;white-space: nowrap;margin-top: 10px;'>
		<view style='display: inline-block;margin-left: 16px;'  v-for="(item,index) in scrollList" @click="todetail(index)">
			<view class="">
				<image :src="item.src" style='width: 40px;height: 40px;' mode=""></image>
			</view>
			<view class="" style='text-align: center;color:#656565'><text style='font-size: 10px;'>{{item.desc}}</text></view>
		</view>
	</scroll-view>
</template>

<script>
	let app=getApp()
	export default {
	    components: {},
		data() {
			return {
				scrollList:[
					{desc:'每日推荐',src:'../../static/dailyrec.png'},
					{desc:'私人FM',src:'../../static/FM.png'},
					{desc:'歌单',src:'../../static/gedan.png'},
					{desc:'排行榜',src:'../../static/paihang.png'},
					{desc:'直播',src:'../../static/live.png'},
					{desc:'数字专辑',src:'../../static/shuzizhuanji.png'},
					{desc:'专注冥想',src:'../../static/zhuanzhu.png'},
					{desc:'歌房',src:'../../static/gefang.png'},
					{desc:'游戏专区',src:'../../static/game.png'},
					
				]
			};
		},
		mounted() {
			
		},
		onShow(options) {
			
		},
		onLoad() {
			
		},
		methods: {
			todetail(index){
				console.log(index)
				if(index==0){
					uni.navigateTo({
						url:"../../pages/middleScrollPages/dailyRec/dailyRec" 
					})
				}else if(index==1){
					uni.navigateTo({
						url:"../../pages/middleScrollPages/personalFm/personalFm" 
					})
				}else if(index==2){
					uni.navigateTo({
						url:"../../pages/middleScrollPages/musicList/musicList" 
					})
				}else if(index==3){
					uni.navigateTo({
						url:"../../pages/middleScrollPages/rank/rank" 
					})
				}else if(index==4){
					uni.navigateTo({
						url:"../../pages/middleScrollPages/live/live" 
					})
				}else if(index==5){
					uni.navigateTo({
						url:"../../pages/middleScrollPages/digital/digital" 
					})
				}else if(index==6){
					uni.navigateTo({
						url:"../../pages/middleScrollPages/focus/focus" 
					})
				}else if(index==7){
					uni.navigateTo({
						url:"../../pages/middleScrollPages/musicRoom/musicRoom" 
					})
				}else if(index==8){
					uni.navigateTo({
						url:"../../pages/middleScrollPages/gamePlace/gamePlace" 
					})
				}
			},
		},
		watch: {
			
		},
		computed: {
			
		}
	};
</script>

<style>
</style>
