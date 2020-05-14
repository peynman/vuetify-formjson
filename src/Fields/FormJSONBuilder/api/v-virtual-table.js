export default {
    fields: {
        'chunk-size': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Chunk-size',
            props: {
                hint: '**MISSING DESCRIPTION** - v-virtual-table',
                placeholder: '25'
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
                hint: '**COMPONENT NESTED (v-simple-table)** - Decreases paddings to render a dense table'
            }
        },
        'fixed-header': {
            type: 'input',
            input: 'switch',
            label: 'Fixed-header',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT NESTED (v-simple-table)** - Sets table header to fixed mode'
            }
        },
        'header-height': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Header-height',
            props: {
                hint: '**MISSING DESCRIPTION** - v-virtual-table',
                placeholder: '48'
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
        'row-height': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Row-height',
            props: {
                hint: '**MISSING DESCRIPTION** - v-virtual-table',
                placeholder: '48'
            }
        }
    }
}
