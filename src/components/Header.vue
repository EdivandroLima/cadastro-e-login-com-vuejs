<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand text-truncate">
                    <img src="../assets/logo.png" alt="Logo" width="30" height="30" class="mr-1">

                    <span v-if="isLogged" key="userLogged">
                        {{getUser.name}}
                    </span>
                    <span v-else key="userNotLogged">
                        {{ this.$store.state.appName }}
                    </span>

                </a>
                <button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div id="my-nav" class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item pl-md-2">
                            <router-link :to="{name: 'home'}" class="nav-link text-white">
                                Página inicial
                            </router-link>
                        </li>

                        <div v-if="isLogged" key="isLogged">
                            <li class="nav-item pl-md-2">
                                <a class="btn btn-danger" href="/" @click.prevent="logOut">
                                    Logout
                                </a>
                            </li>
                        </div>

                        <div v-else key='notLogged'>
                            <li class="nav-item pl-md-2">
                                <a class="nav-link text-white" href="https://github.com/EdivandroLima" target="_blank">
                                    <i class="fab fa-github"></i> Edivandro LIma
                                </a>
                            </li>
                        </div>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        computed: mapGetters(['isLogged', 'getUser']),
        methods: {
            logOut() {
                document.cookie = "auth=0";
                document.cookie = "user_email=0";
                location.href = "/"
            }
        },
    }
</script>

<style scoped>
    .navbar .nav-link:hover {
        opacity: .8
    }

    @media (max-width: 575px) {
        .navbar-brand {
            max-width: 220px
        }
    }
</style>