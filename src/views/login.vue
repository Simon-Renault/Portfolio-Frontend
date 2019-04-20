<template lang="pug">
div.page--wrapper
   
            
    main.page
        .page__grid--layer
            .page__grid--layer__grid
                span
                span
                span

        .page__inner
            section.login-section(v-if="!is_admin")
                h2 Enter you login here
                v-input(:dark="false" 
                        id="log11" 
                        label="Login"
                        v-model="login")

                v-input(:dark="false" 
                        type="password"
                        id="ps11" 
                        label="Password"
                        v-model="password")
                button( @click="submit") 
                    span Login
            section.login-section(v-if="is_admin")
                button( @click="logout") 
                    span Log out
                
                

        section.editor

   
</template>

<script>
import axios from "axios";
import {mapGetters, mapState, mapMutations} from 'vuex';

export default {
    data(){
        return{
            login : '',
            password :  '',
        }
    },
    computed : {
        ...mapState({
            is_admin : state =>  state.store_global.is_admin
        }),
    },
    methods: {
        ...mapMutations([
            "admin",
        ]),
        submit(){

            axios.post('https://api.simon-renault.com/auth/login', {
                email: this.login,
                password: this.password
            })
            .then( (res) => {
                if(res.data.token){
                    localStorage.setItem('token',res.data.token)
                    this.admin(true)
                    this.$router.push({
                        path: '/'
                    })
                }
            })
        },
        logout(){
            localStorage.removeItem('token');
            this.admin(false)
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>

<style lang="scss" >

</style>