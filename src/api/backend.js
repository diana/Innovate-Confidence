
const BASE_API = 'http://localhost:3000'

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
        return(
            fetch(`${BASE_API}/users`,{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:  JSON.stringify(
                    {user_id: newUser.id}
                )
            }),
            // eslint-disable-next-line no-console
            console.log('post')
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
        )
    },

    async getGame(game){
        return(
            await fetch(`${BASE_API}/games/${game.id}`)
                .then(response => response.json())
                // eslint-disable-next-line no-console
                .then(result => result.scenarios)
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
    }
}