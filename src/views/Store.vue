<template>
  <div class="about">
    <div v-if="activeStore === null">
      <i class="bx bxs-info-circle" style="font-size: 3em" />
      <h3>Oupsss.. aucun établissement scanné</h3>
      <div class="button" @click="$store.dispatch('openScanPage')"><i class="bx bx-search-alt" /> Démarrer le scan</div>
    </div>
    <div v-else>
      <h5>
        <img src="../../public/img/illustrations/pin.svg" alt="Pin icon">
        Bienvenue chez...
      </h5>
      <h4>{{ activeStore.name }}</h4>
      <ul class="categories" v-for="(category, index) in activeStore.categories"  :key="index">
        <li
            @click="selectedCategoryId = (category.id !== selectedCategoryId ? category.id : null)"
            class="category"
            :class="{'active': selectedCategoryId === category.id}">
          {{ category.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['activeStore'])
  },
  data () {
    return {
      selectedCategoryId: null
    }
  }
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

.categories {
  text-align: left;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: scroll;
  .category {
    white-space: nowrap;
    padding: .5rem .8rem;
    border-radius: 100px;
    margin-right: 1em;
    font-size: .7em;
    background-color: #F2F2F2;
    color: #CFCFCF;
    &.active {
      background-color: #E6F1FF;
      color: #84BCFF;
    }
  }
}
</style>
