<template>
  <div id="cart" :class="{'open': isCartOpen}">
    TOTO
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
  bottom: -50vh;
  z-index: 2;
  width: 100%;
  height: 50vh;
  background-color: red;
  transition: all 3s;
  &.open {
    transform: translateY(-50vh);
  }
}
</style>