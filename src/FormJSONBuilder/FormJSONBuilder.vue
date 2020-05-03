<template>
    <div class="fill-height">
        <confirm ref="confirm"></confirm>
        <v-row class="ms-2 me-2 mb-0 mt-0">
            <label>{{ label }}</label>
            <v-spacer></v-spacer>
            <v-btn small icon @click="onReset"><v-icon small>mdi-refresh</v-icon></v-btn>
            <v-btn small icon @click="onDownload"><v-icon small>mdi-download</v-icon></v-btn>
            <v-btn small icon @click="startJSONUpload(onUploaded)()"><v-icon small>mdi-upload</v-icon></v-btn>
        </v-row>
        <vf-fields-renderer
            :options="{class:'fill-height ma-0 pa-0'}"
            :fields="formBuilderTreeview"
            v-model="schema"
        ></vf-fields-renderer>
    </div>
</template>

<script>
import FormJSONBuilder from './builder'
import { JSONWorkspace } from './../mixins'
import confirm from './Confirm.vue'
import TreeModel from 'tree-model'

export default {
    components: {
        confirm
    },
    mixins: [FormJSONBuilder, JSONWorkspace],
    name: 'vuetify-formjson-builder',
    props: {
        label: {
            type: String,
            default: 'Create form schema with a treeview'
        },
        labelDownload: {
            type: String,
            default: 'Download builder data as a json file'
        },
        labelUpload: {
            type: String,
            default: 'Upload builder data with json file'
        },
        tree: {
            type: Object,
            default: () => ({
                id: 'formjson',
                type: 'vf-fields-renderer',
                children: []
            })
        },
        value: {
            type: Object,
            default: () => ({})
        }
    },
    data () {
        const treeModel = new TreeModel({})
        const items = [treeModel.parse(JSON.parse(JSON.stringify(this.tree)))] // use a copy to keep this.tree intact
        return {
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
                    actions: {
                        hasAction: (slot, item) => { return slot === 'prepend' || !item.isRoot() },
                        getActions: (slot, item) => {
                            const actions = {}
                            switch (slot) {
                            case 'append':
                                if (!item.isRoot()) {
                                    actions.duplicate = this.getDuplicateAction(this.schema.builder, item)
                                }
                                break
                            case 'prepend':
                                if (item.model.type === 'vf-fields-renderer') {
                                    actions.add = this.getAddAction(this.schema.builder, item)
                                } else {
                                    actions.remove = this.getRemoveAction(this.schema.builder, item)
                                }
                                if (item.model.type.startsWith('group')) {
                                    actions.add = this.getAddAction(this.schema.builder, item)
                                }
                                if (item.model.type.startsWith('vf-group-')) {
                                    actions.add = this.getAddAction(this.schema.builder, item, [this.inputs[this.inputs.length - 1]])
                                }
                                actions.settings = this.getSettingsAction(this.schema.builder, item, (vals) => {
                                    if (item.model.id !== vals.id && vals.id) {
                                        item.model.id = vals.id
                                    }
                                })
                                break
                            }

                            return actions
                        }
                    },
                    props: {
                        dense: true,
                        'item-key': 'id',
                        'item-text': 'title',
                        shaped: true,
                        hoverable: true,
                        'return-object': true
                    }
                }
            }
        }
    },
    computed: {
    },
    methods: {
        updateFormJSONInput () {
            const formjson = {}
            const iterateAndEvaluateItems = (items, ref) => {
                items.forEach((item) => {
                    let appendChildrenProperty = ''
                    if (item.model.type) {
                        if (item.model.type.endsWith('input')) {
                            const idSlices = item.model.type.split('-')
                            ref[item.model.id] = {
                                type: 'input',
                                input: idSlices.slice(1, idSlices.length - 1).join('-'),
                                ...(item.value && item.value.settings ? item.value.settings : {})
                            }
                        } else if (item.model.type.startsWith('vf-group-')) {
                            appendChildrenProperty = 'groups'
                            const idSlices = item.model.type.split('-')
                            ref[item.model.id] = {
                                type: 'group',
                                group: idSlices.slice(2).join('-'),
                                ...(item.value && item.value.settings ? item.value.settings : {}),
                                [appendChildrenProperty]: {}
                            }
                        } else if (item.model.type === 'group') {
                            appendChildrenProperty = 'fields'
                            ref[item.model.id] = {
                                ...(item.value && item.value.settings ? item.value.settings : {}),
                                [appendChildrenProperty]: {}
                            }
                        }
                    }
                    if (!ref[item.model.id]) {
                        appendChildrenProperty = 'fields'
                        ref[item.model.id] = {
                            ...(item.value && item.value.settings ? item.value.settings : {}),
                            [appendChildrenProperty]: {}
                        }
                    }

                    if (item.children) {
                        iterateAndEvaluateItems(item.children, ref[item.model.id][appendChildrenProperty])
                    }
                })
            }

            if (this.schema.builder) {
                iterateAndEvaluateItems(this.schema.builder, formjson)
            }
            this.formjson = formjson
            this.$emit('input', formjson)
        },
        onUploaded (data) {
            const self = this
            const tree = (function getTree (data, emptyType = null) {
                const tree = []
                for (const prop in data) {
                    let itemType = 'vf-fields-renderer'
                    if (data[prop].type) {
                        switch (data[prop].type) {
                        case 'input':
                            itemType = 'vf-' + data[prop].input + '-input'
                            break
                        case 'group':
                            itemType = 'vf-group-' + data[prop].group
                            break
                        case 'component':
                            itemType = data[prop].component
                            break
                        }
                    } else if (emptyType) {
                        itemType = emptyType
                    }
                    const newItem = {
                        id: prop,
                        type: itemType
                    }
                    const newModel = self.treeModel.parse(newItem)
                    let children = []
                    if (data[prop].fields) {
                        children = getTree(data[prop].fields)
                    } else if (data[prop].groups) {
                        children = getTree(data[prop].groups, 'group')
                    }
                    children.forEach((child) => {
                        newModel.addChild(child)
                    })

                    const settingsVals = {}
                    const notDataKeys = ['fields', 'groups', 'group', 'type', 'input', 'component']
                    for (const inner in data[prop]) {
                        if (notDataKeys.indexOf(inner) < 0) {
                            settingsVals[inner] = data[prop][inner]
                        }
                    }
                    newModel.value = {
                        settings: settingsVals
                    }

                    tree.push(newModel)
                }
                return tree
            })(data)
            this.schema = { builder: tree }
        },
        onDownload () {
            this.startJSONDownload(JSON.stringify(this.formjson, null, 2))()
        },
        onReset () {
            this.$refs.confirm.open('Reset', 'Are you sure you want to reset the schema?', { color: 'red' }).then((confirm) => {
                if (confirm) {
                    this.schema = { builder: [this.treeModel.parse(this.tree)] }
                }
            })
        }
    },
    watch: {
        schema: {
            deep: true,
            handler () {
                this.updateFormJSONInput()
                this.$emit('update:schema', this.schema)
            }
        }
    }
}
</script>
