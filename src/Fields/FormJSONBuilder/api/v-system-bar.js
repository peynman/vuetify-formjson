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
        app: {
            type: 'input',
            input: 'switch',
            label: 'App',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (applicationable)** - Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-content` component to function properly. You can more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop'
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
        light: {
            type: 'input',
            input: 'switch',
            label: 'Light',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
            }
        },
        'lights-out': {
            type: 'input',
            input: 'switch',
            label: 'Lights-out',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-system-bar)** - Reduces the system bar opacity.'
            }
        },
        window: {
            type: 'input',
            input: 'switch',
            label: 'Window',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-system-bar)** - Increases the system bar height to 32px (24px default).'
            }
        }
    }
}
