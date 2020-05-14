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
        }
    },
    events: [
        {
            id: 'change',
            title: '**SELF** - Emitted when the component value is changed by user interaction'
        }
    ]
}
