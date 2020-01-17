import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/index'
import * as firebase from 'firebase'
import FrontPage from './components/FrontPage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import UserDashboard from './components/UserDashboard'
import GameDashboard from './components/GameDashboard'
import CreateGame from './components/CreateGame'
import EditGame from './components/EditGame'
import ViewGame from './components/ViewGame'


Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/'},
    { path: '/home', component: FrontPage },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/userdashboard', component: UserDashboard}, 
    { path: '/gamedashboard', component: GameDashboard },
    { path: '/creategame', component: CreateGame },
    { path: '/editgame', component: EditGame },
    { path: '/viewgame', component: ViewGame },
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
