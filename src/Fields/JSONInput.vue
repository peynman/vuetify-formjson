<template>
  <div :class="`vf-input d-flex flex-grow-1 flex-column ${field.class ? field.class:''}`">
    <div class="d-flex flex-row align-center mb-1">
      <label :class="field.props && field.props.error ? 'red--text me-1':'me-1'">{{ field.label }}</label>
      <v-btn
        text
        icon
        :color="options.mode === 'code' ? 'primary':'secondary'"
        @click="setMode('code')"
      >
        <v-icon>{{ field.icons && field.icons.code ? field.icons.code:'code'}}</v-icon>
      </v-btn>
      <v-btn
        text
        icon
        :color="options.mode === 'tree' ? 'primary':'secondary'"
        @click="setMode('tree')"
      >
        <v-icon>{{ field.icons && field.icons.edit ? field.icons.edit:'edit'}}</v-icon>
      </v-btn>
      <v-btn
        text
        icon
        :color="options.mode === 'form' ? 'primary':'secondary'"
        @click="setMode('form')"
      >
        <v-icon>{{ field.icons && field.icons.view ? field.icons.view:'remove_red_eye'}}</v-icon>
      </v-btn>
    </div>
    <div ref="editor" :style="`width: 100%; height: ${field.height ? field.height:'400px'};`"></div>
    <v-divider></v-divider>
    <div class="d-flex flex-column" v-if="field.props && field.props.error">
      <div
        v-for="(err,i) in field.props['error-messages']"
        :key="`error-message-${i}`"
        class="red--text"
      >{{ err }}</div>
    </div>
  </div>
</template>

<script>
import JSONEditor from 'jsoneditor'
import BaseComponent from './mixins'
import { VDivider, VBtn, VIcon } from 'vuetify/lib'

export default {
    components: {
        VDivider, VBtn, VIcon
    },
    mixins: [BaseComponent],
    name: 'vf-json-input',
    props: {
        id: String,
        field: Object,
        value: [Object, String]
    },
    data () {
        return {
            options: {
                mode: 'code'
            },
            editor: null,
            ignoreUpdate: false
        }
    },
    methods: {
        setMode: function (mode) {
            this.options.mode = mode
            this.editor.setMode(mode)
        }
    },
    watch: {
        devalue: {
            deep: true,
            handler () {
                const pos = this.editor.getTextSelection()
                this.editor.set(this.devalue)
                this.editor.setTextSelection(pos.start, pos.end)
            }
        }
    },
    mounted: function () {
        const component = this
        const container = this.$refs.editor
        const options = {
            ...this.options,
            onChange: function () {
                try {
                    this.devalue = component.editor.get()
                    this.ignoreUpdate = true
                    component.$emit('input', this.devalue)
                } catch (ex) {
                    // console.error(ex);
                }
            }
        }
        if (container) {
            this.editor = new JSONEditor(container, options)
            if (this.devalue) {
                if (typeof this.devalue === 'string') {
                    this.editor.set(JSON.parse(this.devalue))
                } else {
                    this.editor.set(this.devalue)
                }
            } else {
                this.editor.set({})
            }
        }
    }
}
</script>
