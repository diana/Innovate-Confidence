import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth'
import games from './modules/games'


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        auth,
        games,
    }
})