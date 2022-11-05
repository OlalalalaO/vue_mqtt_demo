import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import Element from 'element-plus'

createApp(App).use(store).use(Element).mount('#app')
