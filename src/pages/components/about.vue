<template>
	<section class="aboutbox">
		<p>关于我们</p>
		<p>{{str}}</p>
		<button @click='intercept'>改变</button>
	</section>
</template>

<script type="text/javascript">
	export default({
		name:'about',
		data(){
			return{
				str:'当前选择的寄件日期:2018-07-20 18:42:55,从当前时间寄件到目的地,预计到达时间2018-07-23 09:00'
			}
		},
		methods:{
			intercept(){
				this.str = this.str.match(/预计.*?\s/)[0]
			}
		}
	})
</script>

<style scoped>
	.aboutbox{color: #ffffff;}
</style>