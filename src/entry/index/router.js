import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'iphone6',
      component: () => import(/* webpackChunk:'iphone6' */ '@/components/iphone6.vue'),
    },
  ],
});
