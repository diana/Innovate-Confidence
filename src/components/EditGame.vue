<template>
  <div class="wrap-contact100">
    <div class="edit-game">
      <span class="contact100-form-title">
        Edit Game
      </span>
      <button class="delete-button" @click="deleteGame(game)">Delete Game</button>
      <p class="delete-warning">deleting game cannot be undone</p>
    </div>
      <form @submit.prevent="onSubmit" class="contact100-form validate-form">
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
          <div class="scenarios-div">
            <label class="label-scenario">Number of Scenarios: {{scenarios.length}}</label>
            <router-link class='router-button'  to="/createscenarios">Create Scenarios</router-link>
            <router-link class='router-button'  to="/editscenarios">Edit Scenarios</router-link>
          </div>
          <div class="scenarios-div">
            <label class="label-scenario">Number of Questions: {{questions.length}}</label>
            <router-link to="/editscenarios" class="label-questions">
              To Create or Edit Questions Please First Select Scenario
            </router-link>
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
    game: state => state.auth.game,
    scenarios: state => state.auth.scenarios,
    questions: state => state.auth.questions,
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

    editGame(game){
      this.$store.dispatch('setEditGame', game)

    },
    deleteGame(game){
      this.$store.dispatch('deleteGame', game)
    }
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
    box-shadow: 0 9.5px 24px rgba(0, 0, 0, 0.3), 0 7.5px 16px rgba(0, 0, 0, 0.22);
    
}
.router-button:hover{
    box-shadow: 0 9.5px 24px #009FB7, 0 7.5px 16px rgba(0, 0, 0, 0.22);
    color: #D0EDF1;
    background-color: #011627;
    cursor: pointer;

}
.scenarios-div{
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 34px;
  align-items: center;
}
.label-scenario{
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #8BD3DE;
    line-height: 1.5;
}
.label-questions{
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #8BD3DE;
    line-height: 1.5;
    padding-bottom: 11px;
    background-color: #D0EDF1;
    padding: 1px 7px 2px;
    text-decoration: none;
    color: #011627;
    border-radius: 3px;
    align-self: center;
    box-shadow: 0 9.5px 24px rgba(0, 0, 0, 0.3), 0 7.5px 16px rgba(0, 0, 0, 0.22);
}
.label-questions:hover{
    box-shadow: 0 9.5px 24px #009FB7, 0 7.5px 16px rgba(0, 0, 0, 0.22);
    color: #D0EDF1;
    background-color: #011627;
}
.delete-button{
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    color: #8BD3DE;
    line-height: 1.5;
    padding-bottom: 11px;
    background-color: #D0EDF1;
    padding: 1px 7px 2px;
    text-decoration: none;
    color: #011627;
    border-radius: 3px;
    align-self: center;
    box-shadow: 0 9.5px 24px rgba(0, 0, 0, 0.3), 0 7.5px 16px rgba(0, 0, 0, 0.22);
    border: none;
    margin-bottom: 67px;
}
.delete-button:hover{
    box-shadow: 0 9.5px 24px #009FB7, 0 7.5px 16px rgba(0, 0, 0, 0.22);
    color: #D0EDF1;
    background-color: #011627;
    margin-bottom: 0;
}
.delete-button:hover ~ .delete-warning{
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #011627;
  background-color: #FE4A49;
  border-radius: 3px;
  padding: 1px 7px 2px;
}
.edit-game{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.delete-warning{
  display: none;
}
</style>