<template>
    <section class="main">
        <p>{{name}}</p>
        <img src="../img/igpidcart.png">
        <hello></hello>
    </section>
</template>

<script>
import hello from './components/hello.vue'

export default {
    data () {
        return {
            name:"请摆好姿势准备拍照"
        }
    },
    components: {
        hello: hello
    },
}
</script>
<style>
.main>p{
    color: #f00;
}
</style>