<template>
  <div class="wrap-contact100">
      <form @submit.prevent="onSubmit" class="contact100-form validate-form">
          <span class="contact100-form-title">
            Edit Game
          </span>
          <label class="label-input100">Title</label>
          <div class="wrap-input100 validate-input">
            <input
                type="text"
                label="title"
                name="title"
                v-model="title" 
                required
                class="input100"
            >
                    
          </div>

          <label class="label-input100">Intro</label>
          <div class="wrap-input100 validate-input alert-validate">
            <textarea 
                label="intro"
                name="intro"
                id="intro"
                v-model="intro" 
                required
                class="input100"
            >
            </textarea>
          </div>
          <label class="label-input100">Embedded Video Link</label>
          <div class="wrap-input100 validate-input">
            <input 
                name="video"
                id="video"
                v-model="video" 
                class="input100"
            />
          </div>
        <div class='edit-submit'>
            <input class='submit' type="submit" />
        </div>      
    </form>
    <div class="router-div">
      <router-link to="/gamedashboard" class="router-button">To Game Dashboard</router-link>
      <router-link to="/userdashboard" class="router-button">To User Dashboard</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
    return{
        id: this.$store.state.auth.game.id,
        user_id: this.$store.state.auth.userId,
        title: this.$store.state.auth.game.title,
        intro: this.$store.state.auth.game.intro,
        video: this.$store.state.auth.game.video
    }
    },
  name: 'editgame',
  computed: mapState({
    game: state => state.auth.game
  }),
      methods:{
        onSubmit(){
            this.$store.dispatch('editGame', {
                id: this.id,
                user_id: this.user_id,
                title: this.title,
                intro: this.intro,
                video: this.video
            })
        },
    }

}
</script>

<style>
.edit-submit{
  align-content: center;
  justify-content: center;
  display: flex;
  width: 100%;
}
.router-div{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.router-button{
    width: fit-content;
    align-self: center;
    background-color: #D0EDF1;
    font-size: 20px;
    padding: 1px 7px 2px;
    text-decoration: none;
    color: #011627;
    border-radius: 3px;
}
</style>