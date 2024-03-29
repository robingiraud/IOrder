import axios from 'axios'

const state = {
    token: localStorage.getItem('userToken') || '',
    status: '',
    user: {}
}

const getters = {
    userToken: state => state.token,
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user
}

const actions = {
    AUTH_REQUEST: ({commit, dispatch}, user) => {
        commit('AUTH_REQUEST')
        return axios.post('/api/auth/login', {
            email: user.email,
            password: user.password
        }).then(response => {
            const token = response.data.access_token
            localStorage.setItem('userToken', token)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            commit('AUTH_SUCCESS', token)
            dispatch('USER_REQUEST')
        }).catch(err => {
            commit('AUTH_ERROR', err)
            localStorage.removeItem('userToken')
        })
    },
    AUTH_REGISTER: ({commit}, user) => {
        commit('AUTH_REQUEST')
        return axios.post('/api/auth/register', {
            name: user.name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirm
        }).then(response => {
            const token = response.data.access_token
            localStorage.setItem('userToken', token)
            const user = response.data.user
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            commit('AUTH_SUCCESS', token)
            commit('USER_SUCCESS', user)
        }).catch(err => {
            commit('AUTH_ERROR', err)
            localStorage.removeItem('userToken')
        })
    },
    AUTH_LOGOUT: ({commit}) => {
        return axios.get('/api/auth/logout').then(() => {
            commit('AUTH_LOGOUT')
        }).finally(() => {
            localStorage.removeItem('userToken')
        })
    },
    USER_REQUEST: ({commit}) => {
        return axios.get('/api/auth/user').then(response => {
            commit('USER_SUCCESS', response.data)
        }).catch(() => {
            localStorage.removeItem('userToken')
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
