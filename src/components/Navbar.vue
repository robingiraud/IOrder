<template>
  <div id="navbar">
    <router-link to="/"><i class="bx bx-menu bx-sm" /></router-link>
    <router-link to="/store"><i class="bx bx-store-alt bx-sm" /></router-link>
    <router-link to="/receipts"><i class="bx bx-receipt bx-sm" /></router-link>
    <router-link to="/profile"><i class="bx bxs-user-detail bx-sm" /></router-link>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated'
    })
  },
}
</script>

<style lang="scss" scoped>
#navbar {
  position: fixed;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  background-color: #f8f8f8;
  z-index: 10;

  a {
    font-weight: bold;
    color: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    height: 100%;
    text-decoration: none;
    &:hover {
      background-color: #fcfcfc;
    }

    &.router-link-exact-active {
      color: #84BCFF;
    }
  }
}
</style>
