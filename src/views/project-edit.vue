<template lang="pug">
    main.page
        .page__grid--layer
            .page__grid--layer__grid
                span
                span
                span

        .page__inner

            section.title
                h1.title {{project.json.title}}

            section.page-header
                .page-header__img
                    image-loader( :src="'https://simon-renault.com/images/cover/large/'+project.json.image.src+'.jpg' || '' "  width="100%" height="100%")
                .page-header__overlay
                .page-header__content
                    button.button.back(@click="$router.push('/')" :class="{ light : project.json.isLight == 'true'}")
                        svg(xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" feather-chevron-left")
                            polyline(points="15 18 9 12 15 6")
                   

            section.params-editor( v-if="is_admin" )
                v-input( id="fmp1" label="Image URL" v-model="project.json.image.src").params-editor__url
                v-input( id="fmp2" label="Title" v-model="project.json.title").params-editor__title
                v-input( id="fmp4" label="Exerpt" v-model="project.json.exerpt")
                v-input( id="fmp5" label="url" :value="project.url" ref="url").params-editor__url
                v-input( id="fmp3" label="color" v-model="project.json.color").params-editor__color
                select(v-model="project.json.cat" )
                    option( v-for="cat in get_all_cats" :value="cat.id" ) {{cat.title}}

                select(v-model="project.json.isPublished" )
                    option(  value="false" ) draft
                    option(  value="soon" ) coming soon
                    option(  value="true" ) published

                select(v-model="project.json.isLight" )
                    option(  value="true" ) light
                    option(  value="false" ) dark
                                
                button.button(@click="del")
                    span delete

                button.button(@click="onSave")
                    span save
                 

            section.editor 

                h1.title {{project.json.title}}


                div.modal(v-if="imageModal.isOpen" @click.stop.prevent="reject")
                    div.modal__inner(@click.stop.prevent)
                        div.modal__content 
                            .top 
                                image-loader(class="image__preview" :src="imageModal.imageData.src" )
                            form.bottom( @submit.prevent.stop="resolve")
                                v-input( v-model="imageModal.imageData.src" label="src" ).src
                                v-input( v-model="imageModal.imageData.alt" label="alt" ).alt
                                select(v-model="imageModal.imageData.className" ).class
                                    option( v-for="className in imageModal.classes" :value="className" ) {{className}}
                                button.button(@click="resolve") insert
                
                editor-floating-menu( :editor="editor" )
                    div(    slot-scope="{ commands, isActive, menu }"
                            class="editor__floating-menu"
                            :class="{ 'is-active': menu.isActive }"
                            :style="`top: ${menu.top}px`")

                        button( class="menubar__button"
                                @click="commands.code_block" ) 
                            icon( name="code" height="15" width="15" ) 

                        button( class="menubar__button"
                                @click="commands.blockquote" ) 
                            icon( name="quote" height="15" width="15" ) 

                        button( class="menubar__button"
                                @click="commands.heading({ level: 2 })" ) 
                            span H2
                        button( class="menubar__button"
                                @click="commands.heading({ level: 3 })" ) 
                            span H3
                        button( class="menubar__button"
                                @click="commands.heading({ level: 4 })" ) 
                            span H45

                        button( class="menubar__button"
                                @click="commands.bullet_list" ) 
                            icon( name="ul" height="15" width="15" ) 

                        button( class="menubar__button"
                                @click="commands.ordered_list" ) 
                            icon( name="ol" height="15" width="15" ) 

                        button( class="menubar__button"
                                @click="showImagePrompt(commands.image)" ) 
                            icon( name="image" height="15" width="15" ) 

                        button( class="menubar__button"
                                @click="commands.spacer" ) 
                            span spacer
                                

                editor-menu-bubble(:editor="editor" )
                    div(    slot-scope="{ commands, isActive, menu,getMarkAttrs }"
                            class="menububble"
                            :class="{ 'is-active': menu.isActive }"
                            :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`")

                        div(v-if="linkMenuIsActive || imageMenuIsActive")
                            form.menububble__form( v-if="linkMenuIsActive" @submit.prevent="setLinkUrl(commands.link, linkUrl)")
                                input.menububble__input( type="text" v-model="linkUrl" placeholder="https://" ref="linkInput" @keydown.esc="hideLinkMenu")
                                button.menububble__button( @click="setLinkUrl(commands.link, null)" type="button")
                                    icon.feather( name="x" height="15" width="15" )

                        template( v-else)
                            button( class="menububble__button"
                                    :class="{ 'is-active': isActive.heading() }"
                                    @click="commands.heading({ level: 2 })" ) 
                                span H2
                            button( class="menububble__button"
                                    :class="{ 'is-active': isActive.heading() }"
                                    @click="commands.heading({ level: 3 })" ) 
                                span H3
                            button( class="menububble__button"
                                    :class="{ 'is-active': isActive.heading() }"
                                    @click="commands.heading({ level: 4 })" ) 
                                span H4
                            button( class="menububble__button"
                                    :class="{ 'is-active': !isActive.heading() }"
                                    @click="commands.bold" ) 
                                    icon( name="bold" height="15" width="15" ) 

                            button( class="menububble__button"
                                    :class="{ 'is-active': !isActive.heading() }"
                                    @click="commands.italic" ) 
                                    icon( name="italic" height="15" width="15" ) 

                            button( class="menububble__button"
                                    :class="{ 'is-active': !isActive.heading() }"
                                    @click="commands.strike" ) 
                                    icon( name="strike" height="15" width="15" ) 

                            button( class="menububble__button is-active"
                                    @click="commands.paragraph" ) 
                                    icon( name="paragraph" height="15" width="15" ) 

                            button.menububble__button.is-active(
                                @click="showLinkMenu(getMarkAttrs('link'))"
                                :class="{ 'is-active': isActive.link() }")
                                span Add Link
                                icon( name="link" height="15" width="15" ) 


                        </button>

                editor-content.text-container( :editor="editor" :class="")


            section.section.last
                header.section__header
                    h3.section__jumper You might also like
                    h2.section__title Other Projects
                .section__content.prevent-width
                    ul.grid.mobile-scroll
                        div.item( v-for="i in 3" )

                            select(v-model="project.json.projects[i]" v-if="is_admin").select
                                option( v-for="id in get_all_projects_ids" :value="id" ) {{id}}

                            v-project-card( v-if="get_projects_from_id(project.json.projects[i])"
                                            :project="get_projects_from_id(project.json.projects[i])" 
                                            :key="get_projects_from_id(project.json.projects[i]).json.title + i"
                                            disbaled=true)

            footer.back-to-home(@click="$router.push('/')")
                .back-to-home__content
                    span back home

                          


    
</template>

<script>
/* import all icons*/
import '@/compiled-icons'
import Image from "@/js/tiptap-extensions/image.js"
import Image2 from "@/js/tiptap-extensions/image2.js"
import Spacer from "@/js/tiptap-extensions/spacer.js"
import Link from "@/js/tiptap-extensions/linkPlus.js"

/* required for code highligting */
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import {mapGetters, mapActions, mapState} from 'vuex'

/* import base component from tiptap*/
import { 
    Editor, 
    EditorContent, 
    EditorMenuBar, 
    EditorMenuBubble,
    EditorFloatingMenu
}from 'tiptap'

/* import all the basic addons from tiptap */
import {
    Blockquote,
    CodeBlock,
    CodeBlockHighlight,
    HardBreak,
    Heading,
    OrderedList,
    BulletList,
    ListItem,
    TodoItem,
    TodoList,
    Bold,
    Code,
    Italic,
    Strike,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    Underline,
    History,
    Placeholder,
}from 'tiptap-extensions'


export default {
    components: {
        EditorContent,
        EditorMenuBar,
        EditorMenuBubble,
        EditorFloatingMenu,
    },
    data(){
        return{
            imageModal : {
                isOpen : false,
                imageData : {
                    src : '',
                    alt : '',
                    className : ''
                },
                classes : ['classic','tall','long','square'],
                promise : null
            },
            projectData : {
                projectImage : '',
                porjectDescription : '',
                projectTitle : '',
                projectColor : ''
            },
            url: null,
            editor: new Editor({
                editable: true,
                extensions: [
                    new Blockquote(),
                    new BulletList(),
                    new CodeBlock(),
                    new HardBreak(),
                    new Heading({ 
                        levels: [1, 2, 3, 4] 
                    }),
                    new ListItem(),
                    new OrderedList(),
                    new TodoItem(),
                    new TodoList(),
                    new Bold(),
                    new Code(),
                    new Italic(),
                    new Link(),
                    new Strike(),
                    new Underline(),
                    new History(),
                    new Table(),
                    new TableHeader(),
                    new TableCell(),
                    new TableRow(),
                    new CodeBlockHighlight({
                        languages: {
                            javascript,
                            css,
                        },
                    }),
                    // custom extension
                    new Image(),
                    //new Image2(),
                    new Spacer()
                ],
                onUpdate: ({ getHTML }) => {
                    this.project.content = getHTML()
                },
            }),
            html : 'null',
            editable: this.is_admin,
            linkUrl: null,
            linkMenuIsActive: false,

            imageUrl: null,
            imageMenuIsActive: false,
        }
    },
    beforeDestroy() {
        this.editor.destroy()
        document.removeEventListener('keydown', this.onKepPress, false)
    },
    methods: {
        resolve(){
            this.imageModal.promise.resolve()
        },
        reject(){
            this.imageModal.promise.resolve()
        },
        showImagePrompt(command){

            this.imageModal.isOpen = true;

            function defer() {
                const deferred = {
                    promise: null,
                    resolve: null,
                    reject: null
                };

                deferred.promise = new Promise((resolve, reject) => {
                    deferred.resolve = resolve;
                    deferred.reject = reject;
                });

                return deferred;
            }

            this.imageModal.promise = defer();

            command({
                promise : this.imageModal.promise,
                getter : this.getData
            })
        },
        getData(){
            this.imageModal.isOpen = false;
            return {
                src : this.imageModal.imageData.src,
                alt : this.imageModal.imageData.alt,
                className : this.imageModal.imageData.class
            }
        },
        onKepPress(ev){
            if (event.metaKey && event.key === 's') {
                event.preventDefault()
                this.onSave()
            }
        },
        showLinkMenu(attrs) {
            this.linkUrl = attrs.href
            this.linkMenuIsActive = true
            this.$nextTick(() => {
                this.$refs.linkInput.focus()
            })
        },
        hideLinkMenu() {
            this.linkUrl = null
            this.linkMenuIsActive = false
        },
        setLinkUrl(command, url) {
            command({ href: url })
            this.hideLinkMenu()
            this.editor.focus()
        },
        onSave(){

            const patch = {
                content : this.editor.getHTML(),
                url : this.$refs.url.getValue().replace(/\s+/g,'_'),
                json :  JSON.stringify(this.project.json)
            }
            axios.put(`https://api.simon-renault.com/pages/${this.project.id}?token=${localStorage.getItem('token')}`,patch)
        },
        del(){
            axios.delete(`https://api.simon-renault.com/pages/${this.project.id}?token=${localStorage.getItem('token')}`)
            this.$router.push({
                path : '/'
            })
        }
    },
    computed: {
        ...mapGetters([
            'get_projects_from_id',
            'get_projects_from_ids',
            'get_all_projects_ids',
            'get_all_cats'
        ]),
        ...mapState({
            is_admin : state =>  state.store_global.is_admin
        }),
        project(){
            const project = this.get_projects_from_id(this.url)
            return project || {
                title : "",
                json : {
                    title : "",
                    image : {
                        src : "",
                    },
                    exerpt : "",
                    projects : "",
                    isPublished : false,
                    isLight : false,
                }
            }
        }
    },
    created(){
        if(!this.is_admin){
            this.$router.push('/')
            return
        }
        this.url = this.$route.params.id
        const project = this.get_projects_from_id(this.url)
        axios.get(`https://api.simon-renault.com/pages/${this.$route.params.id}`)
            .then((res) => {
                const data = res.data
                this.project.content = data.content
                this.editor.setContent(this.project.content)
            })
    },
    beforeDestroy() {
        this.editor.destroy()
        document.removeEventListener('keydown', this.onKepPress, false)
    },
    updated(){
        this.editor.setContent(this.project.content)
    },
    mounted(){
        this.html = this.editor.getHTML()
        document.addEventListener('keydown', this.onKepPress, false)
        this.editor.setContent(this.project.content)
    }
}
</script>

