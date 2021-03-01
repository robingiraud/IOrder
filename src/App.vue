<template>
  <div id="app">
    <div id="nav">
      <Navbar @click="$store.dispatch('closeCartPage')" />
    </div>
    <div @click="$store.dispatch('closeCartPage')">
      <router-view class="router-view" />
    </div>
    <Cart />
    <ScanPage />
    <div class="cart-btn" @click="$store.dispatch('openCartPage')">
      <i class="bx bxs-basket">
        <div>3</div>
      </i>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Cart from "@/components/Cart.vue"
import ScanPage from "@/components/ScanPage.vue"
import 'boxicons'

export default {
  components: {
    Navbar,
    Cart,
    ScanPage
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
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
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
      color: #479BFF;
    }
  }
}

.router-view {
  padding: 25px;
}

.cart-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #479BFF;
  width: 74px;
  height: 74px;
  box-shadow: 0 0 6px 4px rgba(132, 188, 255, 0.36);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 100px;
  cursor: pointer;
  .bx {
    position: relative;
    div {
      position: absolute;
      top: -5px;
      right: -5px;
      background-color: white;
      color: #479BFF;
      min-width: 20px;
      min-height: 20px;
      box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.2);
      font-weight: bold;
      font-size: .3em;
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
