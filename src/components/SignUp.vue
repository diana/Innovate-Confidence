<template>
  <div>
      <div>
        <h3>Sign Up as New User</h3>
        <router-link to="/login">Already A User?</router-link>
      </div>
      <form @submit.prevent="createUser">
          <label>Username:</label>
          <input type="text" v-model="user.username" required>
          <label>Email:</label>
          <input type="text" v-model="user.email" required>
          <label>Passord:</label>
          <input type="password" required>
          <input type="submit" />
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
           user: {
            username: '',
            email: ''
       }}
    },
    methods:{
        // ...mapActions(['createUser']),
        createUser(){
            // eslint-disable-next-line no-console
            return console.log(this.user)}
    }
}
</script>

<style>

</style>