<template>
    <div class="wrap-contact100">
        <form @submit.prevent="onSignup" class="contact100-form validate-form">
            <span class="contact100-form-title">Sign Up as New User</span>
            <label class="label-input100">Email</label>
            <div class="wrap-input100 validate-input">
                <input 
                    type="email"
                    label="email"
                    name="email"
                    id="email"
                    v-model="email" 
                    required
                    class="input100"
                />
            </div>
            <label class="label-input100">Password</label>
            <div class="wrap-input100 validate-input">
                <input 
                    type="password"
                    label="password"
                    name="password" 
                    id="password" 
                    v-model="password" 
                    required
                    class="input100"
                />
            </div >
            <label class="label-input100">Confirm Password</label>
            <div class="wrap-input100 validate-input">
                <input 
                    type="password"
                    name="confirmPassword" 
                    id="confirmPassword" 
                    v-model="confirmPassword" 
                    @change="comparePasswords"
                    class="input100"
                />
            </div>
            <div class='wrap-input100 validate-input'>
                <label 
                    v-if="!didPasswordsMatch"
                    class="label-input100"   
                >passwords do not match</label>
            </div>
            <div class='edit-submit'>
                <input type="submit" class='submit'/>
            </div>
        </form>
        <router-link to="/login" class="router-button">Already A User?</router-link>
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