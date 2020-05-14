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
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-color-picker)** - Disables picker'
            }
        },
        flat: {
            type: 'input',
            input: 'switch',
            label: 'Flat',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-color-picker)** - Removes elevation'
            }
        },
        'hide-canvas': {
            type: 'input',
            input: 'switch',
            label: 'Hide-canvas',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-color-picker)** - Hides canvas'
            }
        },
        'hide-inputs': {
            type: 'input',
            input: 'switch',
            label: 'Hide-inputs',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-color-picker)** - Hides inputs'
            }
        },
        'hide-mode-switch': {
            type: 'input',
            input: 'switch',
            label: 'Hide-mode-switch',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-color-picker)** - Hides mode switch'
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
        mode: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Mode',
            props: {
                hint: '**SPECIAL (v-color-picker)** - Sets mode of inputs. Available modes are \'rgba\', \'hsla\', and \'hexa\'. Can be synced with the `.sync` modifier.',
                placeholder: '\'rgba\''
            }
        },
        'show-swatches': {
            type: 'input',
            input: 'switch',
            label: 'Show-swatches',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-color-picker)** - Displays color swatches'
            }
        }
    },
    events: [
        {
            id: 'input',
            title: '**SPECIAL (undefined)** - Selected color. Depending on what you passed to the `value` prop this is either a string or an object'
        },
        {
            id: 'update:color',
            title: '**SPECIAL (undefined)** - Selected color. This is the internal representation of the color, containing all values.'
        },
        {
            id: 'update:mode',
            title: '**SPECIAL (undefined)** - Selected mode'
        }
    ]
}
