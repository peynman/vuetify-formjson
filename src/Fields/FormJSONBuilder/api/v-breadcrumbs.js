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
        divider: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Divider',
            props: {
                hint: '**COMPONENT (v-breadcrumbs)** - Specifies the dividing character between items.',
                placeholder: '\'/\''
            }
        },
        large: {
            type: 'input',
            input: 'switch',
            label: 'Large',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-breadcrumbs)** - Increase the font-size of the breadcrumb item text to 16px (14px default).'
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
        }
    },
    slots: [
        {
            id: 'divider',
            title: '**SELF** - The slot used for dividers.'
        },
        {
            id: 'item',
            title: '**SELF** - The slot used to override default `v-breadcrumbs-item` behavior when using the **items** prop.'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
