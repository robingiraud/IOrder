<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Connectez-vous</h1>
      <div style="display: flex; flex-direction: column">
        <span v-if="authStatus === 'error'">Ces identifiants n'existent pas!</span>
        <input style="font-size: 1em; margin-top: .6rem" id="email" required v-model="email" type="email" placeholder="Email"/>
        <input style="font-size: 1em; margin-top: .6rem" id="password" required v-model="password" type="password" placeholder="Mot de passe"/>
      </div>
      <button style="margin-top: .6rem" type="submit">Connexion</button>
      <div style="font-size: .6em; margin-top: .6rem">Vous n'êtes pas encore inscrit ? <u @click="$router.push('/register')">Créer un compte</u></div>
    </form>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Login.vue",
  computed: {
    ...mapGetters({
      authStatus: 'auth/authStatus'
    })
  },
  data () {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    login: function () {
      const { email, password } = this
      this.$store.dispatch('auth/AUTH_REQUEST', { email, password }).then(() => {
        if (this.authStatus !== 'error') {
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
