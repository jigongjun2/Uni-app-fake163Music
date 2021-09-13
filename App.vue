<script>
	export default {
		globalData: {
			id:'',
			src:'',
			name:'',
			author:'',
			imgUrl:'',
			clickMusicListDetail:'',
			geci:[],
			status:false,
			data:'',
			choseOneInfo:'',
			swiperUrl:'',
			searchText: '',
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 去除SCROLL-VIEW滚动条 */
::-webkit-scrollbar {
	display: none;
  }
</style>
