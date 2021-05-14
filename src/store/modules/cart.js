//import axios from 'axios'

const state = {
    isOpen: false,
    products: []
}

const getters = {
}

const actions = {
    MY_ACTION: ({commit, dispatch}, data) => {
        console.log('MY ACTION', commit, dispatch, data)
    }
}

const mutations = {
    MY_MUTATION: (state) => {
        console.log(state)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
