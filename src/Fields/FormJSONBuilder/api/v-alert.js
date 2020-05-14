export default {
    fields: {
        border: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Border',
            props: {
                hint: '**COMPONENT (v-alert)** - Puts a border on the alert. Accepts **top** | **right** | **bottom** | **left**.',
                placeholder: 'undefined'
            }
        },
        'close-label': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Close-label',
            props: {
                hint: '**COMPONENT (v-alert)** - Text used for *aria-label* on **dismissible** alerts. Can also be customizing globally in [Internationalization](/customization/internationalization).',
                placeholder: '\'$vuetify.close\''
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
        'colored-border': {
            type: 'input',
            input: 'switch',
            label: 'Colored-border',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-alert)** - Applies the defined **color** to the alert\'s border.'
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
                hint: '**COMPONENT (v-alert)** - Hides the alert icon and decreases component\'s height.'
            }
        },
        dismissible: {
            type: 'input',
            input: 'switch',
            label: 'Dismissible',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-alert)** - Adds a close icon that can hide the alert.'
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
        mode: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Mode',
            props: {
                hint: '**MIXIN (transitionable)** - Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).',
                placeholder: 'undefined'
            }
        },
        origin: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Origin',
            props: {
                hint: '**MIXIN (transitionable)** - Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).',
                placeholder: 'undefined'
            }
        },
        outlined: {
            type: 'input',
            input: 'switch',
            label: 'Outlined',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-alert)** - Makes the background transparent and applies a thin border.'
            }
        },
        prominent: {
            type: 'input',
            input: 'switch',
            label: 'Prominent',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-alert)** - Displays a larger vertically centered icon to draw more attention.'
            }
        },
        tag: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Tag',
            props: {
                hint: '**COMPONENT (v-sheet)** - Specify a custom tag used on the root element.',
                placeholder: '\'div\''
            }
        },
        text: {
            type: 'input',
            input: 'switch',
            label: 'Text',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-alert)** - Applies the defined **color** to text and a low opacity background of the same.'
            }
        },
        tile: {
            type: 'input',
            input: 'switch',
            label: 'Tile',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-sheet)** - Removes the component\'s border-radius.'
            }
        },
        transition: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Transition',
            props: {
                hint: '**MIXIN (transitionable)** - Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.',
                placeholder: 'undefined'
            }
        },
        type: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Type',
            props: {
                hint: '**COMPONENT (v-alert)** - Specify a **success**, **info**, **warning** or **error** alert. Uses the contextual color and has a pre-defined icon.',
                placeholder: 'undefined'
            }
        },
        value: {
            type: 'input',
            input: 'switch',
            label: 'Value',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (toggleable)** - Controls whether the component is visible or hidden.'
            }
        }
    },
    events: [
        {
            id: 'input',
            title: '**GENERIC (undefined)** - The updated bound model'
        }
    ],
    slots: [
        {
            id: 'append',
            title: '**SELF** - Slot for icon at end of alert.'
        },
        {
            id: 'close',
            title: '**SELF** - Slot for icon used in **dismissible** prop.'
        },
        {
            id: 'prepend',
            title: '**SELF** - Slot for icon at beginning of alert.'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
