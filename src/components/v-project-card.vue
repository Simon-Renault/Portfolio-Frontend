<template lang="pug">

li
    router-link.project-card( :to="{path: path}" itemprop="url" :class="{'disabled' : project.json.isPublished === 'false' }" )
        .project-card__content()
            div.coming-soon(v-if="project.json.isPublished === 'soon'") 
                span coming soon
            image-loader( :src="'https://simon-renault.com/images/small/'+project.url+'.jpg'" :alt="project.json.title + 'cover image'" ).project-card__img
               
            .project-card__infos
                div
                    h4 {{project.json.exerpt}}
                    h2(itemprop="name") {{project.json.title}}



</template>

<script>
import { mapState } from 'vuex';

export default {
    props : {
        project : {
            type : Object,
        },
        disabled : {
            default : false,
            required : false,
            type: Boolean
        }
    },
    computed: {
        ...mapState({
            is_admin : state =>  state.store_global.is_admin
        }),
        path(){
            if(!this.is_admin){
                return  this.project.json.isPublished === 'false'  || 
                        this.project.json.isPublished === 'soon'   ||
                        this.disabled === true  
                            ?  '' 
                            :  `/projects/${this.project.url}`
            }else{
                return  `/projects/${this.project.url}/edit`
            }
        },
    },
}
</script>

<style lang="scss" scoped>

a.button{
    height: 10rem;
    width: 10rem;
    margin: auto 0 0 auto;
    font-size: 6rem;
    position: absolute;
    top: 2rem;
    left: 2rem;
    z-index: 99;
}

li{
    list-style: none;
}

</style>