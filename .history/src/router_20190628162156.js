import Vue from 'vue';
import Router from 'vue-router';
import Search from './views/Search.vue';
import About from './views/About.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
