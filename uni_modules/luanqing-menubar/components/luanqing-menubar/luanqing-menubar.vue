<template>
		<view class="layout">
			<view v-for="(menu,index) in menus" v-bind:key="index" class="menu_item" @click="doClickItem(menu)">
				<view :class="current.name === menu.name ? activeTextStyle:textStyle">{{menu.name}}</view>
				<view :class="current.name === menu.name ? activeLineStyle:lineStyle"></view>
			</view>
		</view>
</template>
<script>
	export default{
		data(){
			return{
				current:{},
			}
		},
		created() {
			// 初始化  默认第一个是选中
			if(JSON.stringify(this.$props.defaultSelect) === '{}' || (this.$props.defaultSelect) === undefined){
				this.current = this.$props.menus ? this.$props.menus[0]:{};
			}else{
				this.current = this.$props.defaultSelect;
			}
		},
		//props接收父组件传递得数据
		props: {
			// 菜单数据
			menus: {
				type: Array,
				value: []
			},
			// 当前选中菜单项目(不传则默认第一项)
			defaultSelect:{
				type:Object,
				value:{},
			},
			// 文字激活时的风格
			activeTextStyle:{
				type: String,
				default:"menu_item_text_active",
			},
			// 下横线激活时的风格
			activeLineStyle:{
				type: String,
				default:"menu_item_line_active",
			},
			// 文字普通风格
			textStyle:{
				type: String,
				default: "menu_item_text"
			},
			// 下横线普通风格
			lineStyle:{
				type: String,
				default: "menu_item_line"
			}
		},
		methods:{
			doClickItem(menu){
				this.current = menu;
				console.error("nume:",menu)
				this.$emit('clickMenu',menu);
			}
		}
	}
</script>

<style>
	@import url("xcss.css");
</style>
