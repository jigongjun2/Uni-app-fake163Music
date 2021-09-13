<template>
<view class="main">
	
	<view class="top">
		<view class="recMusicList">推荐歌单</view>
		<view class="more" @click='toMore'>更多></view>
	</view>
	
	<scroll-view scroll-x="true" style='width: 100%;height:100%;white-space: nowrap;'>
		<view style='height: 200px ;width: 100px;display: inline-block;margin-left: 20px;' v-for="(item,index) in musicList" @click='toMusicListDetail(item)'>
			<view class="" style='margin-top: 10px;'>
				<image :src="item.coverImgUrl" style='width: 90px;height: 90px;border-radius: 10px;' mode=""></image>
			</view>
			<view class="" style=''>
				<text class='webkitbox'>{{item.name}}</text>
			</view>
		</view>
	</scroll-view>
	
</view>
</template>

<script>
	let app=getApp()
	export default {
	    components: {},
		data() {
			return {
				musicList:[],
			};
		},
		mounted() {
			const that=this
			uni.request({
			    url: 'http://music.eleuu.com/top/playlist',
			    data: {
			        limit:"6",
					order:"old",
			    },
			    success: (res) => {
			        console.log('res.data',res.data);
					that.musicList=res.data.playlists
					console.log('musicList',that.musicList)
			    }
			})
		},
		onShow(options) {
			
		},
		onLoad() {
			
		},
		methods: {
			toMore(){
				uni.navigateTo({
					url:"../../pages/musicList/musicListMore/musicListMore"
				})
			},
			toMusicListDetail(item){
				console.log(item)
				app.globalData.clickMusicListDetail=item
				console.log('clickMusicListDetail',app.globalData.clickMusicListDetail=item)
				uni.navigateTo({
					url:"../../pages/musicList/musicListDetail/musicListDetail"
				})
			}
		},
		watch: {
			
		},
		computed: {
			
		}
	};
</script>

<style scoped lang="scss">
	@import url("./recMusicList.css");
</style>
