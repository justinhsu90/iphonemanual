import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'iphonese',
      component: () => import(/* webpackChunk:'iphonese */ '@/components/iphonese.vue'),
    },
  ],
});
