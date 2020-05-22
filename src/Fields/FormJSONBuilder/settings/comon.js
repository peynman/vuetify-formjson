export class BaseInputSettings {
    getInputPropsFromSettings (settings) {
        // grab a copy of field properties in this fields settings
        let inputProperties = { ...getNestedPathValue(settings, 'tabs.fieldProperties') }
        // find events too
        const inputEventGroups = getNestedPathValue(settings, 'tabs.eventHandlers')
        // add all events to outputed properties
        if (inputEventGroups) {
            if (!inputProperties) {
                inputProperties = {}
            }
            for (const gid in inputEventGroups) {
                if (!inputProperties[gid]) {
                    inputProperties[gid] = {
                        'v-on': {}
                    }
                }
                if (!inputProperties[gid]['v-on']) {
                    inputProperties[gid]['v-on'] = {}
                }
                inputEventGroups[gid].forEach((e) => {
                    inputProperties[gid]['v-on'][e.event] = e.function
                })
            }
        }
        return inputProperties
    }

    getSettingsFormFields () {
        return createSettingsFrom(
            this.getInputProperties(),
            this.getInputEventGroupsList(),
            this.getInputSlots()
        )
    }
}

export function getNestedPathValue (item, path) {
    const parts = path.split('.')
    let val = item
    parts.forEach((p) => {
        if (val) {
            val = val[p]
        }
    })
    return val
}

export function SwitchSettings (label) {
    return {
        type: 'input',
        input: 'switch',
        class: 'col-4 mx-0 px-0',
        label
    }
}

export function TextSettings (label) {
    return {
        type: 'input',
        input: 'text',
        class: 'col-12 mx-0 px-0',
        label
    }
}

export function CheckboxSettings (label, hint = undefined) {
    return {
        type: 'input',
        input: 'checkbox',
        class: 'col-12 mx-0 px-0',
        label,
        props: {
            hint
        }
    }
}

export function ColorSettings (label) {
    return {
        type: 'input',
        input: 'color',
        class: 'col-12 mx-0 px-0',
        label
    }
}

export function createEventsDatatableInputForSettingsForm (title, events) {
    return {
        type: 'input',
        input: 'datatable',
        label: title,
        props: {
            'show-select': true
        },
        columns: [
            {
                title: 'Event',
                column: 'event',
                sortable: true,
                width: 10
            },
            {
                title: 'Function',
                column: 'function',
                sortable: true,
                width: 10
            }
        ],
        remove: {
            title: 'Are you sure you want to remove items?',
            accept: 'Yes',
            cancel: 'Cancel'
        },
        edit: {},
        create: {
            title: 'Create new Event callback',
            options: {
                type: 'col',
                formClass: 'mb-4'
            },
            fields: {
                event: {
                    type: 'input',
                    input: 'select',
                    label: 'Event',
                    props: {
                        placeholder: 'Choose an event to trigger a function with'
                    },
                    decorator: {
                        id: 'id',
                        title: 'title',
                        label: ':id',
                        subheader: ':title'
                    },
                    objects: events
                },
                function: {
                    type: 'input',
                    input: 'text',
                    label: 'Function',
                    props: {
                        placeholder: 'Function name to call when the event is triggered'
                    }
                }
            }
        }
    }
}

export function createSettingsFrom (fields, events, slots) {
    const eventFields = {}
    events.forEach((eg) => {
        eventFields[eg.id] = createEventsDatatableInputForSettingsForm(eg.title, eg.events)
    })

    return {
        tabs: {
            type: 'group',
            group: 'tabs',
            groups: {
                fieldProperties: {
                    label: 'Properties',
                    options: {
                        type: 'row',
                        formClass: 'ma-0 pa-0'
                    },
                    fields
                },
                eventHandlers: {
                    label: 'Events',
                    fields: {
                        ...eventFields
                    }
                },
                mappedSources: {
                    label: 'Sources',
                    options: {
                        type: 'col',
                        formClass: 'ma-0 pa-0'
                    },
                    fields: {
                        value: {
                            type: 'input',
                            input: 'text',
                            label: 'Component value $path',
                            props: {
                                hint: 'Map Value for the component to an object in host component'
                            }
                        },
                        props: {
                            type: 'input',
                            input: 'text',
                            label: 'Component Properties $path',
                            props: {
                                hint: 'Map Properties for the component to an object in host componenth'
                            }
                        }
                    }
                }
            }
        }
    }
}

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
