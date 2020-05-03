export default {
    id: {
        type: 'input',
        input: 'text',
        label: 'ID',
        class: 'col-12 ma-0 ps-0 pe-0',
        updateKeyCodes: [13]
    },
    class: {
        type: 'input',
        input: 'text',
        label: 'Class',
        class: 'col-12 ma-0 ps-0 pe-0'
    },
    options: {
        type: 'row',
        class: 'pa2',
        fields: {
            props: {
                type: 'row',
                fields: {
                    color: {
                        type: 'input',
                        input: 'color',
                        label: 'Color',
                        class: 'col-6 ma-0 ps-0 pe-0'
                    },
                    'background-color': {
                        type: 'input',
                        input: 'color',
                        label: 'Background Color',
                        class: 'col-6 ma-0 ps-0 pe-0'
                    },
                    prefix: {
                        type: 'input',
                        input: 'text',
                        class: 'col-4 ma-0 pa-0',
                        label: 'Prefix'
                    },
                    suffix: {
                        type: 'input',
                        input: 'text',
                        class: 'col-4 ma-0 pa-0',
                        label: 'Suffix'
                    },
                    'append-icon': {
                        type: 'input',
                        input: 'text',
                        class: 'col-4 ma-0 pa-0',
                        label: 'Append icon'
                    },
                    'append-outer-icon': {
                        type: 'input',
                        input: 'text',
                        label: 'Append outer icon'
                    },
                    'prepend-icon': {
                        type: 'input',
                        input: 'text',
                        label: 'Prepend icon'
                    },
                    'prepend-inner-icon': {
                        type: 'input',
                        input: 'text',
                        label: 'Prepend inner icon'
                    },
                    'clear-icon': {
                        type: 'input',
                        input: 'text',
                        label: 'Clear icon'
                    },
                    'loader-height': {
                        type: 'input',
                        input: 'text',
                        label: 'Loader indicator height'
                    },
                    'hide-details': {
                        type: 'input',
                        input: 'select',
                        objects: [
                            {
                                id: 'auto',
                                title: 'Auto'
                            },
                            {
                                id: true,
                                title: 'True'
                            },
                            {
                                id: false,
                                title: 'False'
                            }
                        ],
                        decorator: {
                            label: ':title'
                        },
                        class: 'col-12 ma-0 pe-0 ps-0',
                        label: 'Hide details'
                    },
                    loading: {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Loading'
                    },
                    readonly: {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Readonly'
                    },
                    reverse: {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Reverse'
                    },
                    'full-width': {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Full width'
                    },
                    light: {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Light'
                    },
                    dark: {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Dark'
                    },
                    rounded: {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Rounded'
                    },
                    filled: {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Filled'
                    },
                    outlined: {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Outlined'
                    },
                    shaped: {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Shaped'
                    },
                    solo: {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Solo'
                    },
                    'solo-inverted': {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Solo inverted'
                    },
                    clearable: {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Clearable'
                    },
                    disabled: {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Disabled'
                    },
                    'persistent-hint': {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Persistent hint'
                    },
                    error: {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Error'
                    },
                    success: {
                        type: 'input',
                        input: 'switch',
                        class: 'col-4 ma-0 pe-0 ps-0',
                        label: 'Success'
                    }
                }
            }
        }
    }
}
