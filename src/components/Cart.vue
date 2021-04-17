<template>
  <div id="cart">
    <header @click="$store.dispatch('closeCartPage')">
      <h3 style="font-weight: normal">Mon panier (7)</h3>
    </header>
    <SwipeList :items="products" class="cart-content">
      <template v-slot="props">
        <div class="cart-item">
          <img class="img-container" src="../../public/img/burger.jpg" alt="Burger">
          <div class="product-content">
            <div class="product-title">
              <h4>{{ props.item.title }}</h4>
              <p class="product-price">8,99 €</p>
            </div>
            <div class="product-description">
              Graines de sésames, salade, tomates, oignons frits, steack haché 250g, cheddar, sauce burger
            </div>
          </div>
          <div class="product-qty">
            x2
          </div>
        </div>
      </template>
      <template v-slot:right>
        <div class="swipeout-action red" title="remove">
          <i class="bx bx-trash"></i>
        </div>
      </template>
    </SwipeList>

    <footer>
      Valider la commande
      <div class="dot" />
      <b>33.80 €</b>
    </footer>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import { SwipeList } from 'vue-swipe-actions';
export default {
  name: 'Cart',
  components: {
    SwipeList
  },
  computed: {
    ...mapGetters(['isCartPageOpen', 'isScanPageOpen',])
  },data() {
    return {
      enabled: true,
      products: [
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
        {title: "Some title"},
      ]
    };
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
#cart {
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
    z-index: 2;
    position: fixed;
    height: 50px;
    background-color: white;
    top: 30px;
  }

  .cart-content {
    margin-top: 50px;
    margin-bottom: 100px;
    .cart-item {
      margin: .5rem 1rem;
      background-color: #F8F8F8;
      display: flex;
      align-items: center;
      padding: .5rem .8rem;
      border-radius: 15px;

      .img-container {
        border-radius: 20px;
        margin-left: -20px;
        width: 90px;
        height: 90px;
        object-fit: cover;
        filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.2));

      }
      .product-content {
        padding: 0 1rem;
      }
      .product-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: .5rem;
        h4, p {
          margin: 0;
        }
        h4 {
          font-size: .8em;
        }
        .product-price {
          color: #84BCFF;
          font-weight: bold;
        }
      }
      .product-description {
        display: flex;
        text-align: left;
        font-weight: 100;
        font-size: .55em;
        color: darkgrey;
      }
    }
    .swipeout-action {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: lightcoral;
      color: white;
      font-size: 2em;
      margin: .6rem 0;
      margin-right: 1rem;
      border-radius: 6px;
      width: 70px;
    }
  }

  footer {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    height: 55px;
    background-color: #84BCFF;
    z-index: 3;
    bottom: 0;
    color: white;
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50px;
      margin: 0 1rem;
      background-color: #84BCFF;
    }
  }
}
</style>
