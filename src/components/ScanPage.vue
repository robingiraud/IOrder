<template>
  <div id="scan-page" :class="{'open': isScanPageOpen}" v-if="isScanPageOpen">
    <header @click="$store.dispatch('closeScanPage'); error=''">
      <i class="bx bx-chevron-left" style="font-size: 2.5em" />
      <h4 style="color: lightcoral; margin: 0" v-if="error">{{ error }}</h4>
      <h4 style="margin: 0" v-else>Scannez un code QR</h4>
    </header>
    <section class="scan-content">
      <QrcodeStream @decode="onDecode" />
    </section>
  </div>
</template>

<script>
import axios from 'axios';
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
  data () {
    return {
      error: ''
    }
  },
  methods: {
    onDecode (decodedString) {
      console.log(decodedString)
      axios.get( 'https://iorder-api.herokuapp.com/api/companies/' + JSON.parse(decodedString).id)
          .then(response => {
            if (!response.data) this.error = "Cet établissement n'éxiste pas !";
            else {
              this.$store.dispatch('setActiveStore', response.data)
              this.$store.dispatch('closeScanPage')
              if (this.$router.currentRoute !== 'store') {
                this.$router.push({ path: '/store' })
              }
            }
            console.log(this.$router.currentRoute)
          })
          .catch(e => console.error(e))
    }
  }
}
</script>

<style lang="scss" scoped>
#scan-page {
  position: fixed;
  top: 0;
  right: -100vw;
  z-index: 11;
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
