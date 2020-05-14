export default {
    fields: {
        dark: {
            type: 'input',
            input: 'switch',
            label: 'Dark',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
            }
        },
        eager: {
            type: 'input',
            input: 'switch',
            label: 'Eager',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-edit-dialog'
            }
        },
        large: {
            type: 'input',
            input: 'switch',
            label: 'Large',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-edit-dialog'
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
        persistent: {
            type: 'input',
            input: 'switch',
            label: 'Persistent',
            class: 'col-4 mx-0',
            props: {
                hint: '**GENERIC (v-edit-dialog)** - Clicking outside will not dismiss the dialog'
            }
        },
        transition: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Transition',
            props: {
                hint: '**MISSING DESCRIPTION** - v-edit-dialog',
                placeholder: '\'slide-x-reverse-transition\''
            }
        }
    },
    events: [
        {
            id: 'cancel',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'close',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'open',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'save',
            title: '**MISSING DESCRIPTION** - undefined'
        }
    ],
    slots: [
        {
            id: 'input',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
