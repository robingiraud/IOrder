<template>
  <div>
    Mon profil
    <button @click="logout">Déconnexion</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout: function () {
      this.$store.dispatch('auth/AUTH_LOGOUT').then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>
