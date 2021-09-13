
<template>
	<view class="head_channel">
		<uni-popup ref="popup" type="center" background-color='white' :animation="false">
			<view class="" @click="close">
				<view class="blur_bj">
					<image :src="url" style='height: 80vh;width: 100vw;' ></image>
				</view>
				
				<view class="" style='position: absolute;top: 60vw;width: 100vw;height: 8vh;color: white;border-bottom: 1px solid gray;display: flex;align-items: center;justify-content: center;'>
					{{name}}
				</view>
				
				<view class="" style='position: absolute;top: 78vw;width: 100vw;color: white;display: flex;align-items: center;padding-left: 5vw;'>
					<view class="" style='font-size: 14px;'>标签:</view>
					<view class="" v-for="item in tags" style='text-align: center;margin-left: 10px;font-size: 10px;background-color: #b1b1b1;border-radius: 10px;'>
						<view class="" style="width: 20vw;background-color: #b1b1b1;"></view>
						<text>{{item}}</text> 
						<view class="" style="width: 20vw;background-color: #b1b1b1;"></view>
					</view>
				</view>
				
				<view class="" style='position: absolute;top: 88vw;left: 5vw;width: 90vw;color: white;font-size: 10px;'>
					{{description}}
				</view>
				
				
				
				<view class="top-info-image">
					<image :src="url" mode="" style='width: 45vw;height: 45vw;border-radius: 10px;position: absolute;left:27.5vw ;top: 17.5vw;'></image>
				</view>
			</view>
			
		</uni-popup>
		<view class="head_box">
			<view class="top-info" style='position: relative;'>
					<view class="top-info-image">
						<image :src="url" mode="" style='width: 100px;height: 100px;border-radius: 10px;'></image>
					</view>
					
					<view class="playCount" style='color: white;display: flex;justify-content: center;align-items: center;background-color: #b1b1b1;width: 120upx;border-radius: 10px;
					position: absolute;top: 10upx;left: 80upx;'>
						<image src="../../../static/play_desc.png" mode="" style='width: 12px;height: 12px;'></image>
						<text style='font-size:12upx;'>{{playCount}}万</text> 
					</view>
					
					<view class="name" >
						{{name}}
					</view>
					
					<view class="description" @click="toDescription">
						{{description}}
					</view>
			</view>
			<view class="" style='width: 100vw;margin-top: 20vh;'>
				<view class="" style='width: 100vw;height: 5vh;background-color: #ffffff;box-sizing: border-box;border: 1px solid white;display: flex;align-items: center;'>
					<image src="../../../static/play_all.png" mode="" style='width: 25px;height: 25px;'></image>
					<text style='font-weight: bolder;margin-left: 2vw;'>播放全部</text>
				</view>
					<view class="" v-for="(item,index) in playlist"  style='display: flex;flex-direction: column;justify-content: center;height: 10vh;
					background-color: #ffffff;width: 100vw;box-sizing: border-box;border: 1px solid #f7f7f7;'
					@click="choseOne(item)">
						<view class="" style='padding-left: 10px;'>{{item.name}}</view>
						<view class="" style='font-size: 12px;'>
							<text style='color: #7e7e7e;padding-left: 10px;'>{{item.ar[0].name}} - </text>
							<text style='margin-left: 1vw;color: #7e7e7e;'>{{item.al.name}}</text> 
						</view>
					</view>
			</view>
		</view>
		
		<view class="blur_bj">
			<image :src="url" style='height: 35vh;width: 100vw;'></image>
		</view>
		
	</view>
</template>

<script>
	let app=getApp()
	export default {
	    components: {},
		data() {
			return {
				playlist:'',
				tags:'',
				description:'',
				name:'',
				playCount:0,
				url: ''
			};
		},
		mounted() {
			this.url=app.globalData.clickMusicListDetail.coverImgUrl
			this.playCount=parseInt(app.globalData.clickMusicListDetail.playCount/10000)
			console.log(parseInt(app.globalData.clickMusicListDetail.playCount/10000))
			this.name=app.globalData.clickMusicListDetail.name
			this.description=app.globalData.clickMusicListDetail.description
			this.tags=app.globalData.clickMusicListDetail.tags
			uni.request({
			    url: 'http://music.eleuu.com/playlist/detail',
			    data: {
			        id:app.globalData.clickMusicListDetail.id,
			    },
			    success: (res) => {
			        console.log('res.data',res.data.playlist.tracks);
					this.playlist=res.data.playlist.tracks
			    }
			})
		},
		onShow(options) {
			
		},
		onLoad() {
			
		},
		methods: {
			toDescription(){
				
				            this.$refs.popup.open('top')
				        
			},
			close() {
			            this.$refs.popup.close()
			},
			choseOne(item){
				const that=this
				console.log('item',item)
				app.globalData.choseOneInfo=item
				console.log('musicListDetail',app.globalData.choseOneInfo)
				uni.navigateTo({
					url:'../../playmusic/playmusic_gedanye'
				})
			},
		},
		watch: {
			
		},
		computed: {
			
		}
	};
	
</script>

<style lang="scss" scoped> 
.head_channel {
.head_box {
	.top-info {
		position: absolute;
		height: 200upx;
		top: 150upx;
		left: 30upx;
		width: 100%;
		z-index: 2;
		image{
			// 阴影光晕效果
			// -moz-box-shadow:0 0 10px 10px #06c;
			//     -webkit-box-shadow:0 0 10px 10px #06c;
			//     box-shadow:0 0 10px 10px #06c;
		}
		.name{
			position: absolute;
			top: 0;
			left: 230upx;
			color: #ffffff;
			word-break: break-all;
			text-overflow: ellipsis;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow:hidden;
			display: inline-block;
			width: 400upx;
			height: 200px;
		}
		.description{
			position: absolute;
			bottom: 0;
			left: 230upx;
			color: #ccc9c9;
			white-space: nowrap;
			font-size: 12px;
			width: 400upx;
			height: 40upx;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
	
}
.blur_bj {
	position: absolute;
	height: 100%;
	width: 100vw;
	top: 0;
	z-index: -1;
	-webkit-filter: blur(5upx);
	filter: blur(15upx) brightness(70%); // 模糊半径和变暗
	transform: scale(1.2); // 控制边缘是否模糊，小于1的话边缘会模糊
}
}
</style>