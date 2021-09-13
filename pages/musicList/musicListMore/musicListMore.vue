<template>
<view class="">
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
					<tuijian v-show="index==0"></tuijian>
					<guanfang v-show="index==1"></guanfang>
					<shipingedan v-show="index==2"></shipingedan>
					<jingpin v-show="index==3"></jingpin>
					<huayu v-show="index==4"></huayu>
					<liuxing v-show="index==5"></liuxing>
					<yaogun v-show="index==6"></yaogun>
					<minyao v-show="index==7"></minyao>
					<dianzi v-show="index==8"></dianzi>
					<!-- 以上是各组件 -->
				</swiper-item>
			</swiper>
		</view>
	</view>
	
	
 </view>
</template>

<script>
	let app=getApp()
	import tuijian from "../../../components/musicListMoreChild/tuijian/tuijian.vue"
	import guanfang from "../../../components/musicListMoreChild/guanfang/guanfang.vue"
	import shipingedan from "../../../components/musicListMoreChild/shipingedan/shipingedan.vue"
	import jingpin from "../../../components/musicListMoreChild/jingpin/jingpin.vue"
	import huayu from "../../../components/musicListMoreChild/huayu/huayu.vue"
	import liuxing from "../../../components/musicListMoreChild/liuxing/liuxing.vue"
	import yaogun from "../../../components/musicListMoreChild/yaogun/yaogun.vue"
	import minyao from "../../../components/musicListMoreChild/minyao/minyao.vue"
	import dianzi from "../../../components/musicListMoreChild/dianzi/dianzi.vue"
	export default {
		components:{
			tuijian,
			guanfang,
			shipingedan,
			jingpin,
			huayu,
			liuxing,
			yaogun,
			minyao,
			dianzi,
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
					 {name:'推荐',choseColor:'choseColorRed'},
					 {name:'官方',choseColor:'choseColorWhite'},
					 {name:'视频歌单',choseColor:'choseColorWhite'},
					 {name:'精品',choseColor:'choseColorWhite'},
					 {name:'华语',choseColor:'choseColorWhite'},
					 {name:'流行',choseColor:'choseColorWhite'},
					 {name:'摇滚',choseColor:'choseColorWhite'},
					 {name:'民谣',choseColor:'choseColorWhite'},
					 {name:'电子',choseColor:'choseColorWhite'},
				 ],
				 list:[
					 {id:0,isTuijian:true},
					 {id:1,isTuijian:false},
					 {id:2,isTuijian:false},
					 {id:3,isTuijian:false},
					 {id:4,isTuijian:false},
					 {id:5,isTuijian:false},
					 {id:6,isTuijian:false},
					 {id:7,isTuijian:false},
					 {id:8,isTuijian:false},
					 ]
			};
		},
		onShow(options) {
			
			
		},
		onLoad() {
			
		},
		onReady() { 
		            
		        },
		methods: { 
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
