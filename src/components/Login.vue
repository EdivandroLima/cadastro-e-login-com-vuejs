<template>
    <section>
        <div class="row">
            <div class="col-12 col-md-8 mx-auto card bg-light">
                <div class="row py-3 align-items-center py-5">
                    <div class="col-12 col-md-6">
                        <h1 class="h4 font-weight-bold">Fazer Login</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero minima culpa voluptatem
                            quisquam iure iusto harum incidunt consequatur? Deserunt unde quas placeat labore nulla
                            quisquam velit id commodi amet tenetur.
                        </p>
                    </div>
                    <div class="col-12 col-md-6">
                        <form action="#" @submit.prevent="auth">
                            <div class="alert alert-danger text-center" v-show="errorLogin">
                                E-mail ou senha não é válido
                            </div>
                            <div class="form-group">
                                <label for="login-email" class="sr-only">E-mail</label>
                                <input id="login-email" class="form-control" type="text" v-model="email" name="email"
                                    placeholder="E-mail" required>
                            </div>
                            <div class="form-group">
                                <label for="login-pass" class="sr-only">Senha</label>
                                <input id="login-pass" class="form-control" type="password" v-model="pass" name="pass"
                                    placeholder="Senha" required>
                            </div>

                            <div class="form-check mb-3">
                                <input id="login-remember" class="form-check-input" type="checkbox" name="" value="true"
                                    @change="remember= !remember">
                                <label for="login-remember" class="form-check-label">Lembrar-me</label>
                            </div>

                            <div class="">
                                <button type="submit" class="btn btn-primary">
                                    Entrar
                                    <i class="fas fa-arrow-circle-right ml-1 fa-sm"></i>
                                </button>
                                <router-link :to="{ name: 'register' }" class="btn-link btn">
                                    Criar Conta
                                </router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                errorLogin: false,
                email: '',
                pass: '',
                remember: false
            }
        },
        methods: {
            teste() {
                console.log(this.remember)
            },
            auth() {
                let user = localStorage.getItem(this.email)
                user = JSON.parse(user)

                if (user) {
                    let passEncrypted = user.pass
                    let pass = this.CryptoJS.AES.decrypt(
                        passEncrypted, this.$store.state.hashPass).toString(this.CryptoJS.enc.Utf8)

                    if (this.pass === pass) {
                        this.errorLogin = false

                        if (this.remember) {
                            const d = new Date();
                            const days = 100
                            d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
                            let expires = "expires=" + d.toUTCString();
                            document.cookie = "auth=1;" + expires + ";path=/";
                            document.cookie = "user_email=" + user.email + ";" + expires + ";path=/";
                        } else {
                            document.cookie = "auth=1;"
                            document.cookie = "user_email=" + user.email + ";path=/";
                        }
                        this.$router.push('/dashboard')
                        this.$router.go()
                        return;
                    }
                }
                this.errorLogin = true
            }
        },
        metaInfo: {
            title: 'Fazer Login'
        }
    }
</script>