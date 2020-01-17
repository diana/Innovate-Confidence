import backend from '../../api/backend'
import * as firebase from 'firebase'
import {router} from '../../main'

const state = {
    users: [],
    user: {
        id: null,
        games: null,
        scenarios: null
    },
    games: [],
    userId: null,
    isLoggedIn: false,
    game: {
        id: '',
        user_id: '',
        title: '',
        intro: '',
        video: '',
        scenarios: [],
    },
    scenarios: []

}

const getters = {
    user(state) {
        return state.user
    },
    userId(state) {
        return state.user_id
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
//     async autoSignin({commit}, user) {
//         const newUserId = user.uid

//         router.push('/userdashboard')
//         const response = await backend.getUser(newUserId)
//             commit('setUser', response)
//             commit('setUserId', response.id)
//             commit('setLoggedIn', true)
//             commit('setGames', response.games)
// },

    async getGame({commit}, game){
        commit('setGame', game)
        router.push('/gamedashboard')
        const response = await backend.getGame(game)
        // eslint-disable-next-line no-console
            console.log(response)
            commit('setScenario', response)
            // eslint-disable-next-line no-console
            console.log(state.scenarios)
    },

    setEditGame({commit}, game){
        commit('setGame', game)
        router.push('/editgame')
    },

    createGame({commit,}, game){
        backend.createGame(game)
        commit('addGame', game)
        commit('setGame', game)
        router.push('/userdashboard')
    },

    async editGame({commit}, game){
        const response = await backend.editGame(game)
            commit('setGame', game)
            commit('setGames', response)
        router.push('/gamedashboard')
    },

    async deleteGame({commit}, game){
        const response = await backend.deleteGame(game)
            commit('setGames', response)
        router.push('/userdashboard')
    },
    
    logoutUser(){

    }
}

const mutations = {
    setUser(state, payload){
      state.user = {id: payload.id, games: payload.games, scenarios: payload.scenarios}
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
            video: game.video,
            scenarios: game.scenarios
        }
    },
    setScenario(state, scenarios){
        state.scenarios = scenarios
    }
    // logOut(state){
    //     state.
    // }
}

export default{
    state,
    getters,
    actions,
    mutations
}