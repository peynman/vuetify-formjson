export default {
    fields: {
        dark: {
            type: 'input',
            input: 'switch',
            label: 'Dark',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
            }
        },
        inset: {
            type: 'input',
            input: 'switch',
            label: 'Inset',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-subheader)** - Adds indentation (72px)'
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
        }
    },
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
