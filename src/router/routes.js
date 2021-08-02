import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import PageNotFound from '../components/PageNotFound'

export default new VueRouter({
    routes: [{
        path: '/',
        component: Home,
        name: 'home'
    }, {
        path: '/entrar',
        component: Login,
        name: 'login'
    }, {
        path: '/criar-conta',
        component: Register,
        name: 'register'
    }, {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        beforeEnter: (to, from, next) => {
            let isLogged = document.cookie.indexOf('auth=1');
            if (isLogged === -1) {
                next('/')
            } else {
                next()
            }
        }
    }, {
        path: '*',
        component: PageNotFound,
    }]
})