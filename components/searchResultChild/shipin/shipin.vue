<template>
	<scroll-view scroll-y="true" style='height: 100%;' class='scroll'>
			<view class="" v-for="item in videoList" style='margin-top: 2vh;width: 90vw;margin-left: 5vw;outline: 1px solid hotpink;'>
				<view class="">{{item.creator[0].userName}} - {{item.title}}</view> 
				<view class="">
					<video :src="item.url" controls :poster='item.coverUrl' page-gesture show-loading enable-progress-gesture object-fit="fill" show-mute-btn="true" 
					:title="item.title" enable-play-gesture="true" style="width: 90vw;height: 25vh;border-radius: 10px;margin-top: 5px;"></video>
				</view> 
			</view>
	</scroll-view>
</template>

<script>
	let app=getApp()
	export default {
		data() {
			return {
				videoList:[],
			}
		},
		mounted(options) {
			const that=this
			uni.request({
			    url: 'http://music.eleuu.com/search',
			    data: {
			        keywords:app.globalData.searchText,
					type:1014
			    },
			    success: (res) => {
					 that.videoList=res.data.result.videos
					that.videoList.forEach(item=>{
						// console.log('item',item)
						uni.request({
						    url: 'http://music.eleuu.com/video/url',
						    data: {
						        id:item.vid
						    },
						    success: (res) => {
						  //       console.log('dizhi',res.data.urls[0].url);
								// console.log(typeof(res.data.urls[0].url))
								that.$set(item,"url",res.data.urls[0].url)
								// console.log("修改后的item========",item)
						    },
							
						})
						
					})
			    }
			})
				
			
		},
		onLoad() {
			
		},
		methods: {
			
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
