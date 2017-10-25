import Vue from 'vue'
import { Button, Input, Form, FormItem, Table, TableColumn, DatePicker, Col, Row } from 'element-ui'
import App from './App.vue'
import store from './store'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-default/index.css'

// configure language
locale.use(lang)

Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(DatePicker.name, DatePicker)



new Vue({ //eslint-disable-line
    el: '#app',
    render: h => h(App),
    store
})
