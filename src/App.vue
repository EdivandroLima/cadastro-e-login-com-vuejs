<template>
    <div id="app">
        <Header />
        <div class="container py-4 mt-4">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    export default {
        name: 'App',
        components: {
            Header,
        }
    }
</script>

<style>
    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .2s;
    }
</style>