import {createStore} from 'vuex'

export default createStore({
    state: {
        percent: 0
    },
    getters: {},
    mutations: {
        setPercent(state, percent) {
            console.log('receive new percent: ' + percent)
            state.percent = percent
        }
    },
    actions: {},
    modules: {}
})
