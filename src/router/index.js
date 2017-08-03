import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name: 'Home',
            path: '/',
            component: require('../views/Home.vue')
        },
        {
            name: 'Progress',
            path: '/progress',
            component: require('../views/Progress.vue')
        },
        {
            name: 'Privacy',
            path: '/privacy',
            component: require('../views/Privacy.vue')
        }
    ],
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'is-active'
});