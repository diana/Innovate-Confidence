<template>
  <div class='container-fluid page-body-wrapper'>
    <!-- <section class="app-sidebar">
      <nav data-v-622d026e="" id="sidebar" class="sidebar sidebar-offcanvas">

      </nav>
    </section> -->
    <div class="main-panel">
      <div class="content-wrapper">
        <section class="dashboard">
          <div class="row">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title mb-4">User Dashboard</h3>
                  <div class="table-responsive">
                    <table class="table center-aligned-table">
                      <tr class='games'>
                        <th>Games</th>
                        <th>Select Game</th>
                        <th>Number of Players</th>
                        <th>Edit Game</th>
                      </tr>
                      <tbody>
                        <tr 
                          v-for="game in games"
                          :key="game.id"
                        >
                          <td>{{game.title}}</td>
                          <td>
                            <button @click="goToGame(game)" class='game-button'>
                              View Game
                            </button>
                          </td>
                          <td>7</td>
                          <td>
                            <button @click="editGame(game)" class='game-button'>Edit</button>
                          </td>
                        </tr>
                       </tbody>
                    </table>
                    </div>
                    <router-link class="submit" to="/creategame">Make New Game</router-link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- </div> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'userdashboard',
  computed: mapState({
    games: state => state.auth.games
  }),
  methods:{
    goToGame(game){
      this.$store.dispatch('getGame', game)
    },
    editGame(game){
      this.$store.dispatch('setEditGame', game)
    },
  }
}
</script>

<style>
.container-fluid {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 30px;
}
.page-body-wrapper {
    min-height: calc(100vh - 58px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding-left: 0;
    padding-right: 0;
    justify-content: center
}
.sidebar {
    min-height: calc(100vh - 58px);
    background: #fff;
    font-family: Poppins,sans-serif;
    padding: 0;
    width: 255px;
    z-index: 11;
    transition: width .25s ease,background .25s ease;
    -webkit-transition: width .25s ease,background .25s ease;
    -moz-transition: width .25s ease,background .25s ease;
    -ms-transition: width .25s ease,background .25s ease;
}
.sidebar {
    min-height: calc(100vh - 58px);
    background: #fff;
    font-family: Poppins,sans-serif;
    padding: 0;
    width: 255px;
    z-index: 11;
    transition: width .25s ease,background .25s ease;
    -webkit-transition: width .25s ease,background .25s ease;
    -moz-transition: width .25s ease,background .25s ease;
    -ms-transition: width .25s ease,background .25s ease;
}
.main-panel {
    -webkit-transition: width .25s ease,margin .25s ease;
    transition: width .25s ease,margin .25s ease;
    width: calc(100% - 255px);
    min-height: calc(100vh - 58px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.content-wrapper {
    background: #009FB7;
    padding: 1.5rem 1.7rem;
    width: 100%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    opacity: 80%;
    border-radius: 3px;
}
.row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-left: -10px;
}
.grid-margin, .purchace-popup>div {
    margin-bottom: 20px;
}
.col-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}
.card {
    border: 0;
    border-radius: 2px;
}
.card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #D0EDF1;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
}
.card .card-body {
    padding: 1.88rem 1.81rem;
}
.card-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
}
.card-title {
    margin-bottom: 1.125rem;
    text-transform: capitalize;
    margin-left: 0;
}
.mb-4, .my-4 {
    margin-bottom: 1.5rem!important;
}
.card-title {
    margin-bottom: .75rem;
}
.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
}
.table {
    margin-bottom: 0;
}
.table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
}
table {
    border-collapse: collapse;
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.games{
  list-style-type: none;
  width: 50%;
}

.game{
  color: #011627;
  background-color: #FFD35D;
  text-align: center;
  font-size: 3vw;
  opacity: 85%;
  margin: 1vw;
  border-radius: 3px;

}
.table td, .table th {
    vertical-align: middle;
    line-height: 1;
    white-space: pre-wrap;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
      color: #011627

}

tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
    border-top: 1px solid #D0D1CF;
    padding: .8375rem;
}
.table td, .table th {
  vertical-align: top;
  border-top: 1px solid #D0D1CF;
  padding: .8375rem;
  color: #011627;
  white-space: pre-wrap;
}
.table td, .table th {
    vertical-align: middle;
    line-height: 1;
}
table {
    border-collapse: collapse;
}
.table td {
    vertical-align: middle;
    font-size: .875rem;
    line-height: 1;
    white-space: pre-wrap;
}
.table td, .table th {
    padding: .8375rem;
    vertical-align: top;
    border-top: 1px solid #D0D1CF;
    text-align: left;
    white-space: pre-wrap;

}
*, :after, :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
td {
    display: table-cell;
    vertical-align: inherit;
    white-space: pre-wrap;
}
th{
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 900;
}
.game-button{
  background-color: #8BD3DE;
  font-family: 'Roboto', sans-serif;
  font-size: .8rem;
  color: #011627;
  border-radius: 3px;
}
</style>