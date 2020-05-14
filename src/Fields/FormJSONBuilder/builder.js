import TextInputSettings from './settings/TextInput'
import SwitchInputSettings from './settings/SwitchInput'
import FieldsRendererSettings from './settings/FieldsRenderer'
import InputSelectSettings from './settings/SelectInput'
import RangeInputSettings from './settings/RangeInput'
import RadioGroupInputSettings from './settings/RadioGroupInput'

import ColorInputSettings from './settings/ColorInput'
import ButtonGroupInputSettings from './settings/ButtonGroupInput'
import AutocompleteInputSettings from './settings/AutocompleteInput'
import MultiTextInputSettings from './settings/MultiTextInput'
import JSONInputSettings from './settings/JSONInput'
import CheckboxInputSettings from './settings/CheckboxInput'
import ObjectsListInputSettings from './settings/ObjectsListInput'
import BitwiseFlagsInputSettings from './settings/BitwiseFlagsInput'
import ImageUploadInputSettings from './settings/ImageUploadInput'
import DatatableInputSettings from './settings/DatatableInput'
import ButtonInput from './settings/ButtonInput'

import GroupSingleExpansionSettings from './settings/GroupSingleExpansion'
import GroupExpansionSettings from './settings/GroupExpansion'
import GroupTabsSettings from './settings/GroupTabs'
import GroupTreeviewSettings from './settings/GroupTreeview'
import GroupSettings from './settings/Group'

