<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <router-view class="router-view" />
    <Cart v-if="isCartOpen" :isCartOpen="isCartOpen" />
    <div class="cart-btn"><i class="bx bx-cart" @click="isCartOpen = true" /></div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Cart from "@/components/Cart.vue"
import 'boxicons'
export default {
  components: {
    Navbar,
    Cart
  },
  computed: {
    // isCartOpen: function () {
      // return this.$store.getters.isOpen
    // }
  },
  data () {
    return {
      isCartOpen: false
    }
  }
}
</script>

<style lang="scss">
html {
  background-color: #000000;
  body {
    margin: 0;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F8F8F8;
  color: #2c3e50;
  height: 100vh;
  overflow: scroll;
}

#nav {
  padding: 30px;
  margin: 0 1rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #84BCFF;
    }
  }
}

.router-view {
  padding: 25px;
}

.cart-btn {
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  width: 50px;
  height: 50px;
  background-color: lightblue;
}
</style>
