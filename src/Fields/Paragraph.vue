<template>
    <div :class="`vf-input d-flex flex-row flex-grow-1 ${field.class ? field.class : ''}`">
        <div v-show="mode === 'view' || field.readonly" ref="editorView" class="fill-height" style="width: 100%;"></div>
        <v-card v-show="mode === 'editor' && !field.readonly" style="position: relative; width: 100%; min-height: 24px;" class="fill-hight mx-2">
            <div class="" :style="`position: absolute; width: 100%; left: 0; right: 0; top: 0; bottom: 0; ${field.height ? 'height: ' + field.height : ''}`" ref="editorCode">
            </div>
        </v-card>
        <div v-show="!field.readonly">
            <v-btn fab small icon @click="() => { mode = mode === 'editor' ? 'view' : 'editor'; toggleVirtualMathKeyboard(dialog && mode === 'editor') }">
                <v-icon small>{{ modeIcon }}</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
// import MathLive from 'dist/mathlive.mjs'
import BaseComponent from './mixins'
import ACE from './MarkdownInput/AceEditor/ace'
import './MarkdownInput/AceEditor/mode-markdown'
import './MarkdownInput/AceEditor/theme-eclipse'

import markdownit from 'markdown-it'
import MarkdownItColor from './MarkdownInput/MarkdownItColor/index'
import MermaidPlugin from './MarkdownInput/mermaid'
// import MathLivePlugin from './MarkdownInput/mathlive'
import FromJSONPlugin from './MarkdownInput/formjson'

import { VBtn, VIcon, VCard } from 'vuetify/lib'
export default {
    components: {
        VBtn, VIcon, VCard
    },
    mixins: [BaseComponent],
    name: 'vf-paragraph-input',
    props: {
        id: String,
        field: Object,
        value: { type: String, default: () => '' }
    },
    data: (vm) => ({
        dialog: false,
        markdownEditor: null,
        mathfieldEditor: null,
        mathKeyboardVisible: false,
        aceEditor: null,
        aceUpdate: false, // break devalue update <=> ace text update loop
        mode: vm.field.readonly ? 'view' : 'editor'
    }),
    computed: {
        modeIcon () { return this.mode === 'editor' ? 'mdi-code-braces' : 'mdi-eye' }
    },
    methods: {
        toggleVirtualMathKeyboard (to) {
            if (this.mathfieldEditor) {
                if (this.mathfieldEditor.virtualKeyboardVisible !== to) {
                    this.mathfieldEditor.$perform(['toggleVirtualKeyboard'])
                }
                this.mathKeyboardVisible = this.mathfieldEditor.virtualKeyboardVisible
            }
        },
        insertMathToMarkdown () {
            if (this.mathfieldEditor) {
                this.aceEditor.session.insert(this.aceEditor.getCursorPosition(), '$$' + this.mathfieldEditor.$text() + '$$')
            }
        },
        updateMarkdownText () {
            const markdownHtml = this.markdownEditor.render(this.devalue)
            let child = this.$refs.editorView.lastElementChild
            while (child) {
                this.$refs.editorView.removeChild(child)
                child = this.$refs.editorView.lastElementChild
            }
            this.$refs.editorView.insertAdjacentHTML('beforeend', markdownHtml)

            if (!this.aceUpdate) {
                this.aceEditor.session.setValue(this.devalue)
            } else {
                this.aceUpdate = false
            }
        }
    },
    watch: {
        devalue: {
            deep: true,
            handler () {
                this.updateMarkdownText()
                this.$emit('input', this.devalue)
            }
        }
    },
    mounted () {
        this.aceEditor = ACE.edit(this.$refs.editorCode, {
            mode: 'ace/mode/markdown',
            selectionStyle: 'text',
            theme: 'ace/theme/eclipse',
            maxLines: Infinity
        })
        this.aceEditor.session.on('change', (delta) => {
            this.aceUpdate = true
            this.$nextTick(() => {
                this.devalue = this.aceEditor.session.getValue()
            })
        })
        this.aceEditor.session.setValue(this.devalue)

        // eslint-disable-next-line new-cap
        this.markdownEditor = new markdownit((this.field.markdownProps ? this.field.markdownProps : {}))
        this.markdownEditor.use(MarkdownItColor, {
            inline: true
        })
        this.markdownEditor.use(MermaidPlugin, {
            host: this
        })
        this.markdownEditor.use(FromJSONPlugin, {
            host: this
        })
        // init ace editor before calling update
        this.updateMarkdownText()
    }
}
</script>
