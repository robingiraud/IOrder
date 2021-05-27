<template>
  <div class="about">
    <div v-if="activeStore === null">
      <i class="bx bxs-info-circle" style="font-size: 3em" />
      <h3>Oupsss.. aucun établissement scanné</h3>
      <div class="button" @click="$store.dispatch('openScanPage')"><i class="bx bx-search-alt" /> Démarrer le scan</div>
    </div>
    <div v-else>
      <h5>
        <img class="pin-icon" src="../../public/img/illustrations/pin.svg" alt="Pin icon">
        Bienvenue chez...
      </h5>
      <h4>{{ activeStore.name }}</h4>
      <ul class="categories">
        <li
            v-for="(category, index) in activeStore.categories"  :key="index"
            @click="selectedCategoryId = (category.id !== selectedCategoryId ? category.id : selectedCategoryId)"
            class="category"
            :class="{'active': selectedCategoryId === category.id}">
          {{ category.name }}
        </li>
      </ul>
      <h5 class="title">La carte</h5>
      <ul class="products">
        <li
            @click="$store.dispatch('cart/addCartItem', product)"
            class="product"
            v-for="(product, index) in products" :key="index"
            v-show="selectedCategoryId === product.category_id"
        >
          <img class="img-container" :src="'https://source.unsplash.com/1600x900/?' + product.keywords">
          <div class="product-content">
            <div class="product-title">
              <h4>{{ product.name }}</h4>
              <p class="product-price">{{ product.price }} €</p>
            </div>
            <div class="product-description">
              {{ product.description }}
            </div>
          </div>
          <div class="product-qty">
            x2
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  computed: {
    ...mapGetters(['activeStore'])
  },
  data () {
    return {
      selectedCategoryId: null,
      products: []
    }
  },
  methods: {
    fetchProducts () {
      if (this.activeStore) {
        axios.get('/api/products', {
          params: {
            company_id: this.activeStore.id
          }
        }).then(response => {
          this.products = response.data
        })
      }
    }
  },
  mounted() {
    this.fetchProducts()
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

h5, h4 {
  margin: 0;
  display: flex;
  text-align: left;
  align-items: center;
}

h5 {
  color: #CFCFCF;
  .pin-icon {
    height: 10px;
    margin-right: 7px;
  }
}
h4 {
  margin-bottom: .3rem;
}

.title {
  color: #2c3e50;
  margin: .7rem 0;
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

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;
}

.products {
  margin: 0;
  padding: 0;
}
.product {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  padding: .5rem .8rem;
  border-radius: 15px;
  margin-bottom: .5rem;

  .img-container {
    border-radius: 20px;
    margin-left: -20px;
    width: 90px;
    height: 90px;
    object-fit: cover;
    filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.2));

  }
  .product-content {
    width: 100%;
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
</style>
