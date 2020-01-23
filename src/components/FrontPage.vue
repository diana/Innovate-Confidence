<template>
    <div class="intro">
        <h3 class="intro-head">Welcome to Innovate Confidence</h3>
        <div class="intro-content">
            <p class="introduction">
                A platform to create and track training games for your 
                employees. Make learning fun again for everyone!
            </p>
            <section class="intro-section">
                <h4 class="testimonials">Testimonials:</h4>
                <p class="test">"Our employees complete trainings much faster because of this app."</p>
                <p class="test">"Easy to use and beautifully designed."</p>
                <p class="test">"Best training app I've used!!"</p>
            </section>
        </div>
        <router-link to="signup" class="signup">Sign Up Today!</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .intro{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 5vw;
        background-color: #009FB7;
        opacity: 0.85;
        border-radius: 3px;
        padding: 1vw;
        width: calc(100% - 255px)
    }
    .intro-head{
        font-family: "Roboto", sans-serif;
        font-size: 38pt;
        background-color: #8BD3DE;
        padding: .5vw;
        margin: 0;
        color: #FE4A49;
        margin: 1vw;
        border-radius: 3px;
        align-self: center;
        width: fit-content;
        
    }
    .intro-content{
        display: flex;
        justify-content: space-between;
        margin: 1vw;
        align-items: center;
        width: 85%
    }
    .introduction{
        font-size: 30pt;
        text-align: left;
        font-weight: bolder;
        color: #011627;
        background-color: #FFD35D;
        padding: 1vw;
        width: 40%;
        border-radius: 3px;

    }
    .intro-section{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        font-size: 20pt;
        text-align: left;
        font-weight: bolder;
        color: #011627;
        background-color: #FFD35D;
        padding: 1vw;
        width: 40%;
        align-items: flex-start;
        border-radius: 3px;
    }
    .testimonials{
        margin: 0;
        font-size: 30pt;
        font-weight: bolder;
        font-family: 'Roboto', sans-serif;
        text-decoration: underline;
        color: #15505A;
        border-radius: 3px;
    }
    .test{
        margin: .5vw;
        color: #011627;
        border-radius: 3px;
    }
    .signup{
        background-color: #FE4A49;
        width: fit-content;
        margin: 1vw;
        padding: 1vw;
        border-radius: 3px;
        text-decoration: none;
        font-size: 2vw;
        color: #FDFFFC;
        align-self: center;
    }
</style>