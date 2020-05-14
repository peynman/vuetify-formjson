export default {
    fields: {
        'active-class': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Active-class',
            props: {
                hint: '**MISSING DESCRIPTION** - v-list-group',
                placeholder: 'undefined'
            }
        },
        'append-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Append-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-list-group',
                placeholder: '\'$expand\''
            }
        },
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
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-list-group'
            }
        },
        eager: {
            type: 'input',
            input: 'switch',
            label: 'Eager',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (bootable)** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
            }
        },
        group: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Group',
            props: {
                hint: '**MISSING DESCRIPTION** - v-list-group',
                placeholder: 'undefined'
            }
        },
        'no-action': {
            type: 'input',
            input: 'switch',
            label: 'No-action',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-list-group'
            }
        },
        'prepend-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Prepend-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-list-group',
                placeholder: 'undefined'
            }
        },
        ripple: {
            type: 'input',
            input: 'switch',
            label: 'Ripple',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-list-group'
            }
        },
        'sub-group': {
            type: 'input',
            input: 'switch',
            label: 'Sub-group',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-list-group'
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
            id: 'activator',
            title: '**GENERIC (undefined)** - When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation'
        },
        {
            id: 'append-icon',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'prepend-icon',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
