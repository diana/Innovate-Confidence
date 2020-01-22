<template>
    <div>
    <div v-for="attempt in attempts" :key="attempt.id">
        <p>
            {{attempt.username}},
            {{attempt.first_name}},
            {{attempt.last_name}}
        </p>
    </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'attempts',
    computed: mapState({
        user: state => state.auth.user,
        game: state => state.auth.game,
        attempts: state => state.auth.attempts
    })
}
</script>

<style>

</style>