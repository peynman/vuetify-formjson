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
        dark: {
            type: 'input',
            input: 'switch',
            label: 'Dark',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
            }
        },
        'full-width': {
            type: 'input',
            input: 'switch',
            label: 'Full-width',
            class: 'col-4 mx-0',
            props: {
                hint: '**GENERIC (v-picker)** - Forces 100% width'
            }
        },
        landscape: {
            type: 'input',
            input: 'switch',
            label: 'Landscape',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-picker'
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
        'no-title': {
            type: 'input',
            input: 'switch',
            label: 'No-title',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-picker'
            }
        },
        transition: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Transition',
            props: {
                hint: '**MISSING DESCRIPTION** - v-picker',
                placeholder: '\'fade-transition\''
            }
        }
    }
}
