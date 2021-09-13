<template>
	<scroll-view scroll-y="true" style='height: 100%;' class='scroll'>
			<!-- <view class="" style='width: 90vw;margin-left: 5vw;background-color: #ffffff;box-sizing: border-box;border: 1px solid white;
			border-radius: 10px;'>
				dsdadsa
				<view class="">
					dadsdada
				</view>
			</view> -->
			<view class="" style='margin-top: 0;'>
				<view class="" style='width: 100vw;height: 5vh;background-color: #ffffff;box-sizing: border-box;border: 1px solid white;display: flex;align-items: center;'>
					<image src="../../../static/play_all.png" mode="" style='width: 25px;height: 25px;'></image>
					<text style='font-weight: bolder;margin-left: 2vw;'>播放全部</text>
				</view>
				<view class="" v-for="(item2,index2) in zongheList"  style='display: flex;flex-direction: column;justify-content: center;height: 10vh;
				background-color: #ffffff;width: 100vw;box-sizing: border-box;border: 1px solid #f7f7f7;'
				@click="choseOne(item2)">
					<view class="" style='color: #5d7eac;padding-left: 10px;'>{{item2.name}}</view>
					<view class="" style='font-size: 12px;'>
						<text style='color: #7e7e7e;padding-left: 10px;'>{{item2.artists[0].name}} - </text>
						<text style='margin-left: 1vw;color: #5d7eac;'>{{item2.album.name}}</text> 
					</view>
				</view>
			</view>
	</scroll-view>
</template>

<script>
	let app=getApp()
	export default {
		data() {
			return {
				zongheList:'',
			}
		},
		mounted(options) {
			// console.log(app.globalData.searchText)
			this.getsearch(app.globalData.searchText)
		},
		onLoad() {
			
		},
		methods: {
			getsearch(res){
				const that=this
				uni.request({
				    url: 'http://music.eleuu.com/search',
				    data: {
				        keywords:res,
				    },
				    success: (res) => {
				        // console.log('res.data',res.data);
						this.zongheList=res.data.result.songs
				    }
				})
			},
			choseOne(item){
				// console.log('choseone',item)
				app.globalData.choseOneInfo=item
				app.globalData.status=false
				// console.log('appchose',app.globalData.choseOneInfo)
				uni.navigateTo({
					url:'../playmusic/playmusic'
				})
			},
		},
		watch: {
			
		},
		computed: {
			
		},
	}
</script>

<style scoped='scoped'>
.scroll::-webkit-scrollbar {
	    display: none;
	  }
/deep/::-webkit-scrollbar {
		 display: none;
		 width: 0;
		 height: 0;
		} 
</style>
