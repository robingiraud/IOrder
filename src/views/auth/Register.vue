<template>
  <div>
    <form class="register" @submit.prevent="register">
      <h1>Créer un compte</h1>
      <div style="display: flex; flex-direction: column">
        <b-input style="font-size: 1em; margin-top: .6rem" id="name" required v-model="name" type="text" placeholder="Nom"/>
        <b-input style="font-size: 1em; margin-top: .6rem" id="email" required v-model="email" type="email" placeholder="Email"/>
        <b-input style="font-size: 1em; margin-top: .6rem" id="password" required v-model="password" type="password" placeholder="Mot de passe"/>
        <b-input style="font-size: 1em; margin-top: .6rem" id="password_confirm" required v-model="password_confirm" type="password" placeholder="Confirmation mot de passe"/>
      </div>
      <b-button :loading="loading" style="margin-top: .6rem" type="submit" @click="register">Créer un compte</b-button>
      <div style="font-size: .6em; margin-top: .6rem">Vous êtes déjà inscrit ? <u @click="$router.push('/login')">Connectez-vous</u></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register.vue",
  data () {
    return {
      loading: false,
      name: '',
      email: '',
      password: '',
      password_confirm: '',
      error: '',
    }
  },
  methods: {
    register: function () {
      this.loading = true
      const { name, email, password, password_confirm } = this
      this.$store.dispatch('auth/AUTH_REGISTER', { name, email, password, password_confirm }).then(() => {
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
