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
                hint: '**SELF** - Forces the selected component to be centered'
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
                hint: '**SELF** - The appended slot when arrows are shown',
                placeholder: '\'$next\''
            }
        },
        'prev-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Prev-icon',
            props: {
                hint: '**SELF** - The prepended slot when arrows are shown',
                placeholder: '\'$prev\''
            }
        },
        'show-arrows': {
            type: 'input',
            input: 'switch',
            label: 'Show-arrows',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Always show pagination arrows'
            }
        }
    },
    events: [
        {
            id: 'change',
            title: '**SELF** - Emitted when the component value is changed by user interaction'
        },
        {
            id: 'click:location',
            title: '**SELF** - Emitted when a slide item is selected inside of the slide group'
        }
    ],
    slots: [
        {
            id: 'next',
            title: '**SELF** - The next slot'
        },
        {
            id: 'prev',
            title: '**SELF** - The prev slot'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
