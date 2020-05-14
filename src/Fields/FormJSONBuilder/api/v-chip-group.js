export default {
    fields: {
        'active-class': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Active-class',
            props: {
                hint: '**MIXIN (base-item-group)** - The **active-class** applied to children when they are activated.',
                placeholder: '\'v-slide-item--active\''
            }
        },
        'center-active': {
            type: 'input',
            input: 'switch',
            label: 'Center-active',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Forces the selected chip to be centered'
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
        column: {
            type: 'input',
            input: 'switch',
            label: 'Column',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-chip-group)** - Remove horizontal pagination and wrap items as needed'
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
        'next-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Next-icon',
            props: {
                hint: '**SELF** - Specify the icon to use for the next icon',
                placeholder: '\'$next\''
            }
        },
        'prev-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Prev-icon',
            props: {
                hint: '**SELF** - Specify the icon to use for the prev icon',
                placeholder: '\'$prev\''
            }
        },
        'show-arrows': {
            type: 'input',
            input: 'switch',
            label: 'Show-arrows',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Force the display of the pagination arrows'
            }
        }
    },
    events: [
        {
            id: 'change',
            title: '**SELF** - Emitted when the component value is changed by user interaction'
        }
    ],
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
