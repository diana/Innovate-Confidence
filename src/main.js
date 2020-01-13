import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/index'
import FrontPage from './components/FrontPage'
import Login from './components/Login'
import SignUp from './components/SignUp'


Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/'},
    { path: '/home', component: FrontPage },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
