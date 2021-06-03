<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Connectez-vous</h1>
      <div style="display: flex; flex-direction: column">
        <span v-if="authStatus === 'error'">Ces identifiants n'existent pas!</span>
        <b-input style="font-size: 1em; margin-top: .6rem" id="email" required v-model="email" type="email" placeholder="Email"/>
        <b-input style="font-size: 1em; margin-top: .6rem" id="password" required v-model="password" type="password" placeholder="Mot de passe"/>
      </div>
      <b-button :loading="loading" style="margin-top: .6rem" type="submit" @click="login" rounded label="Connexion" />
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
      loading: false,
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    login: function () {
      this.loading = true
      const { email, password } = this
      this.$store.dispatch('auth/AUTH_REQUEST', { email, password }).then(() => {
        if (this.authStatus !== 'error') {
          this.$router.push('/')
        }
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>

</style>
