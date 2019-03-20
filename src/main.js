import Vue from 'vue';
import App from './App.vue';
import './assets/app.scss';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import EventEmitter from 'EventEmitter';
import router from './router/rootRouter';
import store from './store/store';
Vue.use(Antd);

Vue.config.productionTip = false;
window.EventEmitter = new EventEmitter();
Vue.prototype.$bus = Vue.prototype.$bus || new Vue();

new Vue({
	render: (h) => h(App),
	store,
	router
}).$mount('#app');