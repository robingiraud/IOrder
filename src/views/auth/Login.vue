<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Connectez-vous</h1>
      <div style="display: flex; flex-direction: column">
        <input style="margin-top: .6rem" id="emai" required v-model="email" type="email" placeholder="Email"/>
        <input style="margin-top: .6rem" id="password" required v-model="password" type="password" placeholder="Mot de passe"/>
      </div>
      <button style="margin-top: .6rem" type="submit">Connexion</button>
      <div style="font-size: .6em; margin-top: .6rem">Vous n'êtes pas encore inscrit ? <u>Créer un compte</u></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login.vue",
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const { email, password } = this
      this.$store.dispatch('auth/AUTH_REQUEST', { email, password }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>

</style>
