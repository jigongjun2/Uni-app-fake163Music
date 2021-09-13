<template>
	<!-- <scroll-view scroll-y="true" style="width: 100%;height: 100%;"> -->
		
	
	<!--
	本页面模板教程：https://ext.dcloud.net.cn/plugin?id=2651
	uni-list 文档：https://ext.dcloud.net.cn/plugin?id=24
	uniCloud 文档：https://uniapp.dcloud.io/uniCloud/README
	uni-clientDB 组件文档：https://uniapp.dcloud.net.cn/uniCloud/uni-clientdb-component
	DB Schema 规范：https://uniapp.dcloud.net.cn/uniCloud/schema
	 -->
	 <view class="">
	 	
	 <view>
		 <uni-drawer ref="showLeft" mode="left" :mask-click="false" :maskClick="true" :width="300">
			 <view>
				<view class="" style='width: 100vw;margin-top: 10px;'>
					<text @click="toLogin">立即登录</text>
				</view>
			 </view>
		 </uni-drawer>
	</view>
	
	<!-- <view class="bt_play">
		<image src="../../static/play.png" style='width: 25px;height: 25px;' mode=""></image>
		<image src="../../static/caidan_play.png" style='width: 25px;height: 20px;' mode=""></image>
	</view> -->
	
	<view style="overflow: hidden;">
		
		<view class="top">	
			<view class="" style='width: 10vw;height: 8vh;display: flex;justify-content: center;align-items: center;'>
				<image src="../../static/caidan.png" mode="" style='width: 25px;height: 20px;' @click="showDrawer"></image>
			</view>
			<view class="search-container-bar">
				<uni-search-bar ref="searchBar" style="flex:1;" radius="100" bgColor="#fcfdfd" v-model="searchText" @search-click="searchClick" @clear="clear"
				 @cancel="search" cancelButton="none" disabled  class='uni-search-bar' placeholder="DJ舞曲 低音炮"/>
			</view>
			<view class="" style='width: 10vw;height: 8vh;position: absolute;right: 0;display: flex;justify-content: center;align-items: center;'>
				<image src="../../static/yuyin.png" mode="" style='width: 25px;height: 22px;'></image>
			</view>
		</view>
		<view class="zhanshi">
			<!-- 刷新页面后的顶部提示框 -->
			<!-- 当前弹出内容没有实际逻辑 ，可根据当前业务修改弹出提示 -->
			<!-- <view class="tips" :class="{ 'tips-ani': tipShow }" v-if="tipShow">
				<image v-if="tipShow==false" src="../../static/fresh.png" mode="" style='width: 40px;height: 40px;'></image>
			</view> -->
			<view class="tipShow" v-if="tipShow">
					<image src="../../static/fresh.png" mode="" style='width: 40px;height: 40px;position: absolute;'></image>
			</view>
			
			<!-- 以下是swiper -->
			<view>
			        <view class="uni-padding-wrap" style='width: 90vw;;margin-left: 5vw;margin-top: 3vh;border-radius: 10px;'>
			            <view class="page-section swiper" style='border-radius: 10px;'>
			                <view class="page-section-spacing" style='border-radius: 10px;'>
			                    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="2000" duration="200" style="height: 18vh;border-radius: 10px;" indicator-active-color='white'>
			                        <swiper-item v-for="item in swiperList">
			                            <view class="swiper-item uni-bg-red" @click="todetail(item.url)"><image :src="item.pic" mode="" style='width: 90vw;height: 18vh;border-radius: 10px;'></image></view>
			                        </swiper-item>
			                    </swiper>
			                </view>
			            </view>
			        </view>
			</view>
			<!-- 以上是swiper -->
		</view>
	</view>
	
		<!-- 以下是middleScroll -->
		<middleScroll></middleScroll>
		<!-- 以上是middleScroll -->
		
		<!-- 以下是recMusicList -->
		<recMusicList></recMusicList>
		<!-- 以上是recMusicList -->
		
		
		<zaudio theme="theme2" class='zaudio'></zaudio>
		
	</view>
	<!-- </scroll-view> -->
</template>

