<template>
  <div>
    Mon profil
  </div>
</template>

<script>
export default {
  methods: {
    logout: function () {
      this.$store.dispatch('AUTH_LOGOUT')
          .then(() => {
            this.$router.push('/login')
          })
    }
  }
}
</script>
