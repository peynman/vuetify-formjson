export default {
    fields: {
        color: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Color',
            props: {
                hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
                placeholder: '\'primary\''
            }
        },
        complete: {
            type: 'input',
            input: 'switch',
            label: 'Complete',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-stepper-step'
            }
        },
        'complete-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Complete-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-stepper-step',
                placeholder: '\'$complete\''
            }
        },
        'edit-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Edit-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-stepper-step',
                placeholder: '\'$edit\''
            }
        },
        editable: {
            type: 'input',
            input: 'switch',
            label: 'Editable',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-stepper-step'
            }
        },
        'error-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Error-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-stepper-step',
                placeholder: '\'$error\''
            }
        }
    },
    events: [
        {
            id: 'click',
            title: '**GENERIC (undefined)** - Event that is emitted when the component is clicked'
        }
    ],
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
