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
        dense: {
            type: 'input',
            input: 'switch',
            label: 'Dense',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-list)** - Lowers max height of list tiles'
            }
        },
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-list)** - Disables all children `v-list-item` components'
            }
        },
        expand: {
            type: 'input',
            input: 'switch',
            label: 'Expand',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-list)** - Will only collapse when explicitly closed'
            }
        },
        flat: {
            type: 'input',
            input: 'switch',
            label: 'Flat',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-list)** - Remove the highlighted background on active `v-list-item`s'
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
        nav: {
            type: 'input',
            input: 'switch',
            label: 'Nav',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-list)** - An alternative styling that reduces `v-list-item` width and rounds the corners. Typically used with **[v-navigation-drawer](/components/navigation-drawers)**'
            }
        },
        rounded: {
            type: 'input',
            input: 'switch',
            label: 'Rounded',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-list)** - Rounds the `v-list-item` edges'
            }
        },
        shaped: {
            type: 'input',
            input: 'switch',
            label: 'Shaped',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-list)** - Provides an alternative active style for `v-list-item`.'
            }
        },
        subheader: {
            type: 'input',
            input: 'switch',
            label: 'Subheader',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-list)** - Removes top padding. Used when previous sibling is a header'
            }
        },
        tag: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Tag',
            props: {
                hint: '**COMPONENT (v-sheet)** - Specify a custom tag used on the root element.',
                placeholder: '\'div\''
            }
        },
        'three-line': {
            type: 'input',
            input: 'switch',
            label: 'Three-line',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-list)** - Increases list-item height for three lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers.'
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
        },
        'two-line': {
            type: 'input',
            input: 'switch',
            label: 'Two-line',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-list)** - Increases list-item height for two lines. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers.'
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
