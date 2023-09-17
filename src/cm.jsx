import basicSetup from "npm:codemirror"
import {EditorView} from "npm:@codemirror/view"
import {javascript} from "npm:@codemirror/lang-javascript"

let editor = new EditorView({
  extensions: [basicSetup, javascript()],
  parent: document.body
})
