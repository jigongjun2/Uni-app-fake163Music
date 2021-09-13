import {
	pathToBase64
} from '../image-tools/index.js'
import tabCon from './tabbarConfig.js'
let barList = [];


function DrawItem(list, itemWidth, i, config) {
	let item = list[i];
	var tabbarItem = new plus.nativeObj.View('tabbarItem' + i, {
		bottom: '0px',
		left: itemWidth * i + 'px',
		height: '55px',
		width: itemWidth + 'px',
		backgroundColor: '#ffffff'
	});
	barList.push(tabbarItem);
	DrawTabbarImg(item, tabbarItem, itemWidth, config, i);

	tabbarItem.addEventListener("click", function(e) {
		list.forEach((v, k) => {
			if(k == i){
				v.isShow = true;
			}else{
				v.isShow = false;
				
			}
			DrawTabbarImg(v, barList[k], itemWidth, config, k);
		})
		
		uni.switchTab({
			url: item.url
		})
	}, false);
	tabbarItem.show();
}

function DrawTabbarImg(item, tabbarItem, itemWidth, config, index) {
	try{
		var bitmap = new plus.nativeObj.Bitmap('bmp' + index);
		let isShow = item['isShow'];
		let src = isShow ? item.imgOn : item.imgOff;
		pathToBase64(src)
			.then(base64 => {
				bitmap.loadBase64Data(
					base64,
					function() {},
					function(e) {});
				tabbarItem.drawBitmap(bitmap, {
					top: '0px',
					left: '0px',
					width: '100%',
					height: '100%'
				}, {
					top: '5px',
					left: itemWidth / 2 - config.imgWidth / 2 + 'px',
					width: config.imgWidth + 'px',
					height: config.imgWidth + 'px'
				},'img'+index);
				tabbarItem.drawText(item.name, {
					align: 'center',
					top: '35px',
					left: '0px',
					width: itemWidth + 'px',
					height: '15px'
				}, {
					size: config.fontSize,
					color: isShow ? config.selectColor : config.color
				},'text'+index);
			})
	}catch(e){
		
	}
	
}

export function hideTabbarSelf() {
	barList.map(function(v) {
		v.setStyle({
			opacity: 0
		})
		v.hide();
	})
}

export function showTabbarSelf() {
	barList.map(function(v) {
		v.setStyle({
			opacity: 1
		})
		v.show();
	})
}
export function initMyTabbar(list, options = {}) {
	let config = Object.assign({}, tabCon, options);
	var itemWidth = plus.screen.resolutionWidth / list.length;
	if (config.imgWidth >= itemWidth) {
		config.imgWidth = 30;
	}
	for (var i = 0; i < 5; ++i) {
		DrawItem(list, itemWidth, i, config);
	}

}
