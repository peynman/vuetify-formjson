<template>
  <div class="fill-height">
    <confirm ref="confirm"></confirm>
    <v-toolbar :dark="mode !== 'editor'" flat dense class="ma-0 pa-0">
      <label>
        <v-btn
          :color="mode === 'view' ? 'warning':'primary'"
          icon
          small
          @click="mode = mode === 'view' ? 'editor':'view'"
        >
          <v-icon small>mdi-eye</v-icon>
        </v-btn>
        <v-btn
          :color="mode === 'json' ? 'warning':'primary'"
          icon
          small
          @click="mode = mode === 'json' ? 'editor':'json'"
        >
          <v-icon small>mdi-code-array</v-icon>
        </v-btn>
        <v-btn
          :color="mode === 'blockly' ? 'warning':'primary'"
          icon
          small
          @click="mode = mode === 'blockly' ? 'editor':'blockly'"
        >
          <v-icon small>mdi-code-greater-than-or-equal</v-icon>
        </v-btn>
        {{ field.label }}
      </label>
      <v-spacer></v-spacer>
      <v-btn small icon @click="onReset" color="red">
        <v-icon small>mdi-refresh</v-icon>
      </v-btn>
      <v-btn small icon @click="onDownload">
        <v-icon small>mdi-download</v-icon>
      </v-btn>
      <v-btn small icon @click="startJSONUpload(onUploaded)()">
        <v-icon small>mdi-upload</v-icon>
      </v-btn>
    </v-toolbar>
    <vf-fields-renderer
      v-show="mode === 'editor'"
      :options="{formClass:'fill-height'}"
      :fields="formBuilderTreeview"
      v-model="schema"
    ></vf-fields-renderer>
    <div v-show="mode === 'view'">
        <v-system-bar dark :color="blocklyError ? 'red' : 'primary' ">
            Form Preview <span class="red--text text--lighten-3">{{ blocklyError ? '(has errors)':'' }}</span>
        </v-system-bar>
        <vuetify-formjson v-model="previewValues" v-bind="previewProps"></vuetify-formjson>
    </div>
    <v-card light v-show="mode === 'blockly'" flat class="fill-height">
        <v-system-bar dark :color="blocklyError ? 'red' : 'primary' ">
            <v-btn class="right" icon small @click="showCode = !showCode">
            <v-icon small>{{ showCode ? 'mdi-eye':'mdi-code-braces-box' }}</v-icon>
            </v-btn>Define functions and callbacks  <span class="red--text text--lighten-3">{{ blocklyError ? '(has errors)':'' }}</span>
            <v-spacer></v-spacer>
            <v-dialog v-if="blocklyError" v-model="blocklyErrorDialog">
                <template v-slot:activator="{on}">
                    <v-btn small icon v-on="on"><v-icon small>mdi-flask-remove-outline</v-icon></v-btn>
                </template>
                <v-card dark color="red">
                    <v-card-title>{{ blocklyError.message }}</v-card-title>
                    <v-card-text>
                        {{ blocklyError.stack }}
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-system-bar>
        <v-card-text class="ma-0 pa-0 fill-height">
            <vf-blockly-input
            ref="blocklyEditor"
            v-if="! showCode"
            :field="blocklyField"
            v-model="codeModel"
            ></vf-blockly-input>
            <vf-code-input v-if="showCode" v-model="blocklyJSCode" :field="{}"></vf-code-input>
        </v-card-text>
    </v-card>
    <v-card light v-if="mode === 'json'" flat class="fill-height">
        <v-system-bar dark color="primary">
            Manual FormBuilder edit
            <v-spacer></v-spacer>
        </v-system-bar>
        <v-card-text class="ma-0 pa-0 fill-height">
            <vf-code-input v-show="mode === 'json'" :field="{}" v-model="jsonString"></vf-code-input>
        </v-card-text>
    </v-card>
  </div>
</template>

