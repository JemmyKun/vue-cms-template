import Vue from 'vue'
import Router from 'vue-router' // 引入vue-router

import Login from '../components/login/Login.vue';
import MainComponent from '../components/main/MainComponent';
import Todo from '../components/todo/Todo';
import Test from '../components/test/Test';
import VuexTest from '../components/vuexTest/VuexTest';
import PageA from '../components/pageA/PageA';
import PageB from '../components/pageB/PageB';

Vue.use(Router) // 在vue中注入Router

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login',
        }, {
            path: '/login',
            name: 'login',
            component: Login
        }, {
            path: '/main',
            component: MainComponent,
            children: [{
                    path: 'todo',
                    component: Todo,
                },
                {
                    path: 'pageA',
                    component: PageA,
                },
                {
                    path: 'pageB',
                    component: PageB,
                }
            ]
        },
        {
            path: '/test',
            component: Test,
        },
        {
            path: '/vuex',
            component: VuexTest,
        }
    ]
})