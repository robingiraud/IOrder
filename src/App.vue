<template>
  <div id="app">
    <Navbar @click="$store.dispatch('closeCartPage')" />
    <div @click="$store.dispatch('closeCartPage')">
      <router-view class="router-view" />
    </div>
    <ScanPage />
    <div class="cart-btn" @click="openCart" v-if="isAuthenticated">
      <i class="bx bxs-basket">
        <div>3</div>
      </i>
    </div>
    <vue-bottom-sheet ref="cart" :rounded="true" effect="fx-default" max-height="70%" max-width="100%">
      <Cart />
    </vue-bottom-sheet>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Cart from "@/components/Cart.vue"
import ScanPage from "@/components/ScanPage.vue"
import 'boxicons'
import {mapGetters} from "vuex";

export default {
  components: {
    Navbar,
    Cart,
    ScanPage
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated'
    })
  },
  methods: {
    openCart() {
      this.$refs.cart.open();
    },
    closeCart() {
      this.$refs.cart.close();
    }
  },
  /* created: function () {
    this.axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(AUTH_LOGOUT)
          // Redirect to login
        }
        throw err;
      })
    })
  }, */
  mounted() {
    this.$store.dispatch('checkGeolocation')
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

.router-view {
  margin-top: 80px;
  padding: 25px;
}

.cart-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #84BCFF;
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
      color: #84BCFF;
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
