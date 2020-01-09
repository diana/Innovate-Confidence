<template>
  <div>
      <div>
        <h3>Sign Up as New User</h3>
        <router-link to="/login">Already A User?</router-link>
      </div>
      <form @submit.prevent="handleSubmit">
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
        ...mapActions('auth',["createUser"]),
        handleSubmit(){
            // eslint-disable-next-line no-console
            console.log(this.createUser)
        },
    }
}
</script>

<style>

</style>