export default {
    fields: {
        'active-class': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Active-class',
            props: {
                hint: '**SELF** - The **active-class** applied to children when they are activated.',
                placeholder: '\'v-window-item--active\''
            }
        },
        continuous: {
            type: 'input',
            input: 'switch',
            label: 'Continuous',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-window)** - If `true`, window will "wrap around" from the last item to the first, and from the first item to the last'
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
        light: {
            type: 'input',
            input: 'switch',
            label: 'Light',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
            }
        },
        reverse: {
            type: 'input',
            input: 'switch',
            label: 'Reverse',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-window)** - Reverse the normal transition direction.'
            }
        },
        'show-arrows': {
            type: 'input',
            input: 'switch',
            label: 'Show-arrows',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-window)** - Display the "next" and "prev" buttons'
            }
        },
        'show-arrows-on-hover': {
            type: 'input',
            input: 'switch',
            label: 'Show-arrows-on-hover',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-window)** - Display the "next" and "prev" buttons on hover. `show-arrows` MUST ALSO be set.'
            }
        },
        touchless: {
            type: 'input',
            input: 'switch',
            label: 'Touchless',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-window)** - Disable touch support.'
            }
        },
        vertical: {
            type: 'input',
            input: 'switch',
            label: 'Vertical',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-window)** - Uses a vertical transition when changing windows.'
            }
        }
    },
    events: [
        {
            id: 'change',
            title: '**SELF** - Emitted when the component value is changed by user interaction'
        }
    ],
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
