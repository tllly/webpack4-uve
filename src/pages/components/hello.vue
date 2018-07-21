<template>
    <section class="main">
        <p>{{aaa}}</p>
        <p>{{inputname}}</p>
        <p><input type="button" name="aaa" value="发射信号" @click="heartclick"></p>
    </section>
</template>

<script>
export default {
	name: "hello",
    data () {
        return {
            aaa:"世界你好！！",
            bbb:"我是你心中的传说",
            clickvalue:'来自星星的问候'
        }
    },
    props:{
    	inputname:String,
    },
    methods:{
    	heartclick(){
    		this.$emit('comefromchild',this.clickvalue)
    		//this.aaa="我有点不好了"
    	}
    }
}
</script>
