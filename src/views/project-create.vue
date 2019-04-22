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
                .page-header__img(:style="{'background-color' : project.json.color}")
                    image-loader(:src="'https://simon-renault.com/images/cover/large/'+project.json.url+'.jpg' || '' " width="100%" height="100%")
                .page-header__overlay
                .page-header__content


            section.params-editor( v-if="is_admin" )
                v-input( id="fmp1" label="Image URL" v-model="project.json.image.src").params-editor__url
                v-input( id="fmp2" label="Title" v-model="project.json.title").params-editor__title
                v-input( id="fmp4" label="Exerpt" v-model="project.json.exerpt")
                v-input( id="fmp5" label="url" v-model="project.url").params-editor__url
                v-input( id="fmp3" label="color" v-model="project.json.color").params-editor__color
                select( v-model="project.json.cat" )
                                option( v-for="cat in get_all_cats" :value="cat.id" ) {{cat.title}}

                button.button(@click="onSave")
                    span save


            section.editor 
                editor-floating-menu( :editor="editor" )
                    div(    slot-scope="{ commands, isActive, menu }"
                            class="editor__floating-menu"
                            :class="{ 'is-active': menu.isActive }"
                            :style="`top: ${menu.top}px`")

                        button( class="menubar__button"
                                :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                                @click="commands.heading({ level: 2 })" ) H2

                editor-content.text-container(:editor="editor")
               


            section.section
                header.section__header
                    h3.section__jumper Solving real problems
                    h2.section__title Work & projects
                .section__content
                    ul.grid
                            select(v-model="project.json.projects[0]" v-if="is_admin") 
                                option( v-for="id in get_all_projects_ids" :value="id" ) {{id}}

                            select(v-model="project.json.projects[1]" v-if="is_admin")
                                option( v-for="id in get_all_projects_ids" :value="id" ) {{id}}

                            select(v-model="project.json.projects[2]" v-if="is_admin")
                                option( v-for="id in get_all_projects_ids" :value="id" ) {{id}}

                            v-project-card( v-if="project" v-for="project in get_projects_from_ids(project.json.projects)" 
                                            :project="project" 
                                            :key="project.json.title")
                            .button.card.empty( v-else)
                                .button__inner
                                    span Add project

                            



    
</template>

<script>
/* required for code highligting */
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import {mapGetters, mapActions} from 'vuex'
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
    Link,
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
            project : {
                 url : "",
                json : {
                    title : 'no title',
                    exerpt : 'no exerpt',
                    projects : [null,null,null],
                    color : '#F1F2F7',
                   
                    image : {
                        alt: "",
                        src : ""
                    }
                }
            },
            id: null,
            editor: new Editor({
                editable: true,
                extensions: [
                    new Blockquote(),
                    new BulletList(),
                    new CodeBlock(),
                    new HardBreak(),
                    new Heading({ 
                        levels: [ 2, 3, 4] 
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
                    new Placeholder({
                        emptyClass: 'is-empty',
                        emptyNodeText: 'Write something …',
                    }),
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
                ],
                onUpdate: ({ getHTML }) => {
                    this.html = getHTML()
                },
            }),
            html : 'null',
            editable: this.is_admin,
        }
    },
    watch: {
        editable() {
            this.editor.setOptions({
                editable: this.editable,
            })
        },
    },
    beforeDestroy() {
        this.editor.destroy()
        document.removeEventListener('keydown', this.onKepPress, false)
    },
    methods: {
        ...mapActions([
            'fetch_projects'
        ]),
        onKepPress(ev){
            if (event.metaKey && event.key === 's') {
                event.preventDefault()
                this.onSave()
            }
        },
        onSave(){
            const patch = {
                url : this.project.url,
                content : this.editor.getHTML(),
                json :  JSON.stringify(this.project.json)
            }

            axios.post(`https://api.simon-renault.com/pages?token=${localStorage.getItem('token')}`,patch)

            this.$router.push({
                path : '/'
            })
        }
    },
    computed: {
        ...mapGetters([
            'get_projects_from_ids',
            'get_projects_from_id',
            'get_all_projects_ids',
            'is_admin',
            'get_all_cats'
        ]),
    },
    created(){
        this.id = this.$route.params.id
    },
    mounted(){
        this.html = this.editor.getHTML()
        document.addEventListener('keydown', this.onKepPress, false)
        this.editor.setContent('<p></p>')
    }
}
</script>

<style lang="scss">
.container{
    display: flex;
    flex-direction: column;
}
</style>