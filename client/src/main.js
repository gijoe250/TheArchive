import Vue from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home'; // this is the import line to add
import VueRouter from 'vue-router';
Vue.config.productionTip = false;

Vue.use(Router);

const routes = [{
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
    }
];

const router = new VueRouter({
    routes
});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');