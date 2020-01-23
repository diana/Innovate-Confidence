<template>
  <div class="wrap-contact100">
      <form @submit.prevent="onSubmit" class="contact100-form validate-form">
          <span class="contact100-form-title">
            Create Game
          </span>
          <label class="label-input100">Title</label>
          <div class="wrap-input100 validate-input">
            <input
                type="text"
                label="title"
                name="title"
                id="title"
                v-model="title" 
                required
                class="input100"
            />            
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
                placeholder="Please enter information about your game here..."
            />
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
      <router-link :to="{name: 'userdashboard', params: { id: user.id }}" class="router-button">To User Dashboard</router-link>
    </div>

  </div>
</template>

<script>
import{ mapState} from 'vuex'

export default {
    name: 'CreateGame',
    props: ['games'],
    data(){
        return{
            user_id: this.$store.state.auth.userId,
            title: '',
            intro: '',
            video: ''
        }
    },
  computed: mapState({
    user: state => state.auth.user,
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
.wrap-contact100 {
    width: 790px;
    background-color: #011627;
    border-radius: 3px;
    padding: 55px 95px 68px 95px;
    margin: 55px;
    opacity: 0.85;
}
.contact100-form {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.contact100-form-title {
    width: 100%;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 56px;
    color: #011627;
    line-height: 1.2;
    text-align: center;
    padding: 20px;
    border-radius: 3px;
    margin-bottom: 20px;
    margin-right: 0;
    background-color: #8BD3DE;
}
.label-input100 {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #8BD3DE;
    line-height: 1.5;
    width: 100%;
    padding-bottom: 11px;
}
.wrap-input100 {
    width: 100%;
    position: relative;
    border-radius: 3px;
    margin-bottom: 34px;
}
.validate-input {
    position: relative;
}
input.input100 {
    height: 55px;
}
.input100 {
    display: block;
    width: 100%;
    background: #FDFFFC;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #011627;
}
.wrap-input100 {
    width: 100%;
    position: relative;
    border-radius: 3px;
    margin-bottom: 34px;
}
textarea.input100 {
    min-height: 162px;
    padding-top: 19px;
    padding-bottom: 15px;
}
</style>