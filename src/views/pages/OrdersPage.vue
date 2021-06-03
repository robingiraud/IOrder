<template>
  <div>
    <h3>Mes dernières commandes</h3>
    <div v-for="(order, index) in orders" :key="index" class="order">
      <header>
        <h4>{{ order.company.name }}</h4>
        <span>le  {{ order.date.toLocaleString() }}</span>
      </header>
      <p class="order-number">Commande n°{{ order.id }}</p>
      <p class="order-total">{{ parseFloat(order.total).toFixed(2) }} €</p>
      <div class="order-status">
        <b-tag rounded size="is-small" :type="order.status_type">{{ order.status }}</b-tag>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      'orders': 'orders/orders',
    })
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
h3 {
  display: flex;
  font-size: 1.2em;
  font-weight: bold;
  text-align: left;
  align-items: center;
  margin-bottom: 1rem;
}

.order {
  h4 {
    display: flex;
    font-weight: bold;
    font-size: 1em;
  }
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: .8rem;
  border-radius: 15px;
  margin-bottom: .5rem;
  header {
    display: flex;
    justify-content: space-between;
    span {
      font-size: .8em;
    }
  }
  p {
    display: flex;
  }
  .order-number {
    font-size: .8em;
  }
  .order-total {
    font-weight: bold;
    font-size: 1.5em;
    margin: 1rem 0;
  }
  .order-status {
    display: flex;
    justify-content: flex-end;
    .tag {
      width: min-content;
    }
  }
}
</style>
