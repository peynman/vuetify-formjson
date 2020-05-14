export default {
    fields: {
        app: {
            type: 'input',
            input: 'switch',
            label: 'App',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-banner)** - When used inside of `v-content`, will calculate top based upon application `v-toolbar` and `v-system-bar`.'
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
        icon: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Icon',
            props: {
                hint: '**COMPONENT (v-banner)** - Designates a specific icon.',
                placeholder: 'undefined'
            }
        },
        'icon-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Icon-color',
            props: {
                hint: '**COMPONENT (v-banner)** - Designates a specific icon color.',
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
        'single-line': {
            type: 'input',
            input: 'switch',
            label: 'Single-line',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-banner)** - Forces the banner onto a single line.'
            }
        },
        sticky: {
            type: 'input',
            input: 'switch',
            label: 'Sticky',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-banner)** - Applies **position: sticky** to the component (**Evergreen browsers only**). You can find more information on the [MDN documentation for sticky position](https://developer.mozilla.org/en-US/docs/Web/CSS/position).'
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
        tile: {
            type: 'input',
            input: 'switch',
            label: 'Tile',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-sheet)** - Removes the component\'s border-radius.'
            }
        },
        value: {
            type: 'input',
            input: 'switch',
            label: 'Value',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (toggleable)** - Controls whether the component is visible or hidden.'
            }
        }
    },
    slots: [
        {
            id: 'actions',
            title: '**SELF** - The slot used for the action\'s content such as a [v-btn](/components/buttons). The **dismiss** function in this slots scope, when invoked, will close the banner.'
        },
        {
            id: 'icon',
            title: '**SELF** - The slot used for the icon\'s content.'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
