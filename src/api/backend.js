
const BASE_API = 'https://young-lowlands-15866.herokuapp.com/'

export default{
    async getUser(newUser){
        return fetch(`${BASE_API}/users`)
                .then(response => response.json())
                .then(result => result.find(user => {
                    if (newUser === user.user_id){
                        return  user
                    }
                }))
    },
    async createUser(newUser){
        fetch(`${BASE_API}/users`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:  JSON.stringify(
                {user_id: newUser.id}
                )
            })
        return(
            fetch(`${BASE_API}/users`)
                .then(response => response.json())
                .then(result => result.find(user => {
                    if (newUser.id === user.user_id){
                        return  user
                    }
                }))        
        )
    },
    
    async createGame(game){
        return(
            fetch(`${BASE_API}/games`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    user_id: game.user_id,
                    title: game.title,
                    intro: game.intro,
                    video: game.video
                })
            })
            .then(response => response.json())
            // eslint-disable-next-line no-console
            .then(result => result)
        )
    },


    async createScenario(scenario){
        return(
            fetch(`${BASE_API}/scenarios`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    game_id: scenario.game_id,
                    title: scenario.title,
                    description: scenario.description,
                    image: scenario.image
                })
            })
        )
    },

    async createQuestion(question){
        // eslint-disable-next-line no-console
        console.log(question)
        return(
            fetch(`${BASE_API}/questions`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    scenario_id: question.scenario_id,
                    question: question.question,
                    answer: question.answer,
                    type: question.type
                })
            })
        )
    },

    async getGame(game){
        return(
            await fetch(`${BASE_API}/games/${game.id}`)
                .then(response => response.json())
                // eslint-disable-next-line no-console
                .then(result => result)
        )
    },

    async showGame(id){
        return(
            await fetch(`${BASE_API}/games/${id}`)
                .then(response => response.json())
                // eslint-disable-next-line no-console
                .then(result => result)
        )
    },

    async getQuestions(scenario){
        return(
            await fetch(`${BASE_API}/scenarios/${scenario.id}`)
                .then(response => response.json())
                // eslint-disable-next-line no-console
                .then(result => result)
        )
    },
    
    async editGame(game){
       await fetch(`${BASE_API}/games/${game.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: game.id,
                user_id: game.user_id,
                title: game.title,
                intro: game.intro,
                video: game.video
            })
        })
        return fetch(`${BASE_API}/users/${game.user_id}`)
            .then(response => response.json())
            .then(result => result.games)
    },

    async deleteGame(game){
        await fetch(`${BASE_API}/games/${game.id}`, {
            method: 'DELETE'
        })
        return fetch(`${BASE_API}/users/${game.user_id}`)
        .then(response => response.json())
        .then(result => result.games)
    },

    async deleteScenario(scenario){
        await fetch(`${BASE_API}/scenarios/${scenario.id}`, {
            method: 'DELETE'
        })
        return fetch(`${BASE_API}/games/${scenario.game_id}`)
        .then(response => response.json())
        .then(result => result.scenarios)
    },

    async deleteQuestion(question){
        await fetch(`${BASE_API}/questions/${question.id}`, {
            method: 'DELETE'
        })
        return fetch(`${BASE_API}/scenarios/${question.scenario_id}`)
        .then(response => response.json())
        .then(result => result.questions)
    },

    async editScenario(scenario){
        await fetch(`${BASE_API}/scenarios/${scenario.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: scenario.id,
                game_id: scenario.game_id,
                title: scenario.title,
                description: scenario.description,
                image: scenario.image
            })
        })
        return fetch(`${BASE_API}/games/${scenario.game_id}`)
            .then(response => response.json())
            .then(result => result.scenarios)
    },

    async editQuestion(question){
        await fetch(`${BASE_API}/questions/${question.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: question.id,
                scenario_id: question.scenario_id,
                question: question.question,
                answer: question.answer,
                type: question.type
            })
        })
        return fetch(`${BASE_API}/scenarios/${question.scenario_id}`)
            .then(response => response.json())
            .then(result => result.questions)
    },

    async setAttempt(attempt){
        await fetch(`${BASE_API}/attempts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: attempt.firstName,
                last_name: attempt.lastName,
                game_id: attempt.game_id,
                username: attempt.username
            })
        })
        return (fetch(`${BASE_API}/attempts`)
            .then(response => response.json())
            .then(result => result.find(username => {
                    // eslint-disable-next-line no-console
                    console.log(attempt, username)
                if (attempt.username === username.username){
                    return  result
                }
            }))        
    )
    },

    postAnswer(answer){
        fetch(`${BASE_API}/answers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                answer: answer.answer,
                question_id: answer.question_id,
                attempt_id: answer.attempt_id
            })
        })
    },

    async showAttempt(id){
        return(
            await fetch(`${BASE_API}/attempts/${id}`)
                .then(response => response.json())
                // eslint-disable-next-line no-console
                .then(result => result)
        )
    },
    
    async deleteAttempt(attempt){
        await fetch(`${BASE_API}/attempts/${attempt.id}`, {
            method: 'DELETE'
        })
        return fetch(`${BASE_API}/games/${attempt.game_id}`)
        .then(response => response.json())
        .then(result => result)
    },
    
    async getQuestion(answer){
        return(
            await fetch(`${BASE_API}/questions/${answer.question_id}`)
                .then(response => response.json())
                // eslint-disable-next-line no-console
                .then(result => result)
        )
    },
    
}