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
  }

  #app{
    background-image: url(https://i.imgur.com/wubelZD.jpg);
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: top center;
    width: 100vw;
    height: 100vh;
  }
</style>
