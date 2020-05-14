export default {
    fields: {
        accordion: {
            type: 'input',
            input: 'switch',
            label: 'Accordion',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-expansion-panels)** - Removes the margin around open panels'
            }
        },
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
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-expansion-panels)** - Disables the entire expansion-panel'
            }
        },
        flat: {
            type: 'input',
            input: 'switch',
            label: 'Flat',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-expansion-panels)** - Removes the expansion-panel\'s elevation and borders'
            }
        },
        focusable: {
            type: 'input',
            input: 'switch',
            label: 'Focusable',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-expansion-panels)** - Makes the expansion-panel headers focusable'
            }
        },
        hover: {
            type: 'input',
            input: 'switch',
            label: 'Hover',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-expansion-panels)** - Applies a background-color shift on hover to expansion panel headers'
            }
        },
        inset: {
            type: 'input',
            input: 'switch',
            label: 'Inset',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-expansion-panels)** - Makes the expansion-panel open with a inset style'
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
        popout: {
            type: 'input',
            input: 'switch',
            label: 'Popout',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-expansion-panels)** - Makes the expansion-panel open with an popout style'
            }
        },
        readonly: {
            type: 'input',
            input: 'switch',
            label: 'Readonly',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-expansion-panels)** - Makes the entire expansion-panel read only.'
            }
        },
        tile: {
            type: 'input',
            input: 'switch',
            label: 'Tile',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-expansion-panels)** - Removes the border-radius'
            }
        }
    }
}
