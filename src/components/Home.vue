<template>
    <section>
        <div class="row">
            <div class="col-12 col-md-8 mx-auto card bg-light">
                <div class="row py-3 align-items-center py-5">
                    <div class="col-12 col-md-6">
                        <h1 class="h4 font-weight-bold">{{ this.$store.state.appName }}</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero minima culpa voluptatem
                            quisquam iure iusto harum incidunt consequatur? Deserunt unde quas placeat labore nulla
                            quisquam velit id commodi amet tenetur.
                        </p>
                    </div>
                    <div class="col-12 col-md-6">

                        <div v-if="isLogged" key="isLoggedCard">
                            <router-link :to="{ name: 'dashboard' }" class="btn btn-outline-success btn-lg btn-block">
                                <i class="fas fa-tachometer-alt mr-2"></i> <strong>Dashboard</strong>
                            </router-link>
                        </div>
                        <div v-else key='notLoggedCard'>
                            <router-link :to="{ name: 'login' }" class="btn btn-outline-primary btn-block mb-3 py-2">
                                <i class="fas fa-sm fa-user mr-2"></i>
                                <strong>Fazer Login</strong>
                            </router-link>
                            <router-link :to="{ name: 'register' }" class="btn btn-outline-danger btn-block py-2">
                                <i class="fas fa-sm fa-user-plus mr-2"></i>
                                <strong>Criar Conta</strong>
                            </router-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        computed: mapGetters(['isLogged']),
        metaInfo() {
            return {
                title: this.$store.state.appName
            }
        }
    }
</script>