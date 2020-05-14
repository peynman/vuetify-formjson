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
        current: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Current',
            props: {
                hint: '**MISSING DESCRIPTION** - themeable',
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
                hint: '**MISSING DESCRIPTION** - themeable'
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
        locale: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Locale',
            props: {
                hint: '**MISSING DESCRIPTION** - localable',
                placeholder: 'undefined'
            }
        },
        max: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Max',
            props: {
                hint: '**MISSING DESCRIPTION** - themeable',
                placeholder: 'undefined'
            }
        },
        min: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Min',
            props: {
                hint: '**MISSING DESCRIPTION** - themeable',
                placeholder: 'undefined'
            }
        },
        range: {
            type: 'input',
            input: 'switch',
            label: 'Range',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - themeable'
            }
        },
        readonly: {
            type: 'input',
            input: 'switch',
            label: 'Readonly',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - themeable'
            }
        },
        scrollable: {
            type: 'input',
            input: 'switch',
            label: 'Scrollable',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - themeable'
            }
        },
        'table-date': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Table-date',
            props: {
                hint: '**MISSING DESCRIPTION** - themeable',
                placeholder: 'undefined'
            }
        }
    }
}
