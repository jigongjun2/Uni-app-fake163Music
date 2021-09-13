<template>
<view class="">
	<!-- 以下是顶部搜索 -->
	<view class="top" style='width: 100vw;display: flex;'>
		<view class="" style='width: 10vw;height: 8vh;display: flex;justify-content: center;align-items: center;'>
			<image src="../../static/back.png" mode="" style='width: 25px;height: 20px;' @click="back"></image>
		</view>
		<view class="search-container-bar">
			<uni-search-bar ref="searchBar" style="flex:1;" radius="100" bgColor="#f5f5f5" v-model="searchText" @search-click="searchClick" @clear="clear"
			 @cancel="search" cancelButton="none" disabled  class='uni-search-bar' placeholder="DJ舞曲 低音炮"/>
		</view>
		<view class="" style='width: 10vw;height: 8vh;position: absolute;right: 0;display: flex;justify-content: center;align-items: center;'>
			<!-- <image src="../../static/yuyin.png" mode="" style='width: 25px;height: 22px;'></image> -->
		</view>
	</view>
	<!-- 以上是顶部搜索 -->
	
	<scroll-view scroll-x="true" show-scrollbar="false" style="width: 100%;height: 100%; white-space: nowrap;" @scroll='scroll' :scroll-left="scrollDistance">
		<view class="">
			<view v-for="(item,index) in navList" :key="index" @click="choseNav(item,index)" style="display: inline-block; margin-right: 32px;">
				{{item.name}}
				<view :class="item.choseColor" style='height: 3px;border-radius: 50%;' >
				</view>
			</view>
		</view>
	</scroll-view>
	
	<view class="" style='background-color: #f5f5f5'>
		<view class="">
			<swiper  style="height: 80vh;" :current="currentIndex" @change="swiperTab">
				<swiper-item v-for="(item,index) in list" :key="index">
					<!-- 以下是各组件 -->
					<zonghe v-show="index==0"></zonghe>
					<danqu v-show='index==1'></danqu>
					<shipin v-show="index==3"></shipin>
					
					<!-- 以上是各组件 -->
				</swiper-item>
			</swiper>
		</view>
	</view>
	
	
 </view>
</template>

<script>
	let app=getApp()
	import danqu from '../../components/searchResultChild/danqu/danqu.vue'
	import shipin from '../../components/searchResultChild/shipin/shipin.vue'
	import zonghe from '../../components/searchResultChild/zonghe/zonghe.vue'
	export default {
		components:{
			danqu,shipin,zonghe
		},
		data() {
			return {
				scrollDistance:0,
				choseColor:'choseColorWhite',
				index:0,
				// zongheList:'',
				isScale:false,
				 currentIndex:0,
				 navList:[
					 {name:'综合',choseColor:'choseColorRed'},
					 {name:'单曲',choseColor:'choseColorWhite'},
					 {name:'歌单',choseColor:'choseColorWhite'},
					 {name:'视频',choseColor:'choseColorWhite'},
					 {name:'歌手',choseColor:'choseColorWhite'},
					 {name:'播客',choseColor:'choseColorWhite'},
					 {name:'歌词',choseColor:'choseColorWhite'},
					 {name:'专辑',choseColor:'choseColorWhite'},
					 {name:'声音',choseColor:'choseColorWhite'},
					 {name:'云圈',choseColor:'choseColorWhite'},
					 {name:'用户',choseColor:'choseColorWhite'},
				 ],
				 list:[
					 {id:0,isZongHe:true},
					 {id:1,isZongHe:false},
					 {id:2,isZongHe:false},
					 {id:3,isZongHe:false},
					 {id:4,isZongHe:false},
					 {id:5,isZongHe:false},
					 {id:6,isZongHe:false},
					 {id:7,isZongHe:false},
					 {id:8,isZongHe:false},
					 {id:9,isZongHe:false},
					 {id:10,isZongHe:false},
					 ]
			};
		},
		onShow(options) {
			this.searchText = getApp().globalData.searchText;
			
		},
		onLoad() {
			
		},
		onReady() { 
		            
		        },
		methods: { 
			back(){
				uni.switchTab({
					url:"../index/index",
					animationType: 'fade-in'
				})
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
			},
			scroll(e){
				console.log(e)
			},
			
			choseNav(item,index){
				this.navList.forEach(item2=>{
					item2.choseColor='choseColorWhite'
				})
				item.choseColor='choseColorRed'
				this.currentIndex=index
			},
			swiperTab(e) {
				const that=this
				console.log('e',e.detail.current)
			 this.currentIndex = e.detail.current //获取索引	
			 if(e.detail.current<=10){
				 this.navList.forEach(item=>{
				 	item.choseColor='choseColorWhite'
				 })
				 this.navList[e.detail.current].choseColor='choseColorRed'
			 }
			 if(e.detail.current>=5){
				 that.scrollDistance=306
			 }else{
				 that.scrollDistance=0
			 }
			 },
			
		},
		watch: {
			
		},
		computed: {
			
		}
	};
</script>

<style scoped>
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
.choseColorWhite{
	background-color: white;
}
.choseColorRed{
	background-color: red;
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
		background-color: #ffffff;
	}
</style>
