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

            // the table renders undefined if we pass it a javascript date so we must build a string for pretty print
            const currDate = payload.form.date_of_birth.getDate()
            const currMonth = payload.form.date_of_birth.getMonth() + 1 // Months are zero based
            const currYear = payload.form.date_of_birth.getFullYear()
            state.form.date_of_birth = currDate + '-' + currMonth + '-' + currYear
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
