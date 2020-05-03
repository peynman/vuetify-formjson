export const CommonInputEssentials = {
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
    class: {
        type: 'input',
        input: 'text',
        label: 'Class',
        class: 'col-12 ma-0 ps-0 pe-0'
    }
}

export const CommonInputDecorates = {
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
    hint: {
        type: 'input',
        input: 'text',
        label: 'Hint',
        class: 'col-12 ma-0 ps-0 pe-0'
    },
    placeholder: {
        type: 'input',
        input: 'text',
        label: 'Placeholder',
        class: 'col-12 ma-0 ps-0 pe-0'
    },
    height: {
        type: 'input',
        input: 'text',
        label: 'Placeholder',
        class: 'col-12 ma-0 ps-0 pe-0'
    }
}

export const TextInputIconProps = {
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
    }
}

export const TextInputDisplayProps = {
    'full-width': {
        type: 'input',
        input: 'switch',
        class: 'col-4 ma-0 pe-0 ps-0',
        label: 'Full width'
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
    reverse: {
        type: 'input',
        input: 'switch',
        class: 'col-4 ma-0 pe-0 ps-0',
        label: 'Reverse'
    }
}

export const MessagesTab = {
    type: 'group',
    group: 'tabs',
    groups: {
        messages: {
            label: 'Messages',
            fields: {
                messages: {
                    type: 'input',
                    input: 'datatable',
                    class: 'col-12 ma-0',
                    props: {
                        'disable-pagination': true,
                        dense: true
                    },
                    columns: [
                        {
                            column: 'message',
                            title: 'Message'
                        }
                    ],
                    create: {
                        title: 'Add new message to messages list',
                        fields: {
                            message: {
                                type: 'input',
                                input: 'text',
                                class: 'col-12 ma-0',
                                label: 'Message'
                            }
                        }
                    },
                    edit: {},
                    remove: {}
                }
            }
        },
        'error-messages': {
            label: 'Errors',
            fields: {
                messages: {
                    type: 'input',
                    input: 'datatable',
                    class: 'col-12 ma-0',
                    props: {
                        'disable-pagination': true,
                        dense: true
                    },
                    columns: [
                        {
                            column: 'message',
                            title: 'Message'
                        }
                    ],
                    create: {
                        title: 'Add new message to error messages list',
                        fields: {
                            message: {
                                type: 'input',
                                input: 'text',
                                class: 'col-12 ma-0',
                                label: 'Message'
                            }
                        }
                    },
                    edit: {},
                    remove: {}
                }
            }
        },
        'success-messages': {
            label: 'Success',
            fields: {
                messages: {
                    type: 'input',
                    input: 'datatable',
                    class: 'col-12 ma-0',
                    props: {
                        'disable-pagination': true,
                        dense: true
                    },
                    columns: [
                        {
                            column: 'message',
                            title: 'Message'
                        }
                    ],
                    create: {
                        title: 'Add new message to success messages list',
                        fields: {
                            message: {
                                type: 'input',
                                input: 'text',
                                class: 'col-12 ma-0',
                                label: 'Message'
                            }
                        }
                    },
                    edit: {},
                    remove: {}
                }
            }
        }
    }
}

export const CommonInputProps = {
    'loader-height': {
        type: 'input',
        input: 'text',
        class: 'col-6 ps-0 pe-0',
        label: 'Loader indicator height'
    },
    'hide-details': {
        type: 'input',
        input: 'select',
        class: 'col-6 ps-0 pe-0',
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