export default {
    computed: {
        inputTypeSettings: function () {
            return {
                'vf-text-input': new TextInputSettings(),
                'vf-fields-renderer': new FieldsRendererSettings(),
                'vf-switch-input': new SwitchInputSettings(),
                'vf-select-input': InputSelectSettings,
                'vf-range-input': new RangeInputSettings(),
                'vf-radio-group-input': new RadioGroupInputSettings(),
                'vf-color-input': new ColorInputSettings(),
                'vf-button-group-input': new ButtonGroupInputSettings(),
                'vf-autocomplete-input': new AutocompleteInputSettings(),
                'vf-multi-text-input': new MultiTextInputSettings(),
                'vf-json-input': new JSONInputSettings(),
                'vf-checkbox-input': new CheckboxInputSettings(),
                'vf-bitwise-flags-input': new BitwiseFlagsInputSettings(),
                'vf-objects-list-input': new ObjectsListInputSettings(),
                'vf-datatable-input': new DatatableInputSettings(),
                'vf-group-single-exp': new GroupSingleExpansionSettings(),
                'vf-group-expansion': new GroupExpansionSettings(),
                'vf-group-tabs': new GroupTabsSettings(),
                'vf-group-treeview': new GroupTreeviewSettings(),
                'vf-button-input': new ButtonInput(),
                'vf-image-upload-input': new ImageUploadInputSettings(),
                group: new GroupSettings(),
                ...this.settings
            }
        }
    },
    methods: {
        getRemoveAction: function (items, item) {
            return {
                type: 'confirm',
                iconProps: {
                    small: true,
                    color: 'red'
                },
                icon: 'mdi-minus-box',
                props: {
                    small: true,
                    icon: true
                },
                confirm: 'Delete',
                message: 'Are you sure you want to remove item ' + item.model.id + '?',
                callback: (confirm) => {
                    if (confirm) {
                        item.drop()
                    }
                }
            }
        },
        getSettingsAction: function (items, item, onUpdated) {
            const fields = this.inputTypeSettings[item.model.type] ? this.inputTypeSettings[item.model.type] : {}
            const form = {
                type: 'drawer',
                onUpdated,
                iconProps: {
                    color: 'primary',
                    small: true
                },
                icon: 'mdi-settings',
                props: {
                    icon: true,
                    small: true
                },
                fields
            }
            if (fields.getSettingsFormFields) {
                form.fields = fields.getSettingsFormFields()
            }

            return form
        },
        getDuplicateAction: function (items, item) {
            return {
                type: 'button',
                icon: 'mdi-content-duplicate',
                iconProps: {
                    small: true
                },
                props: {
                    icon: true,
                    small: true,
                    click: () => {
                        const newCopy = JSON.parse(JSON.stringify({ ...item.model }))
                        newCopy.id = ('rnd' + Math.random() * Number.MAX_SAFE_INTEGER).substr(0, 10)
                        const newModel = this.treeModel.parse(newCopy)
                        newModel.value = JSON.parse(JSON.stringify({ ...item.value }))
                        if (newModel.value.settings && newModel.value.settings.id) {
                            newModel.value.settings.id = newCopy.id
                        } else {
                            newModel.value = {
                                settings: {
                                    id: newCopy.id
                                }
                            }
                        }
                        item.parent.addChild(newModel)
                    }
                }
            }
        },
        getAddAction: function (items, itemParent, inputs) {
            if (!inputs) { inputs = this.inputs }
            return {
                type: 'dialog',
                icon: 'add_box',
                iconProps: {
                    color: 'success',
                    small: true
                },
                props: {
                    icon: true,
                    small: true
                },
                formProps: {
                    options: {
                        type: 'component',
                        component: 'v-card'
                    }
                },
                fields: {
                    type: {
                        type: 'input',
                        input: 'buttons-list',
                        label: 'Field type',
                        class: 'mt-3',
                        decorator: {
                            id: 'id',
                            title: 'title',
                            label: ':title'
                        },
                        objects: inputs,
                        props: {
                            outlined: true,
                            class: 'ma-1'
                        },
                        once: true,
                        click: (clicked) => {
                            const newItem = {
                                id: ('rnd' + Math.random() * Number.MAX_SAFE_INTEGER).substr(0, 10),
                                title: clicked.title,
                                type: clicked.id
                            }
                            const newModel = this.treeModel.parse(newItem)
                            newModel.value = {
                                settings: {
                                    tabs: {
                                        fieldProperties: {
                                            id: newItem.id
                                        }
                                    }
                                }
                            }
                            itemParent.addChild(newModel)
                        }
                    }
                }
            }
        },
        getMoveAction: function (items, item, inputs) {
            return {
                type: 'menu',
                iconProps: {
                    small: true,
                    color: 'red'
                },
                icon: 'mdi-format-vertical-align-center',
                props: {
                    small: true,
                    icon: true
                },
                formProps: {
                    options: {
                        type: 'component',
                        component: 'v-card',
                        formClass: 'ma-0 px-0 py-0',
                        wrap: {
                            component: 'v-list',
                            class: 'pa-0',
                            props: {
                                dense: true
                            },
                            inside: {
                                component: 'v-list-item',
                                props: {
                                    dense: true
                                }
                            }
                        }
                    }
                },
                fields: {
                    first: {
                        type: 'input',
                        input: 'button',
                        props: {
                            icon: true,
                            small: true,
                            click: () => {
                                item.setIndex(0)
                            }
                        },
                        iconProps: {
                            small: true
                        },
                        icon: 'mdi-format-vertical-align-top'
                    },
                    up: {
                        type: 'input',
                        input: 'button',
                        props: {
                            icon: true,
                            small: true,
                            click: () => {
                                if (item.getIndex() > 0) {
                                    item.setIndex(item.getIndex() - 1)
                                }
                            }
                        },
                        iconProps: {
                            small: true
                        },
                        icon: 'mdi-transfer-up'
                    },
                    down: {
                        type: 'input',
                        input: 'button',
                        props: {
                            icon: true,
                            small: true,
                            click: () => {
                                if (item.getIndex() < item.parent.children.length - 1) {
                                    item.setIndex(item.getIndex() + 1)
                                }
                            }
                        },
                        iconProps: {
                            small: true
                        },
                        icon: 'mdi-transfer-down'
                    },
                    bottom: {
                        type: 'input',
                        input: 'button',
                        props: {
                            icon: true,
                            small: true,
                            click: () => {
                                item.setIndex(item.parent.children.length - 1)
                            }
                        },
                        iconProps: {
                            small: true
                        },
                        icon: 'mdi-format-vertical-align-bottom'
                    }
                }
            }
        },
        getFormJSONFromSchema () {
            const formjson = {}
            const iterateAndEvaluateItems = (items, ref) => {
                items.forEach(item => {
                    let appendChildrenProperty = ''
                    if (item.model.type) {
                        if (item.model.type.endsWith('input')) {
                            const idSlices = item.model.type.split('-')
                            ref[item.model.id] = {
                                type: 'input',
                                input: idSlices.slice(1, idSlices.length - 1).join('-'),
                                ...(item.value && item.value.settings
                                    ? item.value.settings
                                    : {})
                            }
                        } else if (item.model.type.startsWith('vf-group-')) {
                            appendChildrenProperty = 'groups'
                            const idSlices = item.model.type.split('-')
                            ref[item.model.id] = {
                                type: 'group',
                                group: idSlices.slice(2).join('-'),
                                ...(item.value && item.value.settings
                                    ? item.value.settings
                                    : {}),
                                [appendChildrenProperty]: {}
                            }
                        } else if (item.model.type === 'group') {
                            appendChildrenProperty = 'fields'
                            ref[item.model.id] = {
                                ...(item.value && item.value.settings
                                    ? item.value.settings
                                    : {}),
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

                    if (this.inputTypeSettings[item.model.type] && this.inputTypeSettings[item.model.type].getInputPropsFromFromSettings) {
                        ref[item.model.id] = {
                            ...ref[item.model.id],
                            ...this.inputTypeSettings[item.model.type].getInputPropsFromFromSettings((item.value && item.value.settings ? item.value.settings : {})),
                            tabs: null
                        }
                    }

                    if (item.children) {
                        iterateAndEvaluateItems(
                            item.children,
                            ref[item.model.id][appendChildrenProperty]
                        )
                    }
                })
            }

            if (this.schema.builder) {
                iterateAndEvaluateItems(this.schema.builder, formjson)
            }
            return formjson
        },
        getFormSchemaFromFormJSON (formjson) {
            const getTree = (data, emptyType = null) => {
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
                    const newModel = this.treeModel.parse(newItem)
                    let children = []
                    if (data[prop].fields) {
                        children = getTree(data[prop].fields)
                    } else if (data[prop].groups) {
                        children = getTree(data[prop].groups, 'group')
                    }
                    children.forEach(child => {
                        newModel.addChild(child)
                    })

                    const settingsVals = {}
                    const notDataKeys = [
                        'fields',
                        'groups',
                        'group',
                        'type',
                        'input',
                        'component'
                    ]
                    for (const inner in data[prop]) {
                        if (notDataKeys.indexOf(inner) < 0) {
                            settingsVals[inner] = data[prop][inner]
                        }
                    }

                    const eventsVals = {}
                    const findEvents = (item, parent) => {
                        for (const prop in item) {
                            if (prop === 'v-on') {
                                let eventPropertyName = 'events'
                                if (parent !== 'props') {
                                    eventPropertyName = prop.substr(0, 'Props'.length) + 'Events'
                                }
                                if (!eventsVals[eventPropertyName]) {
                                    eventsVals[eventPropertyName] = []
                                }
                                for (const event in item[prop]) {
                                    // console.log('events', prop, item[prop])
                                    eventsVals[eventPropertyName].push({
                                        event: event,
                                        function: item[prop][event]
                                    })
                                }
                            } else if (typeof item[prop] === 'object') {
                                findEvents(item[prop], prop)
                            }
                        }
                    }
                    findEvents(settingsVals, 'props')
                    newModel.value = {
                        settings: {
                            tabs: {
                                fieldProperties: settingsVals,
                                eventHandlers: eventsVals
                            }
                        }
                    }

                    tree.push(newModel)
                }
                return tree
            }
            return getTree(formjson)
        },
        getFormJSONBuilderActionProviderForTreeview () {
            return {
                hasAction: (slot, item) => {
                    return slot === 'prepend' || !item.isRoot()
                },
                getActions: (slot, item) => {
                    const actions = {}
                    switch (slot) {
                    case 'append':
                        if (!item.isRoot()) {
                            actions.duplicate = this.getDuplicateAction(
                                this.schema.builder,
                                item
                            )
                            actions.move = this.getMoveAction(
                                this.schema.builder,
                                item
                            )
                        }
                        break
                    case 'prepend':
                        if (item.model.type === 'vf-fields-renderer') {
                            actions.add = this.getAddAction(this.schema.builder, item)
                        } else {
                            actions.remove = this.getRemoveAction(
                                this.schema.builder,
                                item
                            )
                        }
                        if (item.model.type.startsWith('group')) {
                            actions.add = this.getAddAction(this.schema.builder, item)
                        }
                        if (item.model.type.startsWith('vf-group-')) {
                            actions.add = this.getAddAction(this.schema.builder, item, this.inputs.filter((t) => t.id === 'group'))
                        }
                        actions.settings = this.getSettingsAction(
                            this.schema.builder,
                            item,
                            vals => {
                                if (vals && vals.tabs && vals.tabs.fieldProperties && vals.tabs.fieldProperties.id) {
                                    if (item.model.id !== vals.tabs.fieldProperties.id) {
                                        item.model.id = vals.tabs.fieldProperties.id
                                    }
                                }
                            }
                        )
                        break
                    }

                    return actions
                }
            }
        }
    }
}
