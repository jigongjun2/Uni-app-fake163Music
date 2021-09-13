<template>
	<view>
		<view class="code" @click="changeStatus">
			<view v-for="(item,index) in unit" class="verification_code">{{pwd1[index]}}</view>
		</view>
		<view class="input">
			<input :maxlength="unit" @input="change1" v-model="pwd" v-show="true" type="number" :focus="inputStatus" />
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			unit:{
				type:Number,
				default:6
			},
			focus:{
				type:Boolean,
				default:false
			},
			ontime:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return {
				inputStatus:this.focus,
				pwd:"",
				pwd1:[]
			}
		},
		methods:{
			changeStatus(){
				this.inputStatus=!this.inputStatus
			},
			change1(e){
				this.pwd1=String(e.target.value).split('')
				if(this.ontime){
					this.$emit('change',e.target.value)
				}else{
					if(this.pwd1.length==this.unit){
						this.$emit('change',e.target.value)
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.code{
	width: 630rpx;
	margin: 30rpx auto;
	display:flex;
	justify-content: space-between;
	.verification_code{
		width: 80rpx;
		height: 80rpx;
		background: #FAFBFD;
		border: 1px solid #F2F2F2;
		border-radius: 10rpx;
		text-align: center;
		line-height: 80rpx;
		color: #333333;
		font-size: 32rpx;
	}
}
.input{
	width: 0;
	height: 0;
	overflow: hidden;
}
</style>
