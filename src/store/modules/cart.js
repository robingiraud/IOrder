//import axios from 'axios'

const state = {
    isOpen: false,
    items: []
}

const getters = {
    cartItems: state => state.items,
    totalAmount: state => state.items.map(i => i.price).reduce(function (prev, cur) {
        return parseFloat(prev) + parseFloat(cur)
    }, 0),
    nbItems: state => state.items.length
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
        state.items.splice(state.items.findIndex(item => itemId === item.id), 1)
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
