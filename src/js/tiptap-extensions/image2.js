
import { Node } from 'tiptap'

export default class Image2 extends Node {

  get name() {
    return 'image2'
  }

  get schema() {
    return {
        inline: true,
        attrs: {
            level: {
                default: 1,
            },
            src: {
                default: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            },
            alt : {
                default : 'this is the default alt'
            },
            className : {
                default  : 'test__class'
            }
        },
        group: 'inline',
        draggable: true,
        parseDOM: [
            {
                tag: 'img[src]',
                getAttrs: dom => ({
                    src: dom.getAttribute('src'),
                    title: dom.getAttribute('title'),
                    alt: dom.getAttribute('alt'),
                    class: dom.getAttribute('class'),
                }),
            },
            {
                tag: 'figure',
                class: 'text-img',
                getAttrs: dom => ({
                    src: dom.getAttribute('src'),
                    title: dom.getAttribute('title'),
                    alt: dom.getAttribute('alt'),
                    class: dom.getAttribute('class'),
                }),
            }
        ],
        toDOM: node => ['figure', {
            class: 'text-img',
                ...node.attrs,
            },
        ],
    }
  }

  
    commands({ type }) {
       
            return attrs => (state, dispatch) => {
            const a  = prompt('url')
            console.log('url')
            const { selection } = state
            const position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos
            const node = type.create(attrs)
            const transaction = state.tr.insert(position, node)
            dispatch(transaction)
        }
    }
  

  
}



const t =  ` <div class="image__editor" v-if="editable" draggable="true">
<v-input :id="fmp77" @paste.stop @paste.native.stop label="test" v-model="src" ></v-input>
<button class="button" @click="supr" >
  <icon name="remove" height="16" width="16" ></icon>
</button>
</div>`
