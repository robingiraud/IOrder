<template>
  <div id="scan-page" :class="{'open': isScanPageOpen}">
    <header @click="$store.dispatch('closeScanPage')">
      <i class="bx bx-chevron-left" style="font-size: 2.5em" />
    </header>
    <section class="scan-content">
      <QrcodeStream @decode="onDecode" />
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import { QrcodeStream } from 'vue-qrcode-reader'
export default {
  name: 'Cart',
  components: {
    QrcodeStream
  },
  computed: {
    ...mapGetters(['isCartPageOpen', 'isScanPageOpen',])
  },
  methods: {
    onDecode (decodedString) {
      // this.title = JSON.parse(decodedString)
      setTimeout(() => {
        this.$store.dispatch('closeScanPage')
        this.$store.dispatch('setActiveStore', JSON.parse(decodedString))
        this.$router.push({ path: 'store' })
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
#scan-page {
  position: fixed;
  top: 0;
  right: -100vw;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.09);
  transition: right .3s;
  &.open {
    right: 0;
  }

  header {
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  .scan-content {
    height: calc(100% - 72px);
    overflow: scroll;
  }
}
</style>