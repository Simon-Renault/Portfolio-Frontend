<template lang="pug">
div.page--wrapper
   
    main.page
        .header
        v-page-grid
        .page__inner 
            section.section.intro
                .section__content.intro__content
                    div.grid

                        div.intro__img
                             div.intro__img__inner
                        div.intro__text(  itemtype="https://schema.org/CreativeWork" )
                            h1( itemprop="author") Simon Renault.
                            p(itemprop="text") Hello, I'm a 
                                em product designer
                                |  with a focus on user experience, interaction design and creative coding.
                            div.intro__actions
                                div.flex-h.a

                                    button.button.auto 
                                        span Resume
                                        icon.white( name="download" height="20" width="20" ) 
                                        div.inner-resume 
                                            a.inner-btn(href="/documents/CV-Simon-Renault–EN.pdf" aria-label="English cv") English
                                            a.inner-btn(href="/documents/CV-Simon-Renault–FR.pdf" aria-label="French cv" ) French
                                        
                                div.flex-h.b
                                    a.button( rel="noopener ,noreferrer" href="mailto:simon.renault.pro@gmail.com" aria-label="Email me")
                                        icon( name="mail" height="20" width="20" ) 
                                    a.button( rel="noopener ,noreferrer" href="https://dribbble.com/Simon-Renault" aria-label="Dribble" target="_blank")
                                        icon( name="dribble" height="20" width="20" ).db
                                    a.button( rel="noopener ,noreferrer" href="https://www.linkedin.com/in/simon-renault-pro/" aria-label="Linked In" target="_blank")
                                        icon( name="linkedin" height="20" width="20" ) 
                                    a.button( rel="noopener ,noreferrer" href="https://www.instagram.com/simon.renault/" aria-label="Instagram" target="_blank")
                                        icon( name="instagram" height="20" width="20" ) 
                                    a.button( rel="noopener ,noreferrer" href="https://github.com/Simon-Renault" aria-label="Github" target="_blank")
                                        icon( name="github" height="20" width="20" ) 
                                    
            section.section( v-for="cat in cats" v-if="!cat.disabled")
                header.section__header
                    div
                        h3.section__jumper {{cat.exerpt}}
                        h2.section__title {{cat.title}}
                    transition(name="fade")
                        router-link.button.hover( :to="{path: '/create/' + cat.id } " v-if="is_admin && projectLoaded") 
                            span +
                nav.section__content
                    ul.grid( itemscope itemtype="http://www.schema.org/SiteNavigationElement" ) 
                        transition(name="fade" v-for="p in projectByCatId(cat.id)")
                            v-project-card(  :project="p" :key="p.json.title" v-if="!(p.json.isPublished === 'false')")
                        v-card-placeholder( v-if="!projectLoaded" )
                        v-card-placeholder( v-if="!projectLoaded" )
                        v-card-placeholder( v-if="!projectLoaded & cat.id <= 1" )


            section.section(v-if="is_admin && projectLoaded")
                header.section__header
                    div
                        h3.section__jumper ready to be published
                        h2.section__title Draft projects
                    transition(name="fade")
                        router-link.button.hover( :to="{path: '/create/1'} " v-if="is_admin && projectLoaded") 
                            span +
                .section__content
                    ul.grid 
                        transition(name="fade" v-for="p in projects")
                            v-project-card(  :project="p" :key="p.json.title" v-if="p.json.isPublished === 'false'")
        .mobile-footer

</template>

<script>
import {mapState, mapGetters,mapMutations} from 'vuex'

/* import all icons*/
import '@/compiled-icons'

export default {
    computed: {
        ...mapState({
            projectLoaded : state => state.store_projects.projectLoaded,
            projects: state => state.store_projects.projects,
            cats :  state => state.store_projects.cats,
            is_admin : state =>  state.store_global.is_admin
        }),
        sections(){
            return this.cats.map(cat => {
                return {
                    cat,
                    projects :  this.projects.filter(project => project.json.cat == cat.id)
                }
            })
        },
    },
    metaInfo() {
        return {
             title : 'Simon Renault - portfolio',
             meta: [
                { property:"og:locale" ,content:"en_GB" },
                { property:"og:site_name" ,content:"Simon Renault - Portfolio" },
                { property:"og:url"  ,   content:"https://simon-renault.com/"},
                { property:"og:description"  ,   content:"Simon Renault is a product designer with a focus on user experience, interaction design and creative coding."},
                { property :"og:image", content: "https://simon-renault.com/images/portfolio/portfolio-main.jpg" },
                { property:"og:title" ,      content:"Simon Renault  -  portfolio"  },
                { property:"og:type"  ,      content:"website" },
                { name:"twitter:card"  ,      content:"summary" },
                { name:"twitter:description"  ,      content:"Simon Renault is a product designer with a focus on user experience, interaction design and creative coding." },
                { name:"twitter:title"  ,      content:"Simon Renault - Portfolio" },
                { name:"twitter:site"  ,      content:"https://simon-renault.com/" },
                { name:"twitter:creator"  ,      content:"Simon renault" },
             ]
        }
    },
    methods: {
        ...mapMutations([
            "admin"
        ]),
        addFirstProject(){
            this.$router.push('/create/0')
        },
        projectByCatId(id){
            return this.projects
                        .filter(project => project.json.cat == id)
                        .sort((a,b) => a.json.z - b.json.z)
        }
    },
}
</script>

