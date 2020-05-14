export default {
    fields: {
        absolute: {
            type: 'input',
            input: 'switch',
            label: 'Absolute',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Applies **position: absolute** to the component.'
            }
        },
        'active-class': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Active-class',
            props: {
                hint: '**MISSING DESCRIPTION** - v-bottom-navigation',
                placeholder: '\'v-btn--active\''
            }
        },
        app: {
            type: 'input',
            input: 'switch',
            label: 'App',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (applicationable)** - Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-content` component to function properly. You can more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop'
            }
        },
        'background-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Background-color',
            props: {
                hint: '**MISSING DESCRIPTION** - v-bottom-navigation',
                placeholder: 'undefined'
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
        fixed: {
            type: 'input',
            input: 'switch',
            label: 'Fixed',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Applies **position: fixed** to the component.'
            }
        },
        grow: {
            type: 'input',
            input: 'switch',
            label: 'Grow',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-bottom-navigation'
            }
        },
        'hide-on-scroll': {
            type: 'input',
            input: 'switch',
            label: 'Hide-on-scroll',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-bottom-navigation'
            }
        },
        horizontal: {
            type: 'input',
            input: 'switch',
            label: 'Horizontal',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-bottom-navigation'
            }
        },
        'input-value': {
            type: 'input',
            input: 'switch',
            label: 'Input-value',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - toggleable'
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
        mandatory: {
            type: 'input',
            input: 'switch',
            label: 'Mandatory',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-bottom-navigation'
            }
        },
        'scroll-target': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Scroll-target',
            props: {
                hint: '**MIXIN (scrollable)** - Designates the element to target for scrolling events. Uses `window` by default.',
                placeholder: 'undefined'
            }
        },
        shift: {
            type: 'input',
            input: 'switch',
            label: 'Shift',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-bottom-navigation'
            }
        }
    },
    events: [
        {
            id: 'change',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'update:input-value',
            title: '**MISSING DESCRIPTION** - undefined'
        }
    ],
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
