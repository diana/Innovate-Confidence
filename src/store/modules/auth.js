import backend from '../../api/backend'
import * as firebase from 'firebase'
import {router} from '../../main'

const state = {
    users: {},
    user: {
        id: '',
        games: [],
    },
    games: [],
    userId: 0,
    isLoggedIn: false,
    game: {
        id: '',
        user_id: '',
        title: '',
        intro: '',
        video: '',
    },

}

const getters = {
    user(state) {
        return state.user
    },
    games(state) {
        return state.game
    }
}

const actions = {
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
                router.push('/userdashboard')
            }
        )
        .catch(
            error => {
                // eslint-disable-next-line no-console
                console.log(error)
            }
        )
    },

     authorizeUser({commit}, payload){
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then( 
            async user => {
                const newUserId = user.user.uid

                router.push('/userdashboard')
                const response = await backend.getUser(newUserId)
                    commit('setUser', response)
                    commit('setUserId', response.id)
                    commit('setLoggedIn', true)
                    commit('setGames', response.games)

            },
        )
        .catch(
            error => {
                // eslint-disable-next-line no-console
                console.log(error)
            }
        )
    },
    getGame({commit}, game){
        commit('setGame', game)
        router.push('/gamedashboard')
    },
    editGame({commit}, game){
        commit('setGame', game)
        router.push('/editgame')
    },
    createGame({commit,}, game){
        backend.createGame(game)
        commit('addGame', game)
        commit('setGame', game)
        router.push('/userdashboard')
    },  
}

const mutations = {
    setUser(state, payload){
      state.user = {id: payload.id, games: payload.games}
    },
    setLoggedIn(state, status){
        state.isLoggedIn = status
    },
    setUserId(state, id){
        state.userId = id
    },
    setGames(state, games){
        state.games = games
    },
    addGame(state, game){
        state.games = [...state.games, game]
    },
    setGame(state, game){
        state.game = { 
            id: game.id, 
            user_id: game.user_id, 
            title: game.title, 
            intro: game.intro, 
            video: game.video 
        }
    },
}

export default{
    state,
    getters,
    actions,
    mutations
}