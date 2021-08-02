import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        appName: 'Cadastro e Login com Vue.js',
        hashPass: '5&ODLbS%dcbZUVsMiSjWvk!f9#3OW@',
    },
    getters: {
        isLogged() {
            let isLogged = document.cookie.indexOf('auth=1');
            if (isLogged === -1) {
                return false
            } else {
                return true
            }
        },
        getUser() {
            let email = null;
            let name = 'user_email' + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    email = c.substring(name.length, c.length);
                }
            }
            let user = localStorage.getItem(email)
            return JSON.parse(user)
        }
    },
})