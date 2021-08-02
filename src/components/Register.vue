<template>
    <section>
        <div class="row">
            <div class="col-12 col-md-8 mx-auto card bg-light">
                <div class="row py-3 align-items-center py-5">
                    <div class="col-12 col-md-6">
                        <h1 class="h4 font-weight-bold">Criar Conta</h1>
                        <p>
                            Esse projeto é apenas para estudo e por isso os dados são salvos em armazenamento local e a
                            senha é criptografada utilizando o módulo <a
                                href="https://www.npmjs.com/package/vue-cryptojs" target="_blank">vue-cryptojs</a>
                        </p>
                    </div>
                    <div class="col-12 col-md-6">
                        <form action="#" method="post" @submit.prevent="submitForm">

                            <div class="alert alert-success text-center" v-show="registerSuccess">
                                Conta criada com sucesso
                            </div>
                            <div class="alert alert-danger text-center" v-show="emailExist">
                                E-mail já foi registrado
                            </div>

                            <div class="form-group">
                                <label for="my-input" class="sr-only">Nome</label>
                                <input id="my-input" :class="['form-control', errors.name ? 'is-invalid':'']"
                                    type="text" name="name" v-model="name" placeholder="Nome">
                                <div class="invalid-feedback">
                                    O nome deve ter pelo menos 3 caracteres
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="my-input" class="sr-only">E-mail</label>
                                <input id="my-input" :class="['form-control', errors.email ? 'is-invalid':'']"
                                    type="text" name="email" v-model="email" placeholder="E-mail">
                                <div class="invalid-feedback">
                                    E-mail inválido
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="my-input" class="sr-only">Senha</label>
                                <input id="my-input" :class="['form-control', errors.pass ? 'is-invalid':'']"
                                    type="password" name="pass" v-model="pass" placeholder="Senha">
                                <div class="invalid-feedback">
                                    A senha deve conter pelo menos 8 caracteres
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="my-input" class="sr-only">Repetir Senha</label>
                                <input id="my-input" :class="['form-control', errors.repeatPass ? 'is-invalid':'']"
                                    type="password" name="repeatPass" v-model="repeatPass" placeholder="Repetir Senha">
                                <div class="invalid-feedback">
                                    A senha que você repetiu não é a mesma
                                </div>
                            </div>

                            <div class="">
                                <button type="submit" class="btn btn-danger">
                                    Criar Conta
                                    <i class="fas fa-user-plus ml-1 fa-sm"></i>
                                </button>
                                <router-link :to="{ name: 'login' }" class="btn-link btn">Fazer Login</router-link>
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
                errors: {},
                emailExist: false,
                name: '',
                email: null,
                pass: '',
                repeatPass: null,
                registerSuccess: false
            }
        },
        metaInfo: {
            title: 'Criar Conta'
        },
        methods: {
            submitForm() {
                this.errors = {}
                if (localStorage.getItem(this.email) != null) {
                    this.emailExist = true;
                    return;
                } else {
                    this.emailExist = false;
                }
                if (this.name.length < 3) {
                    this.errors.name = true
                    return;
                }
                if (!this.validEmail(this.email)) {
                    this.errors.email = true
                    return;
                }
                if (this.pass.length < 8) {
                    this.errors.pass = true
                    return;
                }
                if (this.pass != this.repeatPass) {
                    this.errors.repeatPass = true
                    return;
                }

                let pass = this.CryptoJS.AES.encrypt(this.pass, this.$store.state.hashPass).toString()
                let data = JSON.stringify({
                    name: this.name,
                    email: this.email,
                    pass: pass
                })

                localStorage.setItem(this.email, data)
                this.registerSuccess = true
                this.name = ''
                this.email = ''
                this.pass = ''
                this.repeatPass = ''
            },
            validEmail(email) {
                var re = /\S+@\S+\.\S+/;
                return re.test(email);
            }
        }
    }
</script>