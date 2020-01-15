<template>
    <div class="login-div">
        <form @submit.prevent="onSignup" class="login-form">
            <div class="heading">
                <h3>Sign Up as New User</h3>
            </div>
            <div class="email">
                <label class="lable">Email</label>
                <input 
                    type="email"
                    label="email"
                    name="email"
                    id="email"
                    v-model="email" 
                    required
                    class="input"
                />
            </div>
            <div class="password">
                <label class="lable">Password</label>
                <input 
                    type="password"
                    label="password"
                    name="password" 
                    id="password" 
                    v-model="password" 
                    required
                    class="input"
                />
            </div >
            <div class="password">
                <label class="lable">Confirm Password</label>
                <input 
                    type="password"
                    name="confirmPassword" 
                    id="confirmPassword" 
                    v-model="confirmPassword" 
                    @change="comparePasswords"
                    class="input"
                />
            </div>
            <div class='password'>
                <p v-if="!didPasswordsMatch">passwords do not match</p>
            </div>
            <div class='div-submit'>
                <input type="submit" class='submit'/>
            </div>
        </form>
        <router-link to="/login" class="button">Already A User?</router-link>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapActions } from 'vuex'

export default {
    name: 'SignUp',
    data(){
       return {
           email: '',
           password: '',
           confirmPassword: '',
           didPasswordsMatch: false,
       }
    },
    methods:{
        comparePasswords(){
            this.didPasswordsMatch = this.password === this.confirmPassword 
        },
        onSignup(){
            this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
        },
    }
}
</script>

<style>
.heading{
    margin: none;
}
h3{
    font-family: "Roboto", sans-serif;
    font-size: 3vw;
    background-color: #8BD3DE;
    padding: .5vw;
    margin: 0;
    color: #011627;
    margin: 1vw;
    border-radius: 3px;
}
</style>