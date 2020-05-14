export default {
    fields: {
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
        date: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Date',
            props: {
                hint: '**MISSING DESCRIPTION** - v-date-picker-title',
                placeholder: 'undefined'
            }
        },
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-date-picker-title'
            }
        },
        readonly: {
            type: 'input',
            input: 'switch',
            label: 'Readonly',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-date-picker-title'
            }
        },
        'selecting-year': {
            type: 'input',
            input: 'switch',
            label: 'Selecting-year',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-date-picker-title'
            }
        },
        value: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Value',
            props: {
                hint: '**MISSING DESCRIPTION** - v-date-picker-title',
                placeholder: 'undefined'
            }
        },
        'year-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Year-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-date-picker-title',
                placeholder: 'undefined'
            }
        }
    }
}
