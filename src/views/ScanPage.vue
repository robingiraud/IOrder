<template>
  <div class="scanPage">
    <qrcode-stream @decode="onDecode"></qrcode-stream>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: ''
    }
  },
  methods: {
    onDecode (decodedString) {
      this.url = decodedString
    }
  }
}
</script>
