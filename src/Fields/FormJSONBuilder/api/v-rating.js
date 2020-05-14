export default {
    fields: {
        'background-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Background-color',
            props: {
                hint: '**COMPONENT (v-rating)** - The color used empty icons',
                placeholder: '\'accent\''
            }
        },
        clearable: {
            type: 'input',
            input: 'switch',
            label: 'Clearable',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-rating)** - Allows for the component to be cleared. Triggers when the icon containing the current value is clicked.'
            }
        },
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
        dense: {
            type: 'input',
            input: 'switch',
            label: 'Dense',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-rating)** - Icons have a smaller size'
            }
        },
        'empty-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Empty-icon',
            props: {
                hint: '**COMPONENT (v-rating)** - The icon displayed when empty',
                placeholder: '\'$ratingEmpty\''
            }
        },
        'full-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Full-icon',
            props: {
                hint: '**COMPONENT (v-rating)** - The icon displayed when full',
                placeholder: '\'$ratingFull\''
            }
        },
        'half-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Half-icon',
            props: {
                hint: '**COMPONENT (v-rating)** - The icon displayed when half (requires **half-increments** prop)',
                placeholder: '\'$ratingHalf\''
            }
        },
        'half-increments': {
            type: 'input',
            input: 'switch',
            label: 'Half-increments',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-rating)** - Allows the selection of half increments'
            }
        },
        hover: {
            type: 'input',
            input: 'switch',
            label: 'Hover',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-rating)** - Provides visual feedback when hovering over icons'
            }
        },
        large: {
            type: 'input',
            input: 'switch',
            label: 'Large',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (sizeable)** - Makes the component large.'
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
        readonly: {
            type: 'input',
            input: 'switch',
            label: 'Readonly',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-rating)** - Removes all hover effects and pointer events'
            }
        },
        ripple: {
            type: 'input',
            input: 'switch',
            label: 'Ripple',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (rippleable)** - Applies the [v-ripple](/directives/ripples) directive.'
            }
        },
        small: {
            type: 'input',
            input: 'switch',
            label: 'Small',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (sizeable)** - Makes the component small.'
            }
        },
        value: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Value',
            props: {
                hint: '**COMPONENT (v-rating)** - The rating value',
                placeholder: '0'
            }
        },
        'x-large': {
            type: 'input',
            input: 'switch',
            label: 'X-large',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (sizeable)** - Makes the component extra large.'
            }
        },
        'x-small': {
            type: 'input',
            input: 'switch',
            label: 'X-small',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (sizeable)** - Makes the component extra small.'
            }
        }
    },
    events: [
        {
            id: 'input',
            title: '**SELF** - Emits the rating number when this value changes'
        }
    ],
    slots: [
        {
            id: 'item',
            title: '**SELF** - The slot for rendered items'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
