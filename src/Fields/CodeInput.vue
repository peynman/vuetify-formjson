<template>
    <div style="min-height: 248px;" :class="`vf-input flex-column flex-grow-1 fill-height ${field.class ? field.class : ''}`">
        <v-label>{{ field.label }}</v-label>
        <v-card style="position: relative; width: 100%; height: 100%;" class="fill-hight px-2">
            <div class="" :style="`position: absolute; top: 2px; right: 2px; left: 2px; bottom: 2px;  ${field.height ? 'height: ' + field.height : ''}`" ref="editorCode">
            </div>
        </v-card>
    </div>
</template>

<script>
import BaseComponent from './mixins'
import ACE from './MarkdownInput/AceEditor/ace'
import { VCard } from 'vuetify/lib'
export default {
    components: {
        VCard
    },
    mixins: [BaseComponent],
    name: 'vf-code-input',
    props: {
        id: String,
        field: Object,
        value: String
    },
    data () {
        return {
            aceEditor: null,
            aceUpdate: true
        }
    },
    watch: {
        devalue () {
            if (this.aceUpdate) {
                this.aceEditor.setValue(this.devalue)
            } else {
                this.aceUpdate = true
            }
        }
    },
    mounted () {
        this.aceEditor = ACE.edit(this.$refs.editorCode, {
            selectionStyle: 'text'
        })
        this.aceEditor.setValue(this.devalue)
        this.aceEditor.session.on('change', (delta) => {
            this.$nextTick(() => {
                this.aceUpdate = false
                this.devalue = this.aceEditor.session.getValue()
                this.$emit('input', this.devalue)
            })
        })
    }
}
</script>
