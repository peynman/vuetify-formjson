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
        light: {
            type: 'input',
            input: 'switch',
            label: 'Light',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
            }
        },
        tag: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Tag',
            props: {
                hint: '**COMPONENT (v-sheet)** - Specify a custom tag used on the root element.',
                placeholder: 'div'
            }
        },
        tile: {
            type: 'input',
            input: 'switch',
            label: 'Tile',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-sheet)** - Removes the component\'s border-radius.'
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
