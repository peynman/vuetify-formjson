export default {
    fields: {
        absolute: {
            type: 'input',
            input: 'switch',
            label: 'Absolute',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Applies **position: absolute** to the component.'
            }
        },
        active: {
            type: 'input',
            input: 'switch',
            label: 'Active',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-progress-linear'
            }
        },
        'background-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Background-color',
            props: {
                hint: '**MISSING DESCRIPTION** - v-progress-linear',
                placeholder: 'undefined'
            }
        },
        bottom: {
            type: 'input',
            input: 'switch',
            label: 'Bottom',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Aligns the component towards the bottom.'
            }
        },
        color: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Color',
            props: {
                hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
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
        fixed: {
            type: 'input',
            input: 'switch',
            label: 'Fixed',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Applies **position: fixed** to the component.'
            }
        },
        indeterminate: {
            type: 'input',
            input: 'switch',
            label: 'Indeterminate',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-progress-linear'
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
        query: {
            type: 'input',
            input: 'switch',
            label: 'Query',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-progress-linear'
            }
        },
        rounded: {
            type: 'input',
            input: 'switch',
            label: 'Rounded',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-progress-linear'
            }
        },
        stream: {
            type: 'input',
            input: 'switch',
            label: 'Stream',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-progress-linear'
            }
        },
        striped: {
            type: 'input',
            input: 'switch',
            label: 'Striped',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-progress-linear'
            }
        },
        top: {
            type: 'input',
            input: 'switch',
            label: 'Top',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Aligns the content towards the top.'
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
