import backend from '../../api/backend'

const state = {
    users: {},
    user: {}
}

const getters = {
    isLoggedIn: state => !!state.user
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
    createUser(user){
        // eslint-disable-next-line no-console
        console.log(user)
        // backend.createUser(user)
    }
}

const mutations = {
    setUser(state, user){
        state.user = user
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}