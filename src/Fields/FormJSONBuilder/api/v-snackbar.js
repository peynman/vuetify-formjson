export default {
    fields: {
        absolute: {
            type: 'input',
            input: 'switch',
            label: 'Absolute',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Applies **position: absolute** to the component.'
            }
        },
        bottom: {
            type: 'input',
            input: 'switch',
            label: 'Bottom',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Aligns the component towards the bottom.'
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
        left: {
            type: 'input',
            input: 'switch',
            label: 'Left',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Aligns the component towards the left.'
            }
        },
        'multi-line': {
            type: 'input',
            input: 'switch',
            label: 'Multi-line',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-snackbar)** - Gives the snackbar a larger minimum height.'
            }
        },
        right: {
            type: 'input',
            input: 'switch',
            label: 'Right',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Aligns the component towards the right.'
            }
        },
        timeout: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Timeout',
            props: {
                hint: '**COMPONENT (v-snackbar)** - Time (in milliseconds) to wait until snackbar is automatically hidden.  Use 0 to keep open indefinitely.',
                placeholder: '6000'
            }
        },
        top: {
            type: 'input',
            input: 'switch',
            label: 'Top',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Aligns the content towards the top.'
            }
        },
        vertical: {
            type: 'input',
            input: 'switch',
            label: 'Vertical',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-snackbar)** - Stacks snackbar content on top of the actions (button).'
            }
        }
    },
    events: [
        {
            id: 'input',
            title: '**GENERIC (undefined)** - The updated bound model'
        }
    ],
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
