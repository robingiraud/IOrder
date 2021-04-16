<template>
  <div>
    <form class="register" @submit.prevent="register">
      <h1>Créer un compte</h1>
      <div style="display: flex; flex-direction: column">
        <input style="font-size: 1em; margin-top: .6rem" id="email" required v-model="email" type="email" placeholder="Email"/>
        <input style="font-size: 1em; margin-top: .6rem" id="password" required v-model="password" type="password" placeholder="Mot de passe"/>
      </div>
      <button style="margin-top: .6rem" type="submit">Créer un compte</button>
      <div style="font-size: .6em; margin-top: .6rem">Vous êtes déjà inscrit ? <u @click="$router.push('/login')">Connectez-vous</u></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register.vue",
  data () {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    register: function () {
      // const { email, password } = this
      // this.$store.dispatch('auth/AUTH_REQUEST', { email, password }).then(() => {
        // if (this.authStatus !== 'error') {
          // this.$router.push('/')
        // }
      // })
    }
  }
}
</script>

<style scoped>

</style>
