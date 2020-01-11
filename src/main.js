import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/index'
import Login from './components/Login'
import SignUp from './components/SignUp'
import * as firebase from 'firebase'


Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/'},
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBTV0ItllnUmP-GJHI0xWFESm6tDHsobSo',
      authDomain: 'innovate-confidence.firebaseapp.com',
      databaseURL: 'https://innovate-confidence.firebaseio.com',
      projectId: 'innovate-confidence',
      storageBucket: 'innovate-confidence.appspot.com',
    })
  }
}).$mount('#app')