<script>
	import zaudio from '@/components/uniapp-zaudio/zaudio';
	import middleScroll from "../../components/middleScroll/middleScroll.vue"
	import recMusicList from "../../components/recMusicList/recMusicList.vue"
	let app=getApp()
	export default {
			components: { 
				zaudio: zaudio,
				middleScroll,
				recMusicList,
				
			 },
		data() {
			return {
				swiperList:[
					{pic:'../../static/swiper/109951166351195184.jpg'},
					{pic:'../../static/swiper/109951166352413296.jpg'},
					{pic:'../../static/swiper/109951166352414041.jpg'},
					{pic:'../../static/swiper/109951166352416610.jpg'},
					{pic:'../../static/swiper/109951166352420029.jpg'},
					{pic:'../../static/swiper/109951166352420711.jpg',url:'https://music.163.com/octave/m/album/detail?id=132509712'},
					{pic:'../../static/swiper/109951166352834786.jpg'},
					{pic:'../../static/swiper/109951166352895755.jpg'},
					{pic:'../../static/swiper/109951166353239497.jpg'},
				],
				searchText: '',
				formData: {
					waterfall: false, // 布局方向切换
					status: 'loading', // 加载状态
				},
				where: '',
				tipShow: false // 是否显示顶部提示框
			};
		},
		mounted() {
		},
		onShow(options) {
			this.searchText = getApp().globalData.searchText;
		},
		methods: {
			toLogin(){
				uni.reLaunch({
					url:"../login/login"
				})
			},
			// 以下是抽屉
			showDrawer() {
			                this.$refs.showLeft.open();
			            },
			closeDrawer() {
				this.$refs.showLeft.close();
			},
			// 以上是抽屉
			
			todetail(url){
				console.log(url)
				app.globalData.swiperUrl=url
				console.log('appurl',app.globalData.swiperUrl)
				uni.navigateTo({
						url:'../swipertiaozhuan/swipertiaozhuan',
					})
			},
			
			/**
			 * 切换商品列表布局方向
			 */
			select() {
				this.formData.waterfall = !this.formData.waterfall;
			},
			/**
			 * 下拉刷新回调函数
			 */
			onPullDownRefresh() {
				const that=this
				this.tipShow = true
				setTimeout(function(){
					uni.stopPullDownRefresh()
					that.tipShow = false
				},3000)
				
				// 获取到数据后的回调， 关闭弹出
				// this.formData.status = 'more'
				// this.$refs.udb.loadData({
				// 	clear: true
				// }, () => {
				// 	this.tipShow = false
				// 	uni.stopPullDownRefresh()
				// })
			},
			/**
			 * 上拉加载回调函数
			 */
			// onReachBottom() {
			// 	this.$refs.udb.loadMore()
			// },
			load(data, ended) {
				if (ended) {
					this.formData.status = 'noMore'
				}
			},
			search(text = '') {
				this.where = text ? `${new RegExp(text, 'gi')}.test(name)` : '';
			},
			clear() {
				getApp().globalData.searchText = '';
			},
			searchClick() {
				uni.hideKeyboard();
				uni.navigateTo({
					url: '/pages/search/search',
					animationType: 'fade-in'
				});
			}
		},
		watch: {
			searchText(value) {
				this.search(value);
			}
		},
		computed: {
			listTitle() {
				return this.searchText === '' ? '最热商品' : '搜索结果'
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import '@/common/uni-ui.scss';
	
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #f9f9f9;
		min-height: 100%;
		height: auto;
	}
	.zaudio{
		width: 100vw;
		position: fixed;
		bottom: 7.6vh;
	}
	// .tips {
	// 	color: #f9f9f9;
	// 	font-size: 14px;
	// 	line-height: 80px;
	// 	text-align: center;
	// 	background-color: #f9f9f9;
	// 	opacity: 0;
	// 	transform: translateY(-100%);
	// 	transition: all 0.3s;
	// }
	// .bt_play{
	// 	display: flex;
	// 	align-items: center;
	// 	border: 1px solid #e2e2e2;
	// 	width: 100vw;
	// 	position: fixed;
	// 	bottom: 7.4vh;
	// 	height: 5vh;
		
	// }
	.tipShow {
		display: flex;
		justify-content: center;
		align-items: center;
		transform: translateY(0);
		height: 80px;
		opacity: 1;
	}
	
	// .tips-ani {
	// 	transform: translateY(0);
	// 	height: 0px;
	// 	opacity: 1;
	// 	outline: 1px solid red;
	// }


	// // 默认加入 scoped ，所以外面加一层提升权重
	// .list {
	// 	margin-top: 52px;

	// 	.uni-list--waterfall {

	// 		/* #ifndef H5 || APP-VUE */
	// 		// 小程序 编译后会多一层标签，而其他平台没有，所以需要特殊处理一下
	// 		/deep/ .uni-list {
	// 			/* #endif */
	// 			display: flex;
	// 			flex-direction: row;
	// 			flex-wrap: wrap;
	// 			padding: 5px;
	// 			box-sizing: border-box;

	// 			/* #ifdef H5 || APP-VUE */
	// 			// h5 和 app-vue 使用深度选择器，因为默认使用了 scoped ，所以样式会无法穿透
	// 			/deep/
	// 			/* #endif */
	// 			.uni-list-item--waterfall {
	// 				width: 50%;
	// 				box-sizing: border-box;

	// 				.uni-list-item__container {
	// 					padding: 5px;
	// 					flex-direction: column;
	// 				}
	// 			}

	// 			/* #ifndef H5 || APP-VUE */
	// 		}

	// 		/* #endif */
	// 	}
	// }
	
	.top{
		height: 8vh;
		display: flex;
		
	}
	
	.search-icons {
		padding: 16rpx;
	}
	
	.search-container-bar {
		/* #ifndef APP-NVUE */
		width: 70vw;
		display: flex;
		position: absolute;
		left: 15vw;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		z-index: 10;
		background-color: #f9f9f9;
	}

	/* #ifndef APP-NVUE */
	/deep/
	/* #endif */
	.uni-searchbar__box {
		border-width: 0;
		
	}

	/* #ifndef APP-NVUE */
	/deep/
	/* #endif */
	.uni-input-placeholder {
		font-size: 28rpx;
	}

</style>
