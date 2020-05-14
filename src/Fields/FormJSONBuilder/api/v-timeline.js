export default {
    fields: {
        'align-top': {
            type: 'input',
            input: 'switch',
            label: 'Align-top',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-timeline)** - Align caret and dot of timeline items to the top'
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
                hint: '**SPECIAL (v-timeline)** - Hide opposite slot content, and position all items to one side of timeline'
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
                hint: '**SPECIAL (v-timeline)** - Reverse direction of timeline items'
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
