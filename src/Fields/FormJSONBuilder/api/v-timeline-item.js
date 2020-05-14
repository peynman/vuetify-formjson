export default {
    fields: {
        color: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Color',
            props: {
                hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
                placeholder: '\'primary\''
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
        'fill-dot': {
            type: 'input',
            input: 'switch',
            label: 'Fill-dot',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-timeline-item'
            }
        },
        'hide-dot': {
            type: 'input',
            input: 'switch',
            label: 'Hide-dot',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-timeline-item'
            }
        },
        icon: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-timeline-item',
                placeholder: 'undefined'
            }
        },
        'icon-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Icon-color',
            props: {
                hint: '**MISSING DESCRIPTION** - v-timeline-item',
                placeholder: 'undefined'
            }
        },
        large: {
            type: 'input',
            input: 'switch',
            label: 'Large',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-timeline-item'
            }
        },
        left: {
            type: 'input',
            input: 'switch',
            label: 'Left',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-timeline-item'
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
        right: {
            type: 'input',
            input: 'switch',
            label: 'Right',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-timeline-item'
            }
        },
        small: {
            type: 'input',
            input: 'switch',
            label: 'Small',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-timeline-item'
            }
        }
    },
    slots: [
        {
            id: 'icon',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'opposite',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
