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
        'disable-icon-rotate': {
            type: 'input',
            input: 'switch',
            label: 'Disable-icon-rotate',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-expansion-panel-header'
            }
        },
        'expand-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Expand-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-expansion-panel-header',
                placeholder: '\'$expand\''
            }
        },
        'hide-actions': {
            type: 'input',
            input: 'switch',
            label: 'Hide-actions',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-expansion-panel-header'
            }
        },
        ripple: {
            type: 'input',
            input: 'switch',
            label: 'Ripple',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-expansion-panel-header'
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
            id: 'actions',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
