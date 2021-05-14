//import axios from 'axios'

const state = {
    products: []
}

const getters = {
    products: state => state.products
}

const actions = {
    fetchProducts ({ commit }, companyId) {
        this.axios.get(`/api/products/${companyId}`).then((response) => {
            commit('SET_PRODUCTS', response.data)
        });
    }
}

const mutations = {
    SET_PRODUCTS (state, payload) {
        state.products = payload;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
