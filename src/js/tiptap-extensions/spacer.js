import { Node } from 'tiptap'
import { wrappingInputRule, markInputRule, setBlockType, toggleWrap , textblockTypeInputRule, toggleBlockType} from 'tiptap-commands'

export default class BlockquoteNode extends Node {

  // choose a unique name
  get name() {
    return 'spacer'
  }


  // the prosemirror schema object
  // take a look at https://prosemirror.net/docs/guide/#schema for a detailed explanation
  get schema() {
    return {
    group: 'block',
    attrs: {
      level: {
        default: 1,
      },
    },
      draggable: true,
      parseDOM: [
        { tag: 'hr' },
      ],
      toDOM: () => ['hr', { class: 'spacer' }],
    }
  }

  
  commands({ type }) {
    return attrs => (state, dispatch) => {
      const { selection } = state
      const position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos
      const node = type.create(attrs)
      const transaction = state.tr.insert(position, node)
      dispatch(transaction)
    }
  }


  inputRules({ type }) {
    return [
      wrappingInputRule(/^---$/, type),
    ]
  }

}