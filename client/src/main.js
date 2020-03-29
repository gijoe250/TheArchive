import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
//custom
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// compounent
import HelloWorld from '@/components/HelloWorld';
import posts from '@/components/Post';

import NewBoardGame from '@/components/NewBoardGames';
import Login from '@/components/Login';

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
        path: '/posts',
        name: 'posts',
        component: posts
    },
    {
        path: '/boardgame/new',
        name: 'NewBoardGame',
        component: NewBoardGame

        path: '/posts/new',
        name: 'NewPost',
        component: NewPost
    },
    {
        path: '/login',
        name: 'login',
        component: Login

    }
];

const router = new Router({
    routes
});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');