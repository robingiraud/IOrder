<template>
  <div id="cart" :class="{'open': isCartOpen}">
    <header @click="$emit('close')">
      <h3>Mon panier</h3>
      <i class="bx bx-caret-down-circle" />
    </header>
    <div class="total">
      <div>Total <b>33.80 €</b></div>
    </div>
    <section class="cart-content">
      <div class="cart-item"><h3>Item 1</h3></div>
      <div class="cart-item"><h3>Item 2</h3></div>
      <div class="cart-item"><h3>Item 3</h3></div>
      <div class="cart-item"><h3>Item 4</h3></div>
      <div class="cart-item"><h3>Item 5</h3></div>
      <div class="cart-item"><h3>Item 6</h3></div>
      <div class="cart-item"><h3>Item 7</h3></div>
      <div class="cart-item"><h3>Item 8</h3></div>
      <div class="cart-item"><h3>Item 9</h3></div>
      <div class="cart-item"><h3>Item 10</h3></div>
      <div class="cart-item"><h3>Item 11</h3></div>
      <div class="cart-item"><h3>Item 12</h3></div>
      <div class="cart-item"><h3>Item 13</h3></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    isCartOpen: Boolean
  }
}
</script>

<style lang="scss" scoped>
#cart {
  position: fixed;
  bottom: -70vh;
  z-index: 2;
  width: 100%;
  height: 70vh;
  background-color: white;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.09);
  transition: bottom .5s;
  &.open {
    bottom: 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 3rem .5rem 3rem;
  }

  .total {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    div {
      margin-right: 1.2rem;
    }
  }

  .cart-content {
    height: calc(100% - 80px);
    overflow: scroll;

    .cart-item {
      margin: .5rem 1rem;
      background-color: #F8F8F8;
      display: flex;
      align-items: center;
      padding: 0 1rem;
      border-radius: 15px;
      height: 80px;
    }
  }
}
</style>