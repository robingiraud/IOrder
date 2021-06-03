const state = {
    orders: [
        {
            id: 87654678,
            status: 'Terminée',
            status_type: 'is-info is-light',
            company: {
                id: "5",
                name: 'Le campus bar'
            },
            nbItems: 2,
            total: 14.00,
            date: new Date('05/11/2021, 18:35:56')
        }
    ]
}

const getters = {
    orders: state => state.orders
}

const actions = {
    fetchOrders ({ commit }, userId) {
        this.axios.get(`/api/orders/${userId}`).then((response) => {
            commit('SET_ORDERS', response.data)
        });
    },
    addOrder ({ commit }, order) {
        commit('ADD_ORDER', order)
    }
}

const mutations = {
    SET_ORDERS (state, payload) {
        state.orders = payload;
    },
    ADD_ORDER (state, payload)  {
        state.orders.push(payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
