<template>
  <div class='container-fluid page-body-wrapper'>
    <div class="main-panel">
      <div class="content-wrapper">
        <section class="dashboard">
          <div class="row">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title mb-4">{{game.title}}</h3>
                  <div class="table-responsive">
                    <table class="table center-aligned-table">
                      <tr class='games'>
                        <th>About Game</th>
                        <th>Scenarios</th>
                        <th>Questions</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    <tbody>
                      <tr>
                        <td>
                          <div class=" game-intro">
                            {{game.intro}}
                          </div>
                        </td> 
                        <td>
                          <h2>{{scenarios.length}}</h2>
                        </td>
                        <td>
                          <h2>{{questions.length}}</h2>
                        </td>
                        <td>
                          <iframe 
                            id="ytplayer" 
                            type="text/html" 
                            width="640vw" 
                            height="360vw"
                            background-color="#011627"
                            :src="game.video"
                            frameborder="0">
                          </iframe>
                        </td>
                        <td>
                          <router-link to="/viewgame" class="ok submit">Game</router-link>
                        </td>
                        <td>
                          <router-link to="/editgame" class="ok submit">Edit</router-link>
                        </td>
                        <td>
                          <button @click="deleteGame(game)" class="submit delete">Delete</button>
                          <p class="warning">**Delete** cannot be undone</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <router-link to="/userdashboard" class="submit" >
                    Back To User Dashboard
                  </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'gamedashboard',

  computed: mapState({
    game: state => state.auth.game,
    scenarios: state => state.auth.scenarios,
    questions: state => state.auth.questions
  }),
  methods:{
    editGame(game){
      this.$store.dispatch('setEditGame', game)
    },
    deleteGame(game){
      this.$store.dispatch('deleteGame', game)
    },
  }
}
</script>

<style>
.info{
    background-color: #009FB7;
    margin: 1vw;
    margin-top: 0
}
.intro{
    margin: 1vw;
    font-family: 'Roboto', sans-serif;
    font-size: 3vh;
    color: #FFD35D;
    background-color: #011627;
}
iframe{
    margin-bottom: 2vw;
    background-color: #011627;
}
.ok {
    -webkit-appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: buttontext;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: buttonface;
    box-sizing: border-box;
    margin: 0em;
    font: 400 11px system-ui;
    padding: 1px 7px 2px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
    border-image: initial;
    width: fit-content;
    align-self: center;
    background-color: #8BD3DE;
    font-size: 20px;
    padding: 1px 7px 2px;
    text-decoration: none;
    color: #011627;
    border-radius: 3px;
}
.game-intro{
  word-wrap: break-word;
  overflow: scroll;
  height: 360px;
}
h2{
  text-align: center
}
.delete:hover ~ .warning{
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #011627;
  background-color: #FE4A49;
  border-radius: 3px;
  padding: 2px 7px 2px;
  margin-top: 25px;
  width: 73px;
  text-align: center;
}
.warning{
  display: none;
}
</style>