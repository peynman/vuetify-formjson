export default {
    fields: {
        circle: {
            type: 'input',
            input: 'switch',
            label: 'Circle',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-pagination)** - Shape pagination elements as circles'
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
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-pagination)** - Disables component'
            }
        },
        length: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Length',
            props: {
                hint: '**COMPONENT (v-pagination)** - The length of the pagination component',
                placeholder: '0'
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
        'next-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Next-icon',
            props: {
                hint: '**COMPONENT (v-pagination)** - Specify the icon to use for the next icon',
                placeholder: '\'$next\''
            }
        },
        'prev-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Prev-icon',
            props: {
                hint: '**COMPONENT (v-pagination)** - Specify the icon to use for the prev icon',
                placeholder: '\'$prev\''
            }
        },
        value: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Value',
            props: {
                hint: '**COMPONENT (v-pagination)** - Current selected page',
                placeholder: '0'
            }
        }
    },
    events: [
        {
            id: 'input',
            title: '**GENERIC (undefined)** - The updated bound model'
        },
        {
            id: 'next',
            title: '**SELF** - Emitted when going to next item'
        },
        {
            id: 'previous',
            title: '**SELF** - Emitted when going to previous item'
        }
    ]
}
