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
        end: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'End',
            props: {
                hint: '**MISSING DESCRIPTION** - calendar-base',
                placeholder: 'undefined'
            }
        },
        'hide-header': {
            type: 'input',
            input: 'switch',
            label: 'Hide-header',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - calendar-base'
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
        now: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Now',
            props: {
                hint: '**MISSING DESCRIPTION** - times',
                placeholder: 'undefined'
            }
        },
        'short-months': {
            type: 'input',
            input: 'switch',
            label: 'Short-months',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-calendar-weekly'
            }
        },
        'short-weekdays': {
            type: 'input',
            input: 'switch',
            label: 'Short-weekdays',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - calendar-base'
            }
        },
        'show-month-on-first': {
            type: 'input',
            input: 'switch',
            label: 'Show-month-on-first',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-calendar-weekly'
            }
        },
        start: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Start',
            props: {
                hint: '**MISSING DESCRIPTION** - calendar-base',
                placeholder: '\'2020-05-10\''
            }
        }
    }
}
