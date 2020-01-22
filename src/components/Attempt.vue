<template>
<div class='container-fluid page-body-wrapper'>
    <div class="main-panel">
      <div class="content-wrapper">
        <section class="dashboard">
          <div class="row">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title mb-4">{{attempt.username}} for {{game.title}}</h3>
                  <div class="table-responsive">
                    <table class="table center-aligned-table"  >
                      <tr class='games'>
                        <th>Answer</th>
                        <th>Question</th>
                        <th></th>
                      </tr>
                    <tbody>
                      <tr v-for="answer in answers" :key="answer.id">
                        <td>
                            <p>{{answer.answer}}</p>
                        </td> 
                        <td>
                          <button @click="viewQuestion(answer)" class="submit">View Question</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <router-link to="/attempts" class="submit" >
                    Back To All Attempts
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
    name: 'attempt',
    computed: mapState({
        game: state => state.auth.game,
        attempt: state => state.auth.attempt,
        answers: state => state.auth.answers
    }),
    methods:{
        viewQuestion(answer){
            this.$store.dispatch('viewQuestion', answer)
        }
    }
}
</script>

<style scoped>
    .answer{
        font-size: 18pt;
    }
</style>