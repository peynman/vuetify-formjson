import InputTextSettings from './settings/TextInput'
import InputSwitchSettings from './settings/SwitchInput'
import InputFieldsRendererSettings from './settings/FieldsRenderer'
import InputSelectSettings from './settings/SelectInput'
import InputRangeSettings from './settings/RangeInput'
import InputRadioGroupSettings from './settings/RadioGroupInput'

import ColorInput from './settings/ColorInput'
import ButtonGroupInput from './settings/ButtonGroupInput'
import AutocompleteInput from './settings/AutocompleteInput'
import MultiTextInput from './settings/MultiTextInput'
import JSONInput from './settings/JSONInput'
import CheckboxInput from './settings/CheckboxInput'
import ObjectsListInput from './settings/ObjectsListInput'
import BitwiseFlagsInput from './settings/BitwiseFlagsInput'
import ImageUploadInput from './settings/ImageUploadInput'
import DatatableInput from './settings/DatatableInput'
import ButtonInput from './settings/ButtonInput'

import GroupSingleExpansion from './settings/GroupSingleExpansion'
import GroupExpansion from './settings/GroupExpansion'
import GroupTabs from './settings/GroupTabs'
import GroupTreeview from './settings/GroupTreeview'
import GroupSettings from './settings/Group'

export default {
    props: {
        inputs: Array,
        settings: Object
    },
    computed: {
        inputTypeSettings: function () {
            return {
                'vf-text-input': InputTextSettings,
                'vf-fields-renderer': InputFieldsRendererSettings,
                'vf-switch-input': InputSwitchSettings,
                'vf-select-input': InputSelectSettings,
                'vf-range-input': InputRangeSettings,
                'vf-radio-group-input': InputRadioGroupSettings,
                'vf-color-input': ColorInput,
                'vf-button-group-input': ButtonGroupInput,
                'vf-autocomplete-input': AutocompleteInput,
                'vf-multi-text-input': MultiTextInput,
                'vf-json-input': JSONInput,
                'vf-checkbox-input': CheckboxInput,
                'vf-bitwise-flags-input': BitwiseFlagsInput,
                'vf-objects-list-input': ObjectsListInput,
                'vf-datatable-input': DatatableInput,
                'vf-group-single-exp': GroupSingleExpansion,
                'vf-group-expansion': GroupExpansion,
                'vf-group-tabs': GroupTabs,
                'vf-group-treeview': GroupTreeview,
                'vf-button-input': ButtonInput,
                'vf-image-upload-input': ImageUploadInput,
                group: GroupSettings
            }
        }
    },
    methods: {
        getRemoveAction: function (items, item) {
            return {
                type: 'menu',
                iconProps: {
                    small: true,
                    color: 'red'
                },
                icon: 'mdi-minus-box',
                props: {
                    small: true,
                    icon: true
                },
                fields: {
                    cancel: {
                        type: 'input',
                        input: 'button',
                        label: 'Cancel',
                        class: 'col-12 ma-0',
                        props: {
                            text: true,
                            color: 'primary'
                        }
                    },
                    accept: {
                        type: 'input',
                        input: 'button',
                        label: 'Remove',
                        class: 'col-12 ma-0',
                        props: {
                            text: true,
                            color: 'red',
                            click: () => {
                                item.drop()
                            }
                        }
                    }
                }
            }
        },
        getSettingsAction: function (items, item, onUpdated) {
            const fields = this.inputTypeSettings[item.model.type] ? this.inputTypeSettings[item.model.type] : {}
            return {
                type: 'formjson',
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
                        newCopy.id = 'rnd' + Math.random() * Number.MAX_SAFE_INTEGER
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
                type: 'menu',
                icon: 'add_box',
                iconProps: {
                    color: 'success',
                    small: true
                },
                props: {
                    icon: true,
                    small: true
                },
                fields: {
                    id: {
                        type: 'input',
                        input: 'text',
                        label: 'Field ID'
                    },
                    type: {
                        type: 'input',
                        input: 'select',
                        label: 'Field type',
                        objects: inputs
                    },
                    add: {
                        type: 'input',
                        input: 'button',
                        label: 'Add',
                        class: 'mt-4 col-12',
                        props: {
                            small: true,
                            color: 'success',
                            outlined: true,
                            click: () => {
                                if (itemParent.value && itemParent.value.add) {
                                    const newItem = {
                                        id: itemParent.value.add.id,
                                        title: itemParent.value.add.title,
                                        type: itemParent.value.add.type
                                    }
                                    const newModel = this.treeModel.parse(newItem)
                                    newModel.value = {
                                        settings: {
                                            id: itemParent.value.add.id
                                        }
                                    }
                                    itemParent.addChild(newModel)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
