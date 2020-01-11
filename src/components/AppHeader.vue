<template>
  <div class="nav ">
      <div class="logo-div">
            <!-- <router-link to="/" class="active item">
                <img src="https://i.imgur.com/uHMskmT.png" class="logo-small"/>
            </router-link> -->
            <router-link to="/" class="active item">
                <img src="https://i.imgur.com/zxaHE8Z.png" class="logo"/>
            </router-link>
        </div>
        <div class="links">
            <a href="#" class="login">about</a>
            <router-link to="/login" class="login" >login</router-link>
            <router-link to="/" class="login" >logout</router-link>
        </div>
  </div>
</template>

<script>

export default {
    components:{

    }
}
</script>

<style>
.nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #011627;
    justify-content: space-between;
    padding: 1%;
}
.logo-small{
    width: 6vw;
}
.logo{
    width: 20vw;
}
.links{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center
}
.login{
    text-decoration: none;
    color: #FFD35D;
    justify-self: right;
    font-weight: lighter;
    font-size: 2.5vw;
    padding: .5vw;
}
</style>