

const BASE_API = 'http://localhost:3000'

export default{
    async getUsers(){
        return fetch(`${BASE_API}/users`).then(response => response.data)
    },
    async createUser(user){
        // eslint-disable-next-line no-console
        await console.log(user)
// fetch(`${BASE_API}/users`, user, method: 'POST', headers: 'Content-Type':'application/json', body: JSON.stringify({username, email}))    
    }
}