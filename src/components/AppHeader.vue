<template>
  <div class="nav ">
      <div class="logo-div">
            <!-- <router-link to="/" class="active item">
                <img src="https://i.imgur.com/uHMskmT.png" class="logo-small"/>
            </router-link> -->
            <button @click="logOut" class="active item">
                <img src="https://i.imgur.com/zxaHE8Z.png" class="logo"/>
            </button>
        </div>
        <div class="links">
            <button @click="logOut" class="login" v-if="isLoggedIn">logout</button>
            <router-link to="/login" class="login" v-else >login</router-link>
        </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'appheader',
    computed: mapState({
        isLoggedIn: state => state.auth.isLoggedIn
    }),
    methods:{
        logOut(event){
            this.$store.dispatch('logOut', event)
        }
    }
}
</script>

<style scope>
.nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #011627;
    justify-content: space-between;
    padding: .5%;
    opacity: 85%;
    width: 100%
}
.logo-small{
    width: 6vw;
}
.logo{
    width: 100%;
}
.links{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 3px;
}
.login{
    text-decoration: none;
    color: #FFD35D;
    justify-self: right;
    font-weight: lighter;
    font-size: 20px;
    padding: .5vw;
    border-radius: 3px;
    background: none;
    border: none;
    font-family: 'Roboto', sans-serif;
}
.login:hover{
    box-shadow: 0 9.5px 24px #FFD35D, 0 7.5px 16px rgba(0, 0, 0, 0.22);
    background-color: #FFD35D;
    color: #011627;
}
.active{
    width: 15%;
    background: none;
    border:none;
}
</style>