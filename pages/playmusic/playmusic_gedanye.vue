<template>
	<view style='height: 100vh;'>
		<zaudio theme="theme1"></zaudio>
		<bingLyric :lyrics="lyric" :curTime='curTime'></bingLyric>
		
	</view>
</template>

<script>
import bingLyric from "../../components/bing-lyric/bing-lyric.vue"
import zaudio from '@/components/uniapp-zaudio/zaudio';
// import zaudio from 'uniapp-zaudio/zaudio'

	let app=getApp()
	export default {
	    components: { zaudio: zaudio,bingLyric: bingLyric,},
		data() {
			return {
				curTime:0,
				audiolist: this.$zaudio.audiolist, //当前音频列表
				playIndex: this.$zaudio.playIndex, //当前播放的索引
				paused: this.$zaudio.paused, //当前是否暂停
				playinfo: this.$zaudio.playinfo.current, //当前播放的信息
				// lyric歌词
				lyric:[],
				current: {
					poster: '',
					name: '',
					author: '',
					src: '',
				            },
				audioAction: {
					method: 'pause'
				},
			};
		},
		mounted() {
			const that=this
			console.log('play获取app',app.globalData.choseOneInfo)
			// console.log('play',app.globalData.choseOneInfo.artists.name)
				uni.request({
				    url: 'http://music.eleuu.com/lyric',
				    data: {
				        id:app.globalData.choseOneInfo.id,
				    },
				    success: (res) => {
						console.log(res.data)
				        // console.log('歌词',res.data.lrc.lyric);
						let aa=res.data.lrc.lyric
						that.lyric=aa.split("\n");
						app.globalData.geci=aa.split("\n");
						console.log('=======',that.lyric)
						that.getAudioState()
				    }
				})
				this.$nextTick(function(){
					uni.request({
					    url: 'http://music.eleuu.com/song/url',
					    data: {
					        id:app.globalData.choseOneInfo.id,
					    },
					    success: (res) => {
					        console.log('res.data',res.data);
							var data = [
							  {
							    src: res.data.data[0].url,
							    title: app.globalData.choseOneInfo.name,
							    singer: app.globalData.choseOneInfo.ar[0].name,
							    coverImgUrl:app.globalData.choseOneInfo.al.picUrl,
							  }
							];
							app.globalData.data=data
							// 设置音频数据
							that.$zaudio.setAudio(data)
							//渲染第一首音频
							that.$zaudio.setRender(0)
					    }
					})
					// console.log("---->",this.$zaudio)
				})
		},
		onShow(options) {
		},
		onLoad() {
			
		},
		methods: {
			getAudioState() {
			        //注册page-index-get-state, 实时获取zaudio属性状态
			        this.$zaudio.syncStateOn('page-index-get-state', ({ audiolist, playIndex, paused, playinfo }) => {
			            this.audiolist = audiolist;
			            this.playIndex = playIndex;
			            this.paused = paused;
						this.playinfo=playinfo;
						this.$nextTick(function(){
						let aa=this.$zaudio.playinfo.current
						let s = '';
						let min = aa.split(':')[0];
						let sec = aa.split(':')[1];
						s = Number(min*60) + Number(sec);
						this.curTime=s
						// console.log('aa',aa)
						// console.log('s',s)
						// console.log('methods',this.playinfo)
						})
						
			        });	
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
