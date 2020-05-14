export default {
    fields: {
        button: {
            type: 'input',
            input: 'switch',
            label: 'Button',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-progress-circular'
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
        indeterminate: {
            type: 'input',
            input: 'switch',
            label: 'Indeterminate',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-progress-circular'
            }
        }
    },
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
