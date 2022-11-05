import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import Element from 'element-plus'
import MqttClient from "@/mqtt/MqttClient";

MqttClient.init()
MqttClient.subscribe()
MqttClient.on('receive_percent', msg => {
    store.commit('setPercent',msg)
})
createApp(App).use(store).use(Element).mount('#app')

