export default {
    fields: {
        'ampm-in-title': {
            type: 'input',
            input: 'switch',
            label: 'Ampm-in-title',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-time-picker)** - Place AM/PM switch in title, not near the clock.'
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
                hint: '**SPECIAL (v-time-picker)** - disables picker'
            }
        },
        format: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Format',
            props: {
                hint: '**SPECIAL (v-time-picker)** - Defines the format of a time displayed in picker. Available options are `ampm` and `24hr`.',
                placeholder: '\'ampm\''
            }
        },
        'full-width': {
            type: 'input',
            input: 'switch',
            label: 'Full-width',
            class: 'col-4 mx-0',
            props: {
                hint: '**GENERIC (picker)** - Forces 100% width'
            }
        },
        'header-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Header-color',
            props: {
                hint: '**MIXIN (picker)** - Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color',
                placeholder: 'undefined'
            }
        },
        landscape: {
            type: 'input',
            input: 'switch',
            label: 'Landscape',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (picker)** - Orients picker horizontal'
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
                hint: '**SPECIAL (v-time-picker)** - Maximum allowed time',
                placeholder: 'undefined'
            }
        },
        min: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Min',
            props: {
                hint: '**SPECIAL (v-time-picker)** - Minimum allowed time',
                placeholder: 'undefined'
            }
        },
        'no-title': {
            type: 'input',
            input: 'switch',
            label: 'No-title',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (picker)** - Hide the picker title'
            }
        },
        readonly: {
            type: 'input',
            input: 'switch',
            label: 'Readonly',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-time-picker)** - Puts picker in readonly state'
            }
        },
        scrollable: {
            type: 'input',
            input: 'switch',
            label: 'Scrollable',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-time-picker)** - Allows changing hour/minute with mouse scroll'
            }
        },
        'use-seconds': {
            type: 'input',
            input: 'switch',
            label: 'Use-seconds',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-time-picker)** - Toggles the use of seconds in picker'
            }
        }
    },
    events: [
        {
            id: 'input',
            title: '**GENERIC (undefined)** - The updated bound model'
        },
        {
            id: 'change',
            title: '**SELF** - Emitted when the time selection is done (when user changes the minute for HH:MM picker and the second for HH:MM:SS picker'
        },
        {
            id: 'click:hour',
            title: '**SELF** - Emitted when user selects the hour'
        },
        {
            id: 'click:minute',
            title: '**SELF** - Emitted when user selects the minute'
        },
        {
            id: 'click:second',
            title: '**SELF** - Emitted when user selects the second'
        },
        {
            id: 'update:period',
            title: '**SELF** - Emitted when user clicks the AM/PM button'
        }
    ],
    slots: [
        {
            id: 'default',
            title: '**SELF** - Displayed below the clock, can be used for example for adding action button (`OK` and `Cancel`)'
        }
    ]
}
