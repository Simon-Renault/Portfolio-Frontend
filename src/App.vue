<template lang="pug">
.app#app
    router-link(to="/").sidebar
        .top

    div(:key="$route.params.id || Math.random()" ).page--wrapper
        router-view
       
    footer.footer
        .footer__content
        .footer__inner
     
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'

export default {
    data(){
        return {}
    },
    methods : {
        ...mapActions([
            'fetch_projects',
        ]),
        ...mapMutations([
            "admin"
        ]),
        ...mapState({
            is_admin : state =>  state.store_global.is_admin
        }),
    },
    mounted(){
        this.fetch_projects()
        localStorage.getItem('token')  ? this.admin(true): this.admin(false)
    }
}
</script>

<style lang="scss">
@import '@/scss/base.scss';




</style>
