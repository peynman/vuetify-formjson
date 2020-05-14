export default {
    fields: {
        absolute: {
            type: 'input',
            input: 'switch',
            label: 'Absolute',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Applies **position: absolute** to the component.'
            }
        },
        bottom: {
            type: 'input',
            input: 'switch',
            label: 'Bottom',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Aligns the component towards the bottom.'
            }
        },
        collapse: {
            type: 'input',
            input: 'switch',
            label: 'Collapse',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Puts the toolbar into a collapsed state reducing its maximum width.'
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
        dense: {
            type: 'input',
            input: 'switch',
            label: 'Dense',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Reduces the height of the toolbar content to 48px (96px when using the **prominent** prop).'
            }
        },
        extended: {
            type: 'input',
            input: 'switch',
            label: 'Extended',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**.'
            }
        },
        flat: {
            type: 'input',
            input: 'switch',
            label: 'Flat',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Removes the toolbar\'s box-shadow.'
            }
        },
        floating: {
            type: 'input',
            input: 'switch',
            label: 'Floating',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Applies **display: inline-flex** to the component.'
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
        prominent: {
            type: 'input',
            input: 'switch',
            label: 'Prominent',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Increases the height of the toolbar content to 128px.'
            }
        },
        short: {
            type: 'input',
            input: 'switch',
            label: 'Short',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Reduce the height of the toolbar content to 56px (112px when using the **prominent** prop).'
            }
        },
        src: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Src',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Specifies a [v-img](/components/images) as the component\'s background.',
                placeholder: 'undefined'
            }
        },
        tag: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Tag',
            props: {
                hint: '**COMPONENT (v-sheet)** - Specify a custom tag used on the root element.',
                placeholder: '\'header\''
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
            id: 'extension',
            title: '**SELF** - Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop. If this slot has no content, the **extended** prop may be used instead.'
        },
        {
            id: 'img',
            title: '**SELF** - Expects the [v-img](/components/images) component. Scoped **props** should be applied with `v-bind="props"`.'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
