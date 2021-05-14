//import axios from 'axios'

const state = {
    isOpen: false,
    items: []
}

const getters = {
    cartItems: state => state.items
}

const actions = {
    addCartItem ({ commit }, cartItem) {
        commit('ADD_CART_ITEMS', cartItem)
    },
    removeCartItem ({ commit }, itemId) {
        commit('REMOVE_CART_ITEMS', itemId)
    },
    removeAllCartItems ({ commit }) {
        commit('EMPTY_CART')
    }
}

const mutations = {
    ADD_CART_ITEMS (state, payload) {
        state.items.push(payload)
    },
    REMOVE_CART_ITEMS (state, itemId) {
        state.items.splice(state.items.findIndex(item => itemId === item.id))
    },
    EMPTY_CART (state) {
        state.items = []
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
