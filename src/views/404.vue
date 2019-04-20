<template lang="pug">

main.page
    .header
    v-page-grid
    .page__inner 
        section.section.intro
            .section__content.intro__content
                ul.grid
                    div.intro__img
                            div.intro__img__inner
                    div.intro__text
                        h1 Lost ?
                        p Maybe the page you are looking for does not exist anymore or maybe it has moved. Please 
                            em check the homepage 
                            |to see if you can find what you are looking for!
                        div.intro__actions
                            div.flex-h.a
                                router-link(to="/").button.auto 
                                    svg(xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left")
                                        polyline(points="15 18 9 12 15 6") 
                                    span Back home
        .mobile-footer
                       
                               
</template>

<script>
import '@/compiled-icons'

export default {}
</script>

<style lang="scss" scoped>
em{
    @include text-medium();
    font-weight: 800;
    font-style: initial;
    color: $color-accent;
}   
</style>