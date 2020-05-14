export default {
    fields: {
        color: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Color',
            props: {
                hint: '**MISSING DESCRIPTION** - v-simple-checkbox',
                placeholder: 'undefined'
            }
        },
        dark: {
            type: 'input',
            input: 'switch',
            label: 'Dark',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-simple-checkbox'
            }
        },
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-simple-checkbox'
            }
        },
        indeterminate: {
            type: 'input',
            input: 'switch',
            label: 'Indeterminate',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-simple-checkbox'
            }
        },
        'indeterminate-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Indeterminate-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-simple-checkbox',
                placeholder: '\'$checkboxIndeterminate\''
            }
        },
        light: {
            type: 'input',
            input: 'switch',
            label: 'Light',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-simple-checkbox'
            }
        },
        'off-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Off-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-simple-checkbox',
                placeholder: '\'$checkboxOff\''
            }
        },
        'on-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'On-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-simple-checkbox',
                placeholder: '\'$checkboxOn\''
            }
        },
        ripple: {
            type: 'input',
            input: 'switch',
            label: 'Ripple',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-simple-checkbox'
            }
        },
        value: {
            type: 'input',
            input: 'switch',
            label: 'Value',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-simple-checkbox'
            }
        }
    },
    events: [
        {
            id: 'input',
            title: '**GENERIC (undefined)** - The updated bound model'
        }
    ]
}
