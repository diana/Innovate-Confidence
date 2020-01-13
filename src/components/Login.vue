<template>
  <div>
      <div class="login-div">
        <form class="login-form" @submit.prevent="onSignin">
            <div class="email">
                <label>Email</label>
                <input 
                    type="email"
                    label="email"
                    name="email"
                    id="email"
                    v-model="email" 
                    required
                />
            </div>
            <div class="password">
                <label>Password</label>
                <input
                    type="password"
                    label="password"
                    name="password" 
                    id="password" 
                    v-model="password" 
                    required

                />
            </div>
            <div class='div-submit'>
                <input class='submit' type="submit" />
            </div>
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
    width: 85%;
    opacity: 65%;
    border-radius: 3px;

}
.email{
    display: flex;
    width:85%;
    justify-content: center;
    border-radius: 3px;

}
.password{
    display: flex;
    width: 85%;
    justify-content: center;
    border-radius: 3px;

}
label{
    font-size: 2vw;
    width: 25%;
    text-align: center;
    font-weight: bolder;
    color: #011627;
    background-color: #8BD3DE;
    margin: 1vw;
    padding-left: 1vw;
    padding-right: 1vw;
    border-radius: 3px;
    align-content: center;

}
input:hover{
    background-color: #FFD35D;
    border-radius: 3px;

}
input::selection{
    border-color: #FFD35D;
    height: 2vw;
    border-radius: 3px;

}
input{
    margin: 1vw;
    width: 35%;
    align-self: center;
    justify-self: center;
    color: #011627;
    font-family: 'Roboto', sans-serif;
    font-size: 2vw;
    background-color: #FDFFFC;
    border: none;
    border-radius: 3px;

}
.div-submit{
    width: 35%;
    align-content: center;
    justify-content: center;
    display: flex;
}
.submit{
    width: fit-content;
    align-self: center;
    background-color: #FDFFFC;
    font-size: 2vw;
    padding: 1px 7px 2px;
    text-decoration: none;
    color: #011627;
    border-radius: 3px;

}
.button{
    text-decoration: none;
    color: #009FB7;
    background-color: #FFD35D;
    padding: 1vw;
    width: 30%;
    text-align: center;
    font-size: 3vw;
    opacity: 85%;
    margin: 1vw;
    border-radius: 3px;
}
</style>