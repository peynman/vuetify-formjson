export default {
    fields: {
        'active-class': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Active-class',
            props: {
                hint: '**MIXIN (base-item-group)** - The **active-class** applied to children when they are activated.',
                placeholder: '\'v-item--active\''
            }
        },
        'background-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Background-color',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn-toggle',
                placeholder: 'undefined'
            }
        },
        borderless: {
            type: 'input',
            input: 'switch',
            label: 'Borderless',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn-toggle'
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
        dark: {
            type: 'input',
            input: 'switch',
            label: 'Dark',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
            }
        },
        dense: {
            type: 'input',
            input: 'switch',
            label: 'Dense',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn-toggle'
            }
        },
        group: {
            type: 'input',
            input: 'switch',
            label: 'Group',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn-toggle'
            }
        },
        light: {
            type: 'input',
            input: 'switch',
            label: 'Light',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
            }
        },
        mandatory: {
            type: 'input',
            input: 'switch',
            label: 'Mandatory',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (base-item-group)** - Forces a value to always be selected (if available).'
            }
        },
        multiple: {
            type: 'input',
            input: 'switch',
            label: 'Multiple',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (base-item-group)** - Allow multiple selections. The **value** prop must be an _array_.'
            }
        },
        rounded: {
            type: 'input',
            input: 'switch',
            label: 'Rounded',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn-toggle'
            }
        },
        shaped: {
            type: 'input',
            input: 'switch',
            label: 'Shaped',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn-toggle'
            }
        },
        tile: {
            type: 'input',
            input: 'switch',
            label: 'Tile',
            class: 'col-4 mx-0',
            props: {
                hint: '**GENERIC (v-btn-toggle)** - Removes the component\'s border-radius.'
            }
        }
    },
    events: [
        {
            id: 'change',
            title: '**MISSING DESCRIPTION** - undefined'
        }
    ],
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
