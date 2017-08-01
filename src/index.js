// Modules
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

// Vue modules
Vue.use(VueRouter);
Vue.use(Vuetify);

import App from './App.vue';
import router from './router';

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});