<style lang="scss">

.container{
    display: flex;
    flex-direction: column;
}
.prevent-width{
    margin:0 !important;
}

.back{
    position: absolute;
    top: 3rem;
    left: 3rem;
    width: 13rem !important;
    height: 13rem;
    @media screen and (min-width : $medium){
        width: 10rem !important;
        height: 10rem;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    &.light{
        background: #fff;
        & svg{
            stroke : $color-dark-blue;
            //fill : $color-dark-blue;
        }
        
    }
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



.menububble {
    position: absolute;
    display: flex;
    flex-direction: row;
    z-index: 20;
    background: white;
    box-shadow: 0 5px 20px rgba(0,0,0,0.25);
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 0.5rem;
    transform: translateX(-50%);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;

    &.is-active {
      opacity: 1;
      visibility: visible;
    }

    & .row{
      margin: 10px 0 0 0;
      display: flex;
      flex-shrink: 0;
      &:first-of-type{
        margin: 0 0 0 0;
      }
    }

    & svg {
      fill : $color-dark-blue;
    }
  
    &__button {
        
        height: 6rem;
        min-width: 6rem;
        padding: 0 8px;
        border-radius: 1rem;
        background: $color-medium-grey;
        margin : 0 1rem 0 0;
        display:flex;
        justify-content: center;
        align-items: center;
        display: none;
        &.is-active{
            display: flex;
        }
  
        &:last-child {
            margin-right: 0;
        }
    
        &:hover {
            background: $color-light-grey;
        }

        & > span {
            margin: 0 10px 0 0;
        }
    }
  
    &__form {
      display: flex;
      align-items: center;
    }
  
    &__input {
      font: inherit;
      font-size: 4rem;
      border: none;
      background: transparent;
      color: $color-dark-blue;
    }
  }

.feather{
    stroke : $color-dark-blue;
    stroke-width: 2px;
}

.add__image{
    overflow: hidden;
    border-radius: 1rem;
    border: 1px solid red;
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
    position: relative;
    font-size: 4rem;
    display: block;
    overflow: scroll;
    height: 150vh;
}


.modal{
    position: fixed;
    top: 0;
    right:0;
    left:0;
    bottom:0;
    background: rgba($color-dark-blue,0.5);
    z-index: 9990;
    &__inner{
        position: relative;
        width:100vw;
        height: 100vh;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    &__content{
        position: relative;
        width: 1000px;
        display: flex;
        background-color: #fff;
        font-size: 4rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        padding: 5rem;
        
    }
}
.top{
    height: 80%;
     margin-bottom: 5rem;
}
.bottom{
    display:grid;
    width: 100%;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 5rem;
    .src{
        grid-column: 1 / 6;
    }
    .alt{
        grid-column: 1 / 4;
        
    }
    .class{
        
    }
}
.image__preview{
    @include aspect(2.5 1);
   
}
</style>