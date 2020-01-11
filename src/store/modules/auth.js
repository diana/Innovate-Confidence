import backend from '../../api/backend'
import * as firebase from 'firebase'
import {router} from '../../main'

const state = {
    users: {},
    user: {
        id: '',
    },
    isLoggedIn: false,

}

const getters = {
    user(state) {
        return state.user
    }
}

const actions = {
    login(){
        backend.login()
    },
    getUser({commit}, input){
        state.users.find(user => {
            if( user.username === input){
                commit('setUser', user)
            }
            else{
                return 'user not found'
            }
        })
    },
    signUserUp({commit}, payload){
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then( 
            user => {
                const newUser = {
                    id: user.user.uid
                }
                // eslint-disable-next-line no-console
                console.log(newUser)
                commit('setUser', newUser)
                window.localStorage.setItem('user', newUser)
                backend.createUser(newUser)
                router.push('/')
            }
        )
        .catch(
            error => {
                // eslint-disable-next-line no-console
                console.log(error)
            }
        )
    },
    signUserIn({commit}, payload){
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then( 
            user => {
                const newUser = {
                    id: user.user.uid
                }
                commit('setUser', newUser, 'isLoggedIn', true)
                window.localStorage.setItem('user', newUser)
                backend.getUser(newUser)
                router.push('/')
            }
        )
        .catch(
            error => {
                // eslint-disable-next-line no-console
                console.log(error)
            }
        )

    }
}

const mutations = {
    setUser(state, payload){
      state.user = payload
    },

}

export default{
    state,
    getters,
    actions,
    mutations
}