export default {
    fields: {
        'alt-labels': {
            type: 'input',
            input: 'switch',
            label: 'Alt-labels',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-stepper)** - Places the labels beneath the step'
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
        'non-linear': {
            type: 'input',
            input: 'switch',
            label: 'Non-linear',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-stepper)** - Allow user to jump to any step'
            }
        },
        vertical: {
            type: 'input',
            input: 'switch',
            label: 'Vertical',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-stepper)** - Display steps vertically'
            }
        }
    },
    events: [
        {
            id: 'change',
            title: '**SPECIAL (undefined)** - Emitted when step is changed by user interaction'
        }
    ],
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
