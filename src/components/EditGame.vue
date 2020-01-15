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
        <div class='div-submit'>
            <input class='submit' type="submit" />
        </div>      
    </form>
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
            this.$store.dispatch('createGame', {
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

</style>