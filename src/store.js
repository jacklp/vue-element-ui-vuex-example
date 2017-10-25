import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        form: {
            first_name: '',
            last_name: '',
            mobile_number: '',
            email_address: '',
            age: '',
            date_of_birth: '',
            customer_query: ''
        }
    },
    mutations: {
        saveForm(state, payload) {
            state.form = { ...payload.form }
        }
    },
    actions: {
        saveForm({ commit }, form) {
            commit('saveForm', {
                form: form
            })
        }
    },
    getters: {
        getForm: state => {
            return state.form
        }
    }
})
