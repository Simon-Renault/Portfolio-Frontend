import { Node } from 'tiptap'
import { pasteRule } from 'tiptap-commands'

export default class Image extends Node {

  get name() {
    return 'image'
  }

  get schema() {
    return {
      attrs: {
        level: {
          default: 1,
        },
        src: {
          default : '',
        },
        alt: {
          default: '',
        },
        className: {
          default: '',
        },
        ratio : {
          default : '',
        }
      },
      group: 'block',
      draggable: true,
      selectable: true,
      parseDOM: [
        {
          tag: 'img[src]',
          getAttrs: dom => ({
            src: dom.getAttribute('src'),
            className: dom.getAttribute('className'),
            alt: dom.getAttribute('alt'),
            ratio : dom.getAttribute('ratio'),
          }),
        },
        {
          tag: 'figure',
          class: 'text-img',
          getAttrs: dom => ({
            src: dom.getAttribute('src'),
            className: dom.getAttribute('className'),
            alt: dom.getAttribute('alt'),
            ratio : dom.getAttribute('ratio'),
          }),
        }
      ],
      toDOM: node => ['figure', {
          ...node.attrs,
          class : this.getclass(node)
        },
      ],
    }
  }

  getclass(node){
    return 'text-img ' + '' + node.attrs.className
  }

  pasteRules({ type }) {
    return [
      pasteRule(
        /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g,
        type,
        src => ({ src: src,alt : "no alt" }),
      ),
    ]
  }

  commands({ type }) {
    
    return (attrs) => (state, dispatch) => {



      const exec = async () => {
        await attrs.promise.promise

        const data = attrs.getter();
        console.log(data)

        attrs.src = data.src
        attrs.alt = data.alt
        attrs.ratio = data.ratio
        attrs.className = data.className

        const { selection } = state
        const position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos
        const node = type.create(attrs)
        const transaction = state.tr.insert(position, node)
        dispatch(transaction)
      } 
      exec();

     
     
    }
  }

  


  get view() {
    return {
      props: ['node', 'updateAttrs', 'editable'],
      data(){
        return {}
      },
      computed: {
        alt: {
            get() {
                return this.node.attrs.alt
            },
            set(alt) {
              this.updateAttrs({
                  alt,
              })
            },
        },
        ratio: {
          get() {
              return this.node.attrs.ratio
          },
          set(ratio) {
            this.updateAttrs({
              ratio,
            })
          },
        },
        src: {
          get() {
            return this.node.attrs.src
          },
          set(src) {
            this.updateAttrs({
              src,
            })
          },
        },
        className: {
          get() {
            return this.node.attrs.className
          },
          set(className) {
            this.updateAttrs({
              className,
            })
          },
        },
      },
      methods: {
        supr(){
          this.$el.replaceWith('')
        }
      },
      template: `
        <div class="image">
          <image-loader class="image__preview" :src="src" :ratio="ratio" :alt="alt" :className="className" ></image-loader>
          <span class="alt">{{alt}}</span>
        </div>
      `,
    }
  }

}
