<template>
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
                        <th>Video</th>
                      </tr>
                        <tbody>
                      <tr>
                        <td>{{game.intro}}</td>
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
                      </tr>
                     </tbody>
                    </table>
                    <router-link to="/userdashboard" class="submit" >
                    Back To Dashboard
                    </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'gamedashboard',
  computed: mapState({
    game: state => state.auth.game
  }),
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
</style>