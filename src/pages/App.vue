<template>
    <section class="main">
        <p>{{name}}</p>
        <img src="../img/igpidcart.png">
    </section>
</template>

<script>
export default {
    data () {
        return {
            name:"请摆好姿势准备拍照"
        }
    }
}
</script>
<style>
.main>p{
    color: #f00;
}
</style>