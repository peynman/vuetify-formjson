export default {
    fields: {
        'append-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Append-icon',
            props: {
                hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
                placeholder: 'undefined'
            }
        },
        'background-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Background-color',
            props: {
                hint: '**COMPONENT (v-input)** - Changes the background-color of the input',
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
                hint: '**SELF** - Applies the dark theme variant to the component. This will default the components color to _white_ unless you\'ve configured your [application theme](/customization/theme) to **dark** or if you are using the **color** prop on the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
            }
        },
        dense: {
            type: 'input',
            input: 'switch',
            label: 'Dense',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-input)** - Reduces the input height'
            }
        },
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (validatable)** - Disable the input'
            }
        },
        error: {
            type: 'input',
            input: 'switch',
            label: 'Error',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (validatable)** - Puts the input in a manual error state'
            }
        },
        hint: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Hint',
            props: {
                hint: '**COMPONENT (v-input)** - Hint text',
                placeholder: 'undefined'
            }
        },
        id: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Id',
            props: {
                hint: '**GENERIC (v-input)** - Sets the DOM id on the component',
                placeholder: 'undefined'
            }
        },
        label: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Label',
            props: {
                hint: '**COMPONENT (v-input)** - Sets input label'
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
        loading: {
            type: 'input',
            input: 'switch',
            label: 'Loading',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-input)** - Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it\'s supported by the component) or the primary color'
            }
        },
        'persistent-hint': {
            type: 'input',
            input: 'switch',
            label: 'Persistent-hint',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-input)** - Forces hint to always be visible'
            }
        },
        'prepend-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Prepend-icon',
            props: {
                hint: '**COMPONENT (v-input)** - Prepends an icon to the component, uses the same syntax as `v-icon`',
                placeholder: 'undefined'
            }
        },
        readonly: {
            type: 'input',
            input: 'switch',
            label: 'Readonly',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (validatable)** - Puts input in readonly state'
            }
        },
        success: {
            type: 'input',
            input: 'switch',
            label: 'Success',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (validatable)** - Puts the input in a manual success state'
            }
        },
        'validate-on-blur': {
            type: 'input',
            input: 'switch',
            label: 'Validate-on-blur',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (validatable)** - Delays validation until blur event'
            }
        }
    },
    events: [
        {
            id: 'update:error',
            title: '**MIXIN (validatable)** - The `error.sync` event'
        },
        {
            id: 'change',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'mousedown',
            title: '**COMPONENT (v-input)** - Emitted when click is pressed'
        },
        {
            id: 'mouseup',
            title: '**COMPONENT (v-input)** - Emitted when click is released'
        },
        {
            id: 'click:append',
            title: '**COMPONENT (v-input)** - Emitted when appended icon is clicked'
        },
        {
            id: 'click:prepend',
            title: '**COMPONENT (v-input)** - Emitted when prepended icon is clicked'
        }
    ],
    slots: [
        {
            id: 'append',
            title: '**COMPONENT (v-input)** - Adds an item after input content'
        },
        {
            id: 'default',
            title: '**GENERIC (v-input)** - The default Vue slot.'
        },
        {
            id: 'prepend',
            title: '**COMPONENT (v-input)** - Adds an item before input content'
        },
        {
            id: 'message',
            title: '**COMPONENT (v-input)** - Customize the messages slot.'
        }
    ]
}
