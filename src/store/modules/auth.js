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
    scenarios: [],
    scenario: {
        id: '',
        game_id: '',
        title: '',
        description: '',
        image: '',
        questions: []
    },
    questions: [],
    question: {
        id: null,
        scenario_id: null,
        question: '',
        answer: ''
    },
    attempt: {
        firstName: '',
        lastName: '',
        game_id: '',
        new: false,
    },
    answer: {
        answer: '',
        question_id: null
    },
    answers: []
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
    },
    loggedIn(state){
        return state.isLoggedIn
    }
}

const actions = {
    signUserUp({commit}, payload){
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then( 
            async user => {
                const newUser = {
                    id: user.user.uid
                }
                // eslint-disable-next-line no-console
                console.log(newUser)
                window.localStorage.setItem('user', newUser)
                const response = await backend.createUser(newUser)
                    commit('setUser', newUser)
                    router.push({name: 'userdashboard', params: { id: response.id }})
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

                const response = await backend.getUser(newUserId)
                    commit('setUser', response)
                    commit('setUserId', response.id)
                    commit('setLoggedIn', true)
                    commit('setGames', response.games)
                    router.push({name: 'userdashboard', params: { id: response.id }})
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
            commit('setScenarios', response.scenarios)
            commit('setQuestions', response.questions)
            // eslint-disable-next-line no-console
            console.log(state.questions)
    },

    async showGame({commit}, id){
        const response = await backend.showGame(id)
        // eslint-disable-next-line no-console
        console.log(response)
            commit('setGame', response)
            commit('setScenarios', response.scenarios)
            commit('setQuestions', response.questions)
            // eslint-disable-next-line no-console
            console.log(state.questions)
    },

    async getQuestions({commit}, scenario){
        const response = await backend.getQuestions(scenario)
        // eslint-disable-next-line no-console
        console.log(response)
        commit('setQuestions', response.questions)
        commit('setScenario', scenario)
        // eslint-disable-next-line no-console
        console.log(state.questions)
        router.push({name: 'questions', params: {id: scenario.id}})
    },

    async getEditQuestions({commit}, scenario){
        const response = await backend.getQuestions(scenario)
        // eslint-disable-next-line no-console
        console.log(response)
        commit('setQuestions', response.questions)
        commit('setScenario', scenario)
        // eslint-disable-next-line no-console
        console.log(state.questions)
        router.push('/editquestions')
    },

    async setEditGame({commit}, game){
        commit('setGame', game)
        router.push('/editgame')
        const response = await backend.getGame(game)
            commit('setScenarios', response.scenarios)
            commit('setQuestions', response.questions)

    },

    async setEditScenarios({commit}, game){
        const response = await backend.getScenarios(game)
        router.push('/editscenarios')
        commit('setScenarios', response)
    },

    async createGame({commit,}, game){
        const response = await backend.createGame(game)
            commit('addGame', response)
            commit('setGame', response)
            router.push('/gamedashboard')
    },

    createScenario({commit,}, scenario){
        backend.createScenario(scenario)
        commit('addScenario', scenario)
        commit('setScenatio', scenario)
        router.push('/editscenarios')
    },

    async createQuestion({commit,}, question){
        // eslint-disable-next-line no-console
        console.log(question)
        await backend.createQuestion(question)
            commit('addQuestion', question)
            commit('setQuestion', question)
            router.push('/editquestions')
    },

    async editGame({commit}, game){
        const response = await backend.editGame(game)
            commit('setGame', game)
            commit('setGames', response)
        router.push('/gamedashboard')
    },

    async editScenario({commit}, scenario){
        const response = await backend.editScenario(scenario)
            commit('setScenario', scenario)
            commit('setScenarios', response)
        router.push('/editscenarios')
    },

    async editQuestion({commit}, question){
        const response = await backend.editQuestion(question)
            commit('setQuestion', question)
            commit('setQuestions', response)
        router.push('/editquestions')
    },

    async deleteGame({commit}, game){
        const response = await backend.deleteGame(game)
            commit('setGames', response)
            router.push('/userdashboard')
    },
    
    async deleteScenario({commit}, scenario){
        const response = await backend.deleteScenario(scenario)
            commit('setScenarios', response)
        router.push('/editscenarios')
    },

    async getScenario({commit}, scenario){
        const response = await backend.getQuestions(scenario)
            commit('setScenario', response)
            commit('setQuestions', response.questions)
            router.push('/editscenario')
    },

    getQuestion({commit}, question){
        commit('setQuestion', question)
        router.push('/editquestion')
    },

    async deleteQuestion({commit}, question){
        const response = await backend.deleteQuestion(question)
            commit('setQuestions', response)
        router.push('/editquestions')
    },

    getAnswer({commit}, question){
        commit('setAnswer', question)
    },

    logOut({commit}, event){
        commit('logOut', event)
        router.push('/home')
    },

    newAttempt({commit}, attempt){
        // eslint-disable-next-line no-console
        commit('setAttempt', attempt)
        router.push({name: 'scenarios', params: {id: attempt.game_id}})
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
    setScenarios(state, scenarios){
        state.scenarios = scenarios
    },
    addScenario(state, scenario){
        state.scenarios = [...state.scenarios, scenario]
    },
    setScenario(state, scenario){
        state.scenario = { 
            id: scenario.id, 
            game_id: scenario.game_id, 
            title: scenario.title, 
            description: scenario.description, 
            image: scenario.image,
            questions: scenario.questions
        }
    },    
   setQuestions(state, questions){
        state.questions = questions
    },    
   setQuestion(state, question){
        state.question = question
    },
    addQuestion(state, question){
        state.questions = [...state.questions, question]
    },
    setAnswer(state, question){
        state.answer = question.answer
    },

    logOut(state){
        state.users =  [],
        state.user = {
            id: null,
            games: null,
            scenarios: null
        },
        state.games = [],
        state.userId = null,
        state.isLoggedIn = false,
        state.game = {
            id: '',
            user_id: '',
            title: '',
            intro: '',
            video: '',
            scenarios: [],
        },
        state.scenarios = [],
        state.scenario = {
            id: '',
            game_id: '',
            title: '',
            description: '',
            image: '',
            questions: []
        },
        state.questions = [],
        state.question = {
            id: null,
            scenario_id: null,
            question: '',
            answer: ''
        },
        state.answer = ''
    },
    setAttempt(state, attempt){
        state.attempt = {
            firstName: attempt.firstName,
            lastName: attempt.lastName,
            game_id: attempt.game_id,
            new: true,
        }
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}