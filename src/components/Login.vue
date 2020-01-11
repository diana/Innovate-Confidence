<template>
  <div>
      <div class="login-div">
        <form class="login-form" @submit.prevent="onSignin">
            <label>email</label>
            <input 
                type="email"
                label="email"
                name="email"
                id="email"
                v-model="email" 
                required
            />
            <label>password</label>
            <input
                type="password"
                label="password"
                name="password" 
                id="password" 
                v-model="password" 
                required

            />
            <input type="submit" />
        </form>
        <router-link to="signup" class="button" >new user?</router-link>
      </div>
  </div>
</template>

<script>

export default {
    name: 'login',
    data(){
        return {
            email: '',
            password: '',
        }
    },

    methods:{
        onSignin(){
            this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
        },
    }

}
</script>

<style>
.login-div{
    margin: 2vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
}
.login-form{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1vw;
    background-color: #009FB7;
    flex-direction: row;
    flex-wrap: wrap; 
    padding: 1vw;
    width: 30%
}
label{
    font-size: 2vh;
    width: 35%;
    text-align: center
}
input:hover{
    background-color: #009FB7;
}
input::selection{
    border-color: #FFD35D;
    height: 2vh;
}
input{
    margin: 1vw;
    width: 35%;
    align-self: center;
    justify-self: center;
}
.button{
    text-decoration: none;
    color: #009FB7;
    background-color: #FFD35D;
    padding: 1vw;
}
</style>