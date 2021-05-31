//import axios from 'axios'

const state = {
    isOpen: false,
    items: [],
    render: true,
}

const getters = {
    cartItems: state => state.items,
    totalAmount: state => state.items.map(i => i.price).reduce(function (prev, cur) {
        return parseFloat(prev) + parseFloat(cur)
    }, 0),
    nbItems: state => state.items.length,
    render: state => state.render
}

const actions = {
    addCartItem ({ commit }, cartItem) {
        if (state.items.findIndex(i => i.id === cartItem.id) > -1) {
            commit('INCREMENT_QTY', cartItem.id)
        } else {
            commit('ADD_CART_ITEMS', cartItem)
        }
        commit('RERENDER')
    },
    incQty ({ commit }, itemId) {
        commit ('INCREMENT_QTY', itemId)
        commit('RERENDER')
    },
    decQty ({ commit }, itemId) {
        commit ('DECREMENT_QTY', itemId)
        commit('RERENDER')
    },
    removeCartItem ({ commit }, itemId) {
        commit('REMOVE_CART_ITEMS', itemId)
        commit('RERENDER')
    },
    removeAllCartItems ({ commit }) {
        commit('EMPTY_CART')
        commit('RERENDER')
    }
}

const mutations = {
    ADD_CART_ITEMS (state, payload) {
        payload.qty = 1
        state.items.push(payload)
    },
    INCREMENT_QTY (state, itemId) {
        state.items.find(i => i.id === itemId).qty++
    },
    DECREMENT_QTY (state, itemId) {
        state.items.find(i => i.id === itemId).qty--
    },
    REMOVE_CART_ITEMS (state, itemId) {
        state.items.splice(state.items.findIndex(item => itemId === item.id), 1)
    },
    EMPTY_CART (state) {
        state.items = []
    },
    RERENDER (state) {
        state.render = false
        state.render = true
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
