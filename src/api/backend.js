

const BASE_API = 'http://localhost:3000'

export default{
    async getUser(){
        // eslint-disable-next-line no-console
        return fetch(`${BASE_API}/users`).then(response => console.log(response))
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
    }
}