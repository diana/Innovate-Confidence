<template>
  <div>
      <div>
        <h3>Sign Up as New User</h3>
        <router-link to="/login">Already A User?</router-link>
      </div>
      <form @submit.prevent="onSignup">
            <label>Email</label>
            <input 
                type="email"
                label="email"
                name="email"
                id="email"
                v-model="email" 
                required
            />
            <label>Password</label>
            <input 
                type="password"
                label="password"
                name="password" 
                id="password" 
                v-model="password" 
                required
            />
            <label>Confirm Password</label>
            <input 
                type="password"
                name="confirmPassword" 
                id="confirmPassword" 
                v-model="confirmPassword" 
                @change="comparePasswords"
            />
          <input type="submit" />
          <p v-if="!didPasswordsMatch">passwords do not match</p>
      </form>

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

</style>