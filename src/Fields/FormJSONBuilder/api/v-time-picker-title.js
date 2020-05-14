export default {
    fields: {
        ampm: {
            type: 'input',
            input: 'switch',
            label: 'Ampm',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-title'
            }
        },
        'ampm-readonly': {
            type: 'input',
            input: 'switch',
            label: 'Ampm-readonly',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-title'
            }
        },
        color: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Color',
            props: {
                hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
                placeholder: 'undefined'
            }
        },
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-title'
            }
        },
        hour: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Hour',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-title',
                placeholder: 'undefined'
            }
        },
        minute: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Minute',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-title',
                placeholder: 'undefined'
            }
        },
        period: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Period',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-title',
                placeholder: 'undefined'
            }
        },
        readonly: {
            type: 'input',
            input: 'switch',
            label: 'Readonly',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-title'
            }
        },
        second: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Second',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-title',
                placeholder: 'undefined'
            }
        },
        selecting: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Selecting',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-title',
                placeholder: 'undefined'
            }
        },
        'use-seconds': {
            type: 'input',
            input: 'switch',
            label: 'Use-seconds',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-title'
            }
        }
    }
}
