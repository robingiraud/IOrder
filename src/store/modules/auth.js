import axios from 'axios'

const state = {
    token: localStorage.getItem('user-token') || '',
    status: '',
    user: {}
}

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
}

const actions = {
    AUTH_REQUEST: ({commit, dispatch}, user) => {
        commit('AUTH_REQUEST')
        return axios.post('http://192.168.0.159:8000/api/auth/login', {
            email: user.email,
            password: user.password
        }).then(response => {
            const token = response.data.access_token
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            commit('AUTH_SUCCESS', token)
            dispatch('USER_REQUEST')
        }).catch(err => {
            commit('AUTH_ERROR', err)
            localStorage.removeItem('user-token')
        })
    },
    AUTH_LOGOUT: ({commit}) => {
        return axios.get('http://192.168.0.159:8000/api/auth/logout').then(() => {
            commit('AUTH_LOGOUT')
            localStorage.removeItem('user-token')
        })
    },
    USER_REQUEST: ({commit}) => {
        return axios.get('http://192.168.0.159:8000/api/auth/user').then(response => {
            commit('USER_SUCCESS', response.data)
        })
    }
}

const mutations = {
    AUTH_REQUEST: (state) => {
        state.status = 'loading'
    },
    AUTH_SUCCESS: (state, token) => {
        state.status = 'success'
        state.token = token
    },
    AUTH_ERROR: (state) => {
        state.status = 'error'
    },
    AUTH_LOGOUT: (state) => {
        state.token = ''
        state.status = ''
        state.user = {}
    },
    USER_SUCCESS: (state, user) => {
        state.user = user
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}