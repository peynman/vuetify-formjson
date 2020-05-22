import {
    BaseInputSettings,
    TextSettings,
    CheckboxSettings
} from './comon'

export default class FieldsRenderSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return [
            {
                id: 'options',
                title: 'Component events',
                events: [
                    {
                        id: 'input',
                        title: 'Triggered when value inside the form is changed'
                    }
                ]
            }
        ]
    }

    getInputProperties () {
        return {
            id: {
                type: 'input',
                input: 'text',
                label: 'ID',
                class: 'col-12 ma-0 ps-0 pe-0',
                updateKeyCodes: [13]
            },
            label: {
                type: 'input',
                input: 'text',
                label: 'Label',
                class: 'col-12 ma-0 ps-0 pe-0'
            },
            options: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    formClass: TextSettings('Form Class'),
                    type: {
                        type: 'input',
                        input: 'select',
                        label: 'Type',
                        objects: [
                            {
                                id: 'row',
                                title: 'Row'
                            },
                            {
                                id: 'col',
                                title: 'Column'
                            },
                            {
                                id: 'component',
                                title: 'Custom Component'
                            }
                        ],
                        decorator: {
                            id: 'id',
                            title: 'title',
                            label: ':title'
                        }
                    },
                    component: TextSettings('Component'),
                    wrap: {
                        options: {
                            type: 'col',
                            formClass: 'ma-0 pa-0'
                        },
                        fields: {
                            enabled: CheckboxSettings('User Wrapper'),
                            class: TextSettings('Wrapper Class'),
                            component: TextSettings('Wrapper Component'),
                            inside: {
                                options: {
                                    type: 'col',
                                    formClass: 'ma-0 pa-0'
                                },
                                fields: {
                                    class: TextSettings('Wrapper inside Class'),
                                    component: TextSettings('Wrapper inside Component')
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