<script>
import FormJSONBuilder from './builder'
import { JSONWorkspace } from './../mixins'
import confirm from './../../Confirm.vue'
import TreeModel from 'tree-model'
import Blockly from 'blockly'
import FormJSONBuilderRenderer from './generator'
import { GenerateJSCode } from './../Blockly/generator'
import BuilderJSONWorkspaceButtons from './workspace'

export default {
    components: {
        confirm
    },
    mixins: [FormJSONBuilder, FormJSONBuilderRenderer, JSONWorkspace, BuilderJSONWorkspaceButtons],
    name: 'vf-formjson-input',
    props: {
        id: String,
        field: Object,
        value: {
            type: Object,
            default: () => ({})
        }
    },
    data () {
        const treeModel = new TreeModel({})
        const tree = this.field.tree
            ? this.field.tree
            : {
                id: 'formjson',
                type: 'vf-fields-renderer',
                children: []
            }
        const items = [treeModel.parse(JSON.parse(JSON.stringify(tree)))] // use a copy to keep this.tree intact
        return {
            inputs: this.field.inputs,
            formjson: {},
            treeModel,
            devalue: this.value,
            schema: {
                builder: items
            },
            formBuilderTreeview: {
                builder: {
                    type: 'group',
                    group: 'treeview',
                    iconProps: {
                        small: true
                    },
                    btnProps: {
                        small: true
                    },
                    drawerProps: {
                        width: 400,
                        right: true
                    },
                    formProps: {
                        class: 'pa-4',
                        options: {
                            type: 'col',
                            dense: true,
                            small: true
                        }
                    },
                    class: 'fill-height ma-2',
                    decorator: {
                        id: 'model.id',
                        title: 'model.title',
                        type: 'model.type',
                        label: '[:type] #:id'
                    },
                    actions: this.getFormJSONBuilderActionProviderForTreeview(),
                    props: {
                        dense: true,
                        'item-key': 'id',
                        'item-text': 'title',
                        shaped: true,
                        hoverable: true,
                        'return-object': true
                    }
                }
            },
            showCodeEditor: false,
            mode: 'editor',
            codeModel: {},
            blocklyErrorDialog: false,
            blocklyField: {
                class: 'fill-height'
            },
            blocklyError: null,
            fullscreenCodeEditor: false,
            showCode: false,
            blocklyJSCode: '',
            jsonString: '',
            previewProps: {},
            previewValues: {}
        }
    },
    methods: {
        updateFormJSONInput () {
            this.formjson = this.getFormJSONFromSchema()
            const formId = this.schema.builder[0].model.id
            try {
                const compiledForm = this.CompileFormJSONSchemaWithCode(
                    this,
                    this.formjson,
                    this.codeModel,
                    {}
                )
                this.previewProps = {
                    fields: compiledForm[formId].fields,
                    options: compiledForm[formId].options,
                    id: this.id + '-preview'
                }
                this.blocklyError = null
            } catch (e) {
                this.blocklyError = e
            }
            this.jsonString = JSON.stringify(
                {
                    schema: this.formjson,
                    code: this.codeModel,
                    value: this.previewValues
                },
                null,
                2
            )

            this.$emit('input', {
                schema: this.formjson,
                code: this.codeModel,
                value: this.previewValues
            })
        }
    },
    mounted () {
        this.updateFormJSONInput()
    },
    watch: {
        mode () {
            if (this.mode === 'blockly') {
                this.$nextTick(() => {
                    if (this.$refs.blocklyEditor) {
                        this.$refs.blocklyEditor.refreshSize()
                        this.$refs.blocklyEditor.updateBlocks()
                    }
                })
            }
        },
        schema: {
            deep: true,
            handler () {
                this.updateFormJSONInput()
                this.$emit('update:schema', this.schema)
            }
        },
        codeModel () {
            this.updateFormJSONInput()
            this.blocklyJSCode = GenerateJSCode(
                Blockly,
                this.codeModel,
                this.field.blocks
            )
            this.$emit('update:code', this.schema)
        }
    }
}
</script>
