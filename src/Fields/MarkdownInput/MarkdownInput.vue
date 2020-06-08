<template>
    <div style="min-height: 248px;" :class="`vf-input d-flex flex-column flex-grow-1 ${field.class ? field.class : ''}`">
        <v-toolbar class="flex-grow-0" v-show="!field.renderOnly" flat dense>
            <v-toolbar-title>{{ field.label }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn small icon @click="() => { dialog = !dialog; toggleVirtualMathKeyboard(dialog) }">
                <v-icon small>{{ !dialog || mode !== 'editor' ? 'mdi-function-variant':'mdi-close' }}</v-icon>
            </v-btn>
            <v-btn small icon @click="() => { mode = mode === 'editor' ? 'view' : 'editor'; toggleVirtualMathKeyboard(dialog && mode === 'editor') }">
                <v-icon small>{{ modeIcon }}</v-icon>
            </v-btn>
        </v-toolbar>
        <v-card class="mx-5 mb-5 px-3" v-show="dialog && mode === 'editor'">
            <v-card-title dense>Create a math formula</v-card-title>
            <v-card-text style="position: relative;">
                <div :style="`width: 100%; border: 2px solid gray; border-radius: 6px; padding: 5px`" ref="editorMath">
                    f(x)=
                </div>
                <v-btn
                        style="position: absolute; right: 60px; top: 12px;"
                        :color="mathKeyboardVisible ? 'warning' : 'primary'"
                        icon
                        outlined
                        small
                        dense
                        @click="toggleVirtualMathKeyboard"
                    >
                    <v-icon small>{{ mathKeyboardVisible ? 'mdi-close' : 'mdi-keyboard' }}</v-icon>
                </v-btn>
                <v-btn
                        style="position: absolute; right: 30px; top: 12px;"
                        color="success"
                        outlined
                        icon
                        small
                        dense
                        @click="insertMathToMarkdown"
                    >
                    <v-icon small>mdi-arrow-down</v-icon>
                </v-btn>
            </v-card-text>
        </v-card>
        <div v-show="mode === 'view'" ref="editorView" class="fill-height"></div>
        <v-card v-show="mode === 'editor'" style="position: relative;" class="fill-hight mx-2">
            <div class="" :style="`position: absolute; width: 100%; min-height: 200px; left: 5px;${field.height ? 'height: ' + field.height : ''}`" ref="editorCode">
            </div>
        </v-card>
    </div>
</template>

<script>
// import MathLive from 'dist/mathlive.mjs'
import BaseComponent from './../mixins'
import ACE from './AceEditor/ace'
import './AceEditor/mode-markdown'
import './AceEditor/theme-eclipse'

import markdownit from 'markdown-it'
import MarkdownItColor from './MarkdownItColor/index'
import MermaidPlugin from './mermaid'
// import MathLivePlugin from './mathlive'
import FromJSONPlugin from './formjson'
import { VCard, VCardTitle, VBtn, VIcon, VCardText, VSpacer, VToolbar, VToolbarTitle } from 'vuetify/lib'
export default {
    components: {
        VCard, VCardTitle, VBtn, VIcon, VCardText, VSpacer, VToolbar, VToolbarTitle
    },
    mixins: [BaseComponent],
    name: 'vf-markdown-input',
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
        mode: vm.field.renderOnly ? 'view' : 'editor'
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
        // dialog () {
        //     if (this.dialog && !this.mathfieldEditor) {
        //         if (this.$refs.editorMath) {
        //             this.mathfieldEditor = MathLive.makeMathField(this.$refs.editorMath, {
        //             })
        //         }
        //     }
        // }
    },
    mounted () {
        this.aceEditor = ACE.edit(this.$refs.editorCode, {
            mode: 'ace/mode/markdown',
            selectionStyle: 'text',
            theme: 'ace/theme/eclipse'
        })
        this.aceEditor.session.on('change', (delta) => {
            this.aceUpdate = true
            this.$nextTick(() => {
                this.devalue = this.aceEditor.session.getValue()
            })
        })

        // eslint-disable-next-line new-cap
        this.markdownEditor = new markdownit((this.field.markdownProps ? this.field.markdownProps : {}))
        this.markdownEditor.use(MarkdownItColor, {
            inline: true
        })
        this.markdownEditor.use(MermaidPlugin, {
            host: this
        })
        // this.markdownEditor.use(MathLivePlugin, {
        //     host: this
        // })
        this.markdownEditor.use(FromJSONPlugin, {
            host: this
        })
        // init ace editor before calling update
        this.updateMarkdownText()
    }
}
</script>
