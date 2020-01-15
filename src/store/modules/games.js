// import {router} from '../../main'
// // eslint-disable-next-line no-unused-vars
// import backend from '../../api/backend'

// const state = {
//     game: {
//         id: '',
//         user_id: '',
//         title: '',
//         intro: '',
//         video: '',
//     },
// }

// const getters = {
//     thisGame(){
//         return state.game
//     }
// }

// const actions = {
//     getGame({commit}, game){
//         commit('setGame', game)
//         router.push('/gamedashboard')
//     },

//     createGame({commit}, game){
//         // backend.createGame(game)
//         commit('setGame', game)

//         router.push('/userdashboard')
//     }
// }

// const mutations = {
//     setGame(state, game){
//         state.game = { 
//             id: game.id, 
//             user_id: game.user_id, 
//             title: game.title, 
//             intro: game.intro, 
//             video: game.video 
//         }
//     },

// }

// export default{
//     state,
//     getters,
//     actions,
//     mutations
// }