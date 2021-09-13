# luanqing-menubar
本插件符合最新规范，直接导入项目即可使用

##如果自己的内容被菜单栏遮挡一部分高度的话可以在自己的内容view里加上 
```
padding-top: calc(var(--status-bar-height) + 100rpx);
```

##示例：
```
<template>
	<view>
		<luanqing-menubar :menus="menus" @clickMenu="clickMenu"></luanqing-menubar>
		<view>{{test}}</view>
	</view>
</template>
```

##参数
名称|作用|说明
--|:--:|--:
menus|菜单数据|[{name:xxx}]必须持有至少一个name属性
`clickMenu`|选中回调|`clickMenu`带回一个当前选择的菜单数据item



##说明：
1.  menus  菜单栏数据  [{name:"xx"}]  至少需要一个name属性
2.  clickMenu  组件内部点击时会回调该函数，开发者可以在此接收选中的菜单(回传参数: menu对象)


##具体详细参数如下：
```
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
```