<style lang="scss" >

.header{
    transform: translate( 0, -2px);
    width: 100vw;
    @include aspect(1 1.3);
    @include background-image('/img/header.svg',contain);
    background-size: 100% auto;
    @media screen and (min-width : $medium){
       display:none;
    }
}

.intro{
    position: relative;
    margin-bottom: 200px;
    height: 30vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: vertical;
    @media screen and (min-width : $medium){
        height: 65vh;
        margin-bottom: 100px;
    }
    &__img{
        height: 300px;
        position: relative;
        overflow: visible;
        display: none;
        &__inner{
            @include background-image('/img/intro.svg',contain);
            width: 200%;
            height: 120%;
            z-index: -1;
            transform: translate(-10%, -20%);
        }
        @media screen and (min-width : $large){
            display: block
        }
    }
    & h1{
        margin: 0;
        color : $color-dark-blue;
        @media screen and (max-width : $medium){
           font-size: 12rem;
           line-height: 1em;
           margin-bottom: 4rem;
        }
    }
    & .b{
        @media screen and (max-width : $medium){
            margin:  0 0 6rem 0;
        }
    }
    & p {
        @include text-medium();
        margin-bottom: 1.5em;
        user-select: none;
         //font-family: "hk grotesk";
    }
    & em{
        @include text-medium();
        font-weight: 800;
        //font-family: "hk grotesk";
        font-style: initial;
        color: $color-accent;
    }   
    .white{
        fill: transparent;
        stroke: white;
    }
    &__actions{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        @media screen and (min-width : $medium){
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
        }
        &  .button, {
            width: 10rem;
            margin: 0 10px 0 0;
            background-color: $color-light-grey;
            display: flex;
            justify-content: center;
            align-items: center;
            fill: transparent;
            stroke: rgba($color-dark-blue,0.9);
            stroke-width: 2.4px;
            stroke-linecap :round;
            stroke-linejoin : round;
            transition: all .2s ease;
            &:hover{
                background-color: $color-medium-grey;
            }
            & > span {
                margin :  0 7px;
                
            }
            & > svg{
                 margin :  0 7px;
            }
            &.auto{
                min-width: 30rem;
                width: auto;
                background-color: $color-dark-blue;
                //padding: 0 15px;

                &:hover{
                    background-color: lighten($color-dark-blue,10%);
                    & .inner-resume{
                        opacity: 1;
                        transform: translate(0,0);
                        transition: opacity .3s ease, transform .6s ease;
                    }
                }
            }
        }
    }
    &__text{
        z-index: 3;
        white-space: pre-wrap;
        grid-column: 1;
        @media screen and (min-width : $medium){
            grid-column: span 2;
        }
        @media screen and (min-width : $large){
            grid-column:  2 / 4;
        }
    }
}
.db{
    stroke-width: 3.1px;
}

a.button {
    height: 10rem;
    width: 10rem;
    margin: auto 0 0 auto;
    font-size: 6rem;
}


.inner-resume{
    position: absolute;
    top: calc( 100% + 2rem );
    height: auto;
    width: auto;
    background-color: $color-dark-blue;
    border-radius: 1rem;
    padding: 1.5rem;
    display: grid;
    opacity: 0;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    transition: opacity .2s ease, transform .4s ease;
    transform: translate(0,-5px);
    &:before{
        content: '';
        display: block;
        background:inherit;
        position: absolute;
        height: 3rem;
        width:3rem;
        left: 50%;
        transform: translate(-50%,-40%) rotate(45deg);
        border-radius: .5rem;
    }
    &:after{
        content: '';
        display: block;
        background:transparent;
        position: absolute;
        height: 170%;
        width:130%;
        z-index: -1;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
    & > .inner-btn{
        font-size: 3.5rem;
        height: 8rem;
        text-align:center;
        line-height: 8rem;
        color: $color-white;
        padding: 0 2rem;
        border-radius: 1rem;
        &:hover{
            background-color: lighten($color-dark-blue,10%);
        }
    }
}
</style>