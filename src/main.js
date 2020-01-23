/* eslint-disable no-console */
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
import Scenarios from './components/Scenarios'
import EditScenarios from './components/EditScenarios'
import EditScenario from './components/EditScenario'
import CreateScenarios from './components/CreateScenarios'
import EditQuestions from './components/EditQuestions'
import EditQuestion from './components/EditQuestion'
import CreateQuestion from './components/CreateQuestion'
import Questions from './components/Questions'
import Question from './components/Question'
import Player from './components/Player'
import Attempts from './components/Attempts'
import Attempt from './components/Attempt'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: FrontPage },
    { path: '/login', component: Login },
    { path: '/player', name: 'player', component: Player },
    { path: '/signup', component: SignUp },
    { 
      path: '/userdashboard/:id',
      name: 'userdashboard',
      component: UserDashboard,
      beforeEnter(to,from,next){
        if(store.getters['loggedIn']){
          next()
        } else{
          next('/login')
        }
      }
    },     
    { 
      path: '/userdashboard',
      name: 'userdashboard',
      component: UserDashboard,
      beforeEnter(to,from,next){
        if(store.getters['loggedIn']){
          next('userdashboard/:id')
        } else{
          next('/login')
        }
      }
    },     
    { 
      path: '/gamedashboard', 
      component: GameDashboard,
      beforeEnter(to,from,next){
        if(store.getters['loggedIn']){
          next()
        } else{
          next('/login')
        }
      }
    },
    { 
      path: '/creategame', 
      component: CreateGame,
      beforeEnter(to,from,next){
        if(store.getters['loggedIn']){
          next()
        } else{
          next('/login')
        }
      }
    },
    { 
      path: '/attempts', 
      component: Attempts,
      beforeEnter(to,from,next){
        if(store.getters['loggedIn']){
          next()
        } else{
          next('/login')
        }
      }
    },
    { 
      path: '/question/:id',
      name: 'question', 
      component: Question,
      beforeEnter(to,from,next){
        if(store.getters['loggedIn']){
          next()
        } else{
          next('/login')
        }
      }
    },
    { 
      path: '/attempt/:id', 
      name: 'attempt',
      component: Attempt,
      beforeEnter(to,from,next){
        if(store.getters['loggedIn']){
          next()
        } else{
          next('/login')
        }
      }
    },
    { 
      path: '/editgame', 
      component: EditGame,
      beforeEnter(to,from,next){
        if(store.getters['loggedIn']){
          next(store.getters['loggedIn'])
        } else{
          next('/login')
        }
      } 
    },
    { 
      path: '/game/:id', 
      name: 'viewgame', 
      component: ViewGame,

    },
    { path: '/scenarios/:id', name: 'scenarios', component: Scenarios },
    { 
      path: '/editscenarios', 
      component: EditScenarios,
      beforeEnter(to,from,next){
        if(store.getters['loggedIn']){
          next()
        } else{
          next('/login')
        }
      }
    },
    { 
      path: '/editscenario', 
      component: EditScenario, 
      beforeEnter(to,from,next){
        if(store.getters['loggedIn']){
          next()
        } else{
          next('/login')
        }
      }
    },
    { 
      path: '/createscenarios', 
      component: CreateScenarios, 
      beforeEnter(to,from,next){
        if(store.getters['loggedIn']){
          next()
        } else{
          next('/login')
        }
      }
    },
    { path: '/questions/:id', name:'questions', component: Questions },
    { 
      path: '/editquestions', 
      component: EditQuestions,
      beforeEnter(to,from,next){
        if(store.getters['loggedIn']){
          next()
        } else{
          next('/login')
        }
      } 
    },
    { 
      path: '/createquestion', 
      component: CreateQuestion, 
      beforeEnter(to,from,next){
        if(store.getters['loggedIn']){
          next()
        } else{
          next('/login')
        }
      }
    },
    { 
      path: '/editquestion', 
      component: EditQuestion,
      beforeEnter(to,from,next){
        if(store.getters['loggedIn']){
          next()
        } else{
          next('/login')
        }
      }
    },
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

// routes: [
//   { path: '/home', component: FrontPage },
//   { path: '/login', component: Login },
//   { path: '/signup', component: SignUp },
//   { 
//     path: '/userdashboard', 
//     component: UserDashboard, 
//     beforeEnter(to,from,next){
//       if(store.getters['loggedIn']){
//         next('/userdashboard')
//       } else{
//         next('/login')
//       }
//     }
//   }, 
//   { 
//     path: '/gamedashboard', 
//     component: GameDashboard,
//     beforeEnter(to,from,next){
//       if(store.getters['loggedIn']){
//         next()
//       } else{
//         next('/login')
//       }
//     }
//   }, 
//   { 
//     path: '/creategame', 
//     component: CreateGame, 
//     beforeEnter(to,from,next){
//       if(store.getters['loggedIn']){
//         next()
//       } else{
//         next('/login')
//       }
//     }
//   },
//   { 
//     path: '/editgame', 
//     component: EditGame,
//     beforeEnter(to,from,next){
//       if(store.getters['loggedIn']){
//         next()
//       } else{
//         next('/login')
//       }
//     }
//   },
//   { 
//     path: '/viewgame', 
//     component: ViewGame,
//     beforeEnter(to,from,next){
//       if(store.getters['loggedIn']){
//         next()
//       } else{
//         next('/login')
//       }
//     } 
//   },
//   { 
//     path: '/scenarios', 
//     component: Scenarios,
//     beforeEnter(to,from,next){
//       if(store.getters['loggedIn']){
//         next()
//       } else{
//         next('/login')
//       }
//     } 
//   },
//   { 
//     path: '/editscenarios', 
//     component: EditScenarios,
//     beforeEnter(to,from,next){
//       if(store.getters['loggedIn']){
//         next()
//       } else{
//         next('/login')
//       }
//     } 
//   },
//   { 
//     path: '/editscenario', 
//     component: EditScenario,
//     beforeEnter(to,from,next){
//       if(store.getters['loggedIn']){
//         next()
//       } else{
//         next('/login')
//       }
//     }
//   },
//   { 
//     path: '/createscenarios',
//      component: CreateScenarios,
//      beforeEnter(to,from,next){
//       if(store.getters['loggedIn']){
//         next()
//       } else{
//         next('/login')
//       }
//     } 
//   },
//   { 
//     path: '/questions', 
//     component: Questions,
//     beforeEnter(to,from,next){
//       if(store.getters['loggedIn']){
//         next()
//       } else{
//         next('/login')
//       }
//     } 
//   },
//   { 
//     path: '/editquestions', 
//     component: EditQuestions,
//     beforeEnter(to,from,next){
//       if(store.getters['loggedIn']){
//         next()
//       } else{
//         next('/login')
//       }
//     } 
//   },
//   { 
//     path: '/createquestion', 
//     component: CreateQuestion,
//     beforeEnter(to,from,next){
//       if(store.getters['loggedIn']){
//         next()
//       } else{
//         next('/login')
//       }
//     } 
//   },
//   { 
//     path: '/editquestion', 
//     component: EditQuestion,
//     beforeEnter(to,from,next){
//       if(store.getters['loggedIn']){
//         next()
//       } else{
//         next('/login')
//       }
//     } 
//   },
// ]
// })
