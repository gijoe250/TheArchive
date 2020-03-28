import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import item from '@/components/Items';
import VueRouter from 'vue-router';
Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(Router);

const routes = [{
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/items',
        name: 'item',
        component: item
    }
];

const router = new VueRouter({
    routes
});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');