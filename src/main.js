import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store/store'
import VueMeta from 'vue-meta'
import VueCryptojs from 'vue-cryptojs'
import LoadScript from 'vue-plugin-load-script';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(VueMeta)
Vue.use(VueCryptojs)
Vue.use(LoadScript);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
