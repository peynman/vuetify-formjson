<template>
  <div class="fill-height">
    <v-overlay :value="showCodeEditor">
      <v-sheet>
        <v-container>
          <v-card
            light
            :height="fullscreenCodeEditor ? fullscreenDim.height : '600'"
            :width="fullscreenCodeEditor ? fullscreenDim.width : '800'"
          >
            <!-- :class="`${fullscreenCodeEditor ? 'col-12 ma-0 pa-0' : 'col-sm-12 col-md-10'}`" -->
            <v-system-bar dark color="primary">
              <v-btn class="right" icon small @click="showCode = !showCode">
                <v-icon small>{{ showCode ? 'mdi-eye':'mdi-code-braces-box' }}</v-icon>
              </v-btn>Define functions and callbacks
              <v-spacer></v-spacer>
              <v-btn class="right" icon small @click="toggleBlocklyFullscreen">
                <v-icon
                  small
                >{{ fullscreenCodeEditor ? 'mdi-window-restore':'mdi-window-maximize' }}</v-icon>
              </v-btn>
              <v-btn class="right" icon small @click="showCodeEditor = false">
                <v-icon small>mdi-close</v-icon>
              </v-btn>
            </v-system-bar>
            <v-card-text class="ma-0 pa-0 fill-height">
              <vf-blockly-input
                ref="blocklyEditor"
                v-if="! showCode"
                :field="blocklyField"
                v-model="codeModel"
              ></vf-blockly-input>
              <code v-if="showCode"></code>
            </v-card-text>
          </v-card>
        </v-container>
      </v-sheet>
    </v-overlay>
    <confirm ref="confirm"></confirm>
    <v-row class="ms-2 me-2 mb-0 mt-0">
      <label>
        <v-btn
          :color="showCodeEditor ? 'warning':'success'"
          icon
          small
          @click="showCodeEditor = true"
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
    </v-row>
    <vf-fields-renderer
      :options="{formClass:'fill-height'}"
      :fields="formBuilderTreeview"
      v-model="schema"
    ></vf-fields-renderer>
  </div>
</template>

<script>
import FormJSONBuilder from './builder'
import { JSONWorkspace } from './../mixins'
import confirm from './../../Confirm.vue'
import TreeModel from 'tree-model'
import CompileFormJSONSchemaWithCodeLib from './generator'

export default {
    components: {
        confirm
    },
    mixins: [FormJSONBuilder, JSONWorkspace],
    name: 'vf-formjson-input',
    props: {
        id: String,
        field: Object,
        value: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        fullscreenDim () {
            return { width: window.innerWidth, height: window.innerHeight }
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
            codeModel: {},
            blocklyField: {
                class: 'fill-height'
            },
            fullscreenCodeEditor: false,
            showCode: false
        }
    },
    methods: {
        toggleBlocklyFullscreen () {
            this.fullscreenCodeEditor = !this.fullscreenCodeEditor
            this.$nextTick(() => {
                this.$refs.blocklyEditor.refreshSize()
            })
        },
        updateFormJSONInput () {
            this.formjson = this.getFormJSONFromSchema()
            this.$emit('input', {
                schema: this.formjson,
                code: this.codeModel
            })
        },
        onUploaded (data) {
            const tree = this.getFormSchemaFromFormJSON(data.schema)
            this.codeModel = data.code
            this.schema = { builder: tree }
        },
        onDownload () {
            this.startJSONDownload(
                JSON.stringify(
                    {
                        schema: this.formjson,
                        code: this.codeModel
                    },
                    null,
                    2
                )
            )()
        },
        onReset () {
            this.$refs.confirm
                .open(
                    'Reset',
                    'Are you sure you want to reset the Schema and Actions?',
                    {
                        color: 'red'
                    }
                )
                .then(confirm => {
                    if (confirm) {
                        const tree = this.field.tree
                            ? this.field.tree
                            : {
                                id: 'formjson',
                                type: 'vf-fields-renderer',
                                children: []
                            }
                        this.schema = {
                            builder: [this.treeModel.parse(JSON.parse(JSON.stringify(tree)))]
                        }
                        this.codeModel = ''
                    }
                })
        },
        CompileFormJSONSchemaWithCode (component, value, blocklyBlocks) {
            return CompileFormJSONSchemaWithCodeLib(
                component,
                value.schema,
                value.code,
                blocklyBlocks
            )
        }
    },
    watch: {
        schema: {
            deep: true,
            handler () {
                this.updateFormJSONInput()
                this.$emit('update:schema', this.schema)
            }
        },
        codeModel () {
            this.updateFormJSONInput()
            this.$emit('update:code', this.schema)
        }
    }
}
</script>
