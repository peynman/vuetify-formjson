export default {
    fields: {
        absolute: {
            type: 'input',
            input: 'switch',
            label: 'Absolute',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-label'
            }
        },
        color: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Color',
            props: {
                hint: '**MISSING DESCRIPTION** - v-label',
                placeholder: '\'primary\''
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
                hint: '**MISSING DESCRIPTION** - v-label'
            }
        },
        focused: {
            type: 'input',
            input: 'switch',
            label: 'Focused',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-label'
            }
        },
        for: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'For',
            props: {
                hint: '**MISSING DESCRIPTION** - v-label',
                placeholder: 'undefined'
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
        value: {
            type: 'input',
            input: 'switch',
            label: 'Value',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-label'
            }
        }
    }
}
