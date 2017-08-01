import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name: 'Home',
            path: '/',
            component: require('../views/Home.vue')
        }
    ],
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'is-active'
});