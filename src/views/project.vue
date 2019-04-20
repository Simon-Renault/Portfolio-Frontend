<template lang="pug">
main.page
    v-page-grid

    .page__inner

        section.title
            h1.title {{project.json.title}}

        section.page-header
            .page-header__img(ref="img")
                image-loader(:src="project.json.image.src" width="100%" height="100%" )
            .page-header__overlay
            .page-header__content
                router-link.button.back(to="/" :class="{ light : project.json.isLight == 'true'}" aria-label="Back to homepage")
                    svg(xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left")
                        polyline(points="15 18 9 12 15 6")

        transition(name="fade")
            section.place(v-if="!isLoaded")
                v-project-placeholder

        transition(name="fade")
            section.editor(v-if="isLoaded")
                h1.title {{project.json.title}}
                div.ProseMirror(v-html="project.content" ref="text")
                    div.placeolder tata

        section.section.last
            header.section__header
                h3.section__jumper You might also like
                h2.section__title Other Projects
            .section__content.prevent-width
                ul.grid.mobile-scroll
                    div.item( v-for="i in projects" )
                        v-project-card( :project="get_projects_from_id(i)" 
                                        :key="get_projects_from_id(i.url)")

        footer.back-to-home(@click="$router.push('/')")
            .back-to-home__content
                span back home

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Vue from 'vue'
export default {
    data(){
        return{
            isLoaded : false,
            url : "",
            projectData : {
                projectImage : '',
                porjectDescription : '',
                projectTitle : '' ,
                projectColor : ''
            },
        }
    },
    metaInfo() {
        return {
            title : "Simon Renault  - " + this.project.json.title ,
             meta: [
                {property:"og:url"   ,      content:"https://simon-renault.com/projects/"+this.url},
                {property :"og:image",      content: this.project.json.image.src },
                {property:"og:title" ,      content:"Simon Renault  - " + this.project.json.title },
                {property:"og:type"  ,      content:"article" },
             ]
        }
    },
    computed: {
        ...mapGetters([
            'get_projects_from_id',
            'get_projects_from_ids',
            'get_all_projects_ids',
            'is_admin',
            'get_all_cats'
        ]),
        projects(){
            if(!this.project){ 
                return 
            }
            const ids = [...new Set(this.project.json.projects.map(el => el))]
                .splice(1,3)
                .filter( el => el !== this.$route.params.id)
                
            return ids
        },
        project(){
            const project = this.get_projects_from_id(this.url)
            return  project|| {
                title : "",
                json : {
                    image : {
                        src : ""
                    },
                    title : "",
                    projects : []
                }
            }
        }
    },
    methods : {
        fetchContent(){
            axios.get(`https://api.simon-renault.com/pages/${this.$route.params.id}`)
                .then((res) => {
                    const data = res.data
                    this.renderContent(data)
                },(error) => {
                    this.$router.push('/projects')
                })
        },
        renderContent(data){
            this.project.content = data.content
            this.isLoaded = true
            this.$nextTick(() => {
                const images = [...this.$refs.text.querySelectorAll('.text-img'),...this.$refs.text.querySelectorAll('img')] || []

                images.map((el) => {
                    let src = el.getAttribute("src") || ''
                    let alt =  el.getAttribute("alt") || ''
                    let className = el.getAttribute("classname") || ''
                    let data = {src,alt,className}
                    return new Vue({
                        template : ` 
                                    <figure  >
                                        <image-loader :src="src" :alt="alt" :className="className" ></image-loader>
                                        <span class="alt">{{alt}}</span>
                                    </figure>
                                `,
                        data(){
                            return {
                                ...data
                            }
                        },
                    }).$mount(el)
                })
            })
        }
    },
    created(){

        this.url = this.$route.params.id
        const project = this.get_projects_from_id(this.url) || null
        this.fetchContent()
  
    },
    mounted(){
        this.$nextTick(()=> {
            // Setup a timer
            //let timeout;
            //const body = document.querySelector('html')
            //const img = this.$refs.img.querySelector('img')

            // Listen for resize events
            // window.addEventListener('scroll',  ( event ) => {
            //     if (timeout) window.cancelAnimationFrame(timeout);
                
            //     timeout = window.requestAnimationFrame( () => {
            //         let scrollAmount = body.scrollTop
            //         img.style.transform = `translate(0,${scrollAmount/3}px)`
            //     });

            // }, false);
        })
    }
}
</script>

<style lang="scss" >
.container{
    display: flex;
    flex-direction: column;
}
.prevent-width{
    margin:0;
     margin:0 !important;
}
.ProseMirror .box-image{
    @include aspect(1.33 1);
    @media screen and (min-width : $medium){
        @include aspect(2.33 1);
    }
}
figure{
    display:flex;
    flex-direction: column;
}
.back-to-home{
    @include aspect(1 0.33);
    background: $color-dark-blue;
    user-select: none;
    
    &__content{
        @include full-absolute();
         display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
        font-weight: 800;
        color: $color-white;
    }
    @media screen and (min-width : $medium){
        display: none;
    }
}
.last{
    margin-bottom: 0;
}

.image{
    position: static;
    width: 100%;
    height: 300px;
    overflow: hidden;
    & > img{
        @include full-absolute();
    }
    & .image__editor{
        @include full-absolute();
    }
}


.spacer{
    height: 4rem;
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before{
        content : '';
        display: block;
        height: 8px;
        width:8px;
        background:$color-dark-blue;
        border-radius: 50%;
        box-shadow: -20px 0 0 0 $color-dark-blue, 20px 0 0 0 $color-dark-blue;
    }
}
.ProseMirror{
    @include text();
}
.back{
    position: absolute;
    top: 3rem;
    left: 3rem;
    width: 13rem !important;
    height: 13rem !important;
    @media screen and (min-width : $medium){
        width: 10rem !important;
        height: 10rem !important;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    &.light{
        background: #fff;
        & svg{
            stroke : $color-dark-blue;
        }
    }
}
.item:nth-child(3){
    @media screen and (max-width : $medium){
       display: block;
    }
    @media screen and (min-width : $medium){
       display: none;
    }
    @media screen and (min-width : $large){
       display: block;
    }
}
</style>