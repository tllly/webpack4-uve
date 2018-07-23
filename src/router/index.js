import Vue from 'vue';
import VueRouter from 'vue-router';
import about from '../pages/components/about.vue';
import news from '../pages/components/news.vue';
Vue.use(VueRouter)

const routes = [
  {path:'/about',component:about},
  {path:'/news',component:news}
];

const router = new VueRouter({
	routes
})

module.exports = router