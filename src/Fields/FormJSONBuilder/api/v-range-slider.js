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
                hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
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
        'inverse-label': {
            type: 'input',
            input: 'switch',
            label: 'Inverse-label',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-slider)** - Reverse the label position. Works with **rtl**.'
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
        'thumb-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Thumb-color',
            props: {
                hint: '**COMPONENT (v-slider)** - Sets the thumb and thumb label color',
                placeholder: 'undefined'
            }
        },
        'track-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Track-color',
            props: {
                hint: '**COMPONENT (v-slider)** - Sets the track\'s color',
                placeholder: 'undefined'
            }
        },
        'track-fill-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Track-fill-color',
            props: {
                hint: '**COMPONENT (v-slider)** - Sets the track\'s fill color',
                placeholder: 'undefined'
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
        },
        vertical: {
            type: 'input',
            input: 'switch',
            label: 'Vertical',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-slider)** - Changes slider direction to vertical'
            }
        }
    },
    events: [
        {
            id: 'update:error',
            title: '**MIXIN (validatable)** - The `error.sync` event'
        },
        {
            id: 'click',
            title: '**COMPONENT (v-input)** - Emitted when input is clicked'
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
        },
        {
            id: 'start',
            title: '**COMPONENT (v-slider)** - Slider value emitted at start of slider movement'
        },
        {
            id: 'end',
            title: '**COMPONENT (v-slider)** - Slider value emitted at the end of slider movement'
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
        },
        {
            id: 'progress',
            title: '**GENERIC (v-slider)** - Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)'
        },
        {
            id: 'thumb-label',
            title: '**COMPONENT (v-slider)** - Replaces the content inside the thumb label'
        }
    ]
}
