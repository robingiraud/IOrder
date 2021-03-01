<template>
  <div class="about">
    <div v-if="activeStore === null">
      <i class="bx bxs-info-circle" style="font-size: 3em" />
      <h3>Oupsss.. aucun établissement scanné</h3>
      <div class="button" @click="$store.dispatch('openScanPage')"><i class="bx bx-search-alt" /> Démarrer le scan</div>
    </div>
    <div v-else>
      <h3>Bienvenue dans l'établissement</h3>
      <h1>"{{ activeStore.name }}"</h1>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['activeStore'])
  },
}
</script>

<style lang="scss" scoped>
.button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    margin-right: 1.5rem;
  }
}
</style>
