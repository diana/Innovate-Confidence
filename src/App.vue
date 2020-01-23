<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>

  </div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader,
  }
}
</script>

<style>
  body{
    margin: 0%;
    box-sizing: border-box;
  }

  #app{
    font-family: 'Roboto', sans-serif;
    background-image: url(https://images.unsplash.com/photo-1529854140025-25995121f16f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: top center;
    background-attachment: fixed;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
