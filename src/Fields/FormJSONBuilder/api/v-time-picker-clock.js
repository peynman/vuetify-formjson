export default {
    fields: {
        ampm: {
            type: 'input',
            input: 'switch',
            label: 'Ampm',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-clock'
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
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-clock'
            }
        },
        double: {
            type: 'input',
            input: 'switch',
            label: 'Double',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-clock'
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
        max: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Max',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-clock',
                placeholder: 'undefined'
            }
        },
        min: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Min',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-clock',
                placeholder: 'undefined'
            }
        },
        readonly: {
            type: 'input',
            input: 'switch',
            label: 'Readonly',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-clock'
            }
        },
        rotate: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Rotate',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-clock',
                placeholder: '0'
            }
        },
        scrollable: {
            type: 'input',
            input: 'switch',
            label: 'Scrollable',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-clock'
            }
        },
        step: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Step',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-clock',
                placeholder: '1'
            }
        },
        value: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Value',
            props: {
                hint: '**MISSING DESCRIPTION** - v-time-picker-clock',
                placeholder: 'undefined'
            }
        }
    }
}
