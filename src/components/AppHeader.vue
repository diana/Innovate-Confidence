<template>
  <div class="nav ">
      <div class="logo-div">
            <!-- <router-link to="/" class="active item">
                <img src="https://i.imgur.com/uHMskmT.png" class="logo-small"/>
            </router-link> -->
            <router-link to="/home" class="active item">
                <img src="https://i.imgur.com/zxaHE8Z.png" class="logo"/>
            </router-link>
        </div>
        <div class="links">
            <a href="#" class="login">about</a>
            <router-link to="/login" class="login" >login</router-link>
            <router-link to="/home" class="login" >logout</router-link>
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
    padding: .5%;
    opacity: 85%;
    width: 100%
}
.logo-small{
    width: 6vw;
}
.logo{
    width: 15%;
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
}
</style>