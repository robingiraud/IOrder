<template>
  <div id="navbar">
    <router-link to="/"><i class="bx bx-menu bx-sm" /></router-link>
    <router-link to="/store"><i class="bx bx-store-alt bx-sm" /></router-link>
    <router-link to="/receipts"><i class="bx bx-receipt bx-sm" /></router-link>
    <router-link to="/scan"><i class="bx bx-search-alt bx-sm" /></router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
#navbar {
  display: flex;
  justify-content: space-between;
}
</style>