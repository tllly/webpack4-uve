import Vue from 'vue'
import App from './pages/app.vue'
import style from './main.css'

import router from './router/index.js';

new Vue({
    el:"#app",
    router,
    render:h=>h(App)
})