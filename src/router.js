import VueRouter from 'vue-router';

// Definition of View Routes
let routes = [
    {
        name: 'home',
        path: '/',
        component: require('./views/Home.vue')
    }
];

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes,
    linkActiveClass: 'is-active'
});