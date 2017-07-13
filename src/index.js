// Modules
import Vue from 'vue';
import VueRouter from 'vue-router';

// Vue modules
Vue.use(VueRouter);
import router from './router';

new Vue({
	router,
	el: '#app'
});