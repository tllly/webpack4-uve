<template>
    <section class="main">
        <p>{{name}}</p>
        <p>{{sayhello}}</p>
        <img src="../img/igpidcart.png">
        <hello :inputname="name" v-on:comefromchild = "getmessage"></hello>
        <router-link to="/about">about</router-link>
        <router-link to="/news">news</router-link>
        
        <router-view></router-view>
    </section>
</template>

<script>
import hello from './components/hello.vue'

export default {
    data () {
        return {
            name:"请摆好姿势准备拍照",
            sayhello:'自我安慰'
        }
    },
    components: {
        hello
    },
    methods:{
        getmessage(value){
            this.sayhello = value
        }
    }
}
</script>
<style>
.main>p{
    color: #f00;
}
</style>