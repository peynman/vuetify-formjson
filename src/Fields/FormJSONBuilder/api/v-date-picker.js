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
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Disables interaction with the picker'
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
        locale: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Locale',
            props: {
                hint: '**SELF** - Sets the locale. Accepts a string with a BCP 47 language tag.',
                placeholder: 'undefined'
            }
        },
        max: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Max',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Maximum allowed date/month (ISO 8601 format)',
                placeholder: 'undefined'
            }
        },
        min: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Min',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Minimum allowed date/month (ISO 8601 format)',
                placeholder: 'undefined'
            }
        },
        multiple: {
            type: 'input',
            input: 'switch',
            label: 'Multiple',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Allow the selection of multiple dates'
            }
        },
        'next-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Next-icon',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Sets the icon for next month/year button',
                placeholder: '\'$next\''
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
        'picker-date': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Picker-date',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Displayed year/month',
                placeholder: 'undefined'
            }
        },
        'prev-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Prev-icon',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Sets the icon for previous month/year button',
                placeholder: '\'$prev\''
            }
        },
        range: {
            type: 'input',
            input: 'switch',
            label: 'Range',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Allow the selection of date range'
            }
        },
        reactive: {
            type: 'input',
            input: 'switch',
            label: 'Reactive',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Updates the picker model when changing months/years automatically'
            }
        },
        readonly: {
            type: 'input',
            input: 'switch',
            label: 'Readonly',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Makes the picker readonly (doesnt\'t allow to select new date)'
            }
        },
        scrollable: {
            type: 'input',
            input: 'switch',
            label: 'Scrollable',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Allows changing displayed month with mouse scroll'
            }
        },
        'selected-items-text': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Selected-items-text',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Text used for translating the number of selected dates when using *multiple* prop. Can also be customizing globally in [Internationalization](/customization/internationalization).',
                placeholder: '\'$vuetify.datePicker.itemsSelected\''
            }
        },
        'show-week': {
            type: 'input',
            input: 'switch',
            label: 'Show-week',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Toggles visibility of the week numbers in the body of the calendar'
            }
        },
        type: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Type',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Determines the type of the picker - `date` for date picker, `month` for month picker',
                placeholder: '\'date\''
            }
        },
        'year-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Year-icon',
            props: {
                hint: '**COMPONENT (v-date-picker)** - Sets the icon in the year selection button',
                placeholder: 'undefined'
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
            title: '**SELF** - Reactive date picker emits `input` even when any part of the date (year/month/day) changes, but `change` event is emitted only when the day (for date pickers) or month (for month pickers) changes. If `range` prop is set, date picker emits `change` when both [from, to] are selected.'
        },
        {
            id: 'update:picker-date',
            title: '**SELF** - The `.sync` event for `picker-date` prop'
        },
        {
            id: 'click:date',
            title: '**SELF** - Emitted when the date button is clicked'
        },
        {
            id: 'click:month',
            title: '**SELF** - Emitted when the month button is clicked'
        },
        {
            id: 'dblclick:date',
            title: '**SELF** - Emitted when the date button is double clicked'
        },
        {
            id: 'dblclick:month',
            title: '**SELF** - Emitted when the month button is double clicked. Usable only for `month` pickers.'
        }
    ],
    slots: [
        {
            id: 'default',
            title: '**SELF** - Displayed below the calendar, can be used for example for adding action button (`OK` and `Cancel`)'
        }
    ]
}
