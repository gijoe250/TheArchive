import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
//custom
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// compounent
import Home from '@/components/Home';
import posts from '@/components/Post';

import NewBoardGame from '@/components/NewBoardGames';
import EditBoardGame from '@/components/EditBoardGames';
import Login from '@/components/Login';
import Register from '@/components/Register';

Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(Router);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
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
    },
    {
        path: '/boardgame/edit',
        name: 'EditBoardGame',
        component: EditBoardGame
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
];

const router = new Router({
    routes
});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');