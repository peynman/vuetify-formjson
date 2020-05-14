export default {
    fields: {
        'active-class': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Active-class',
            props: {
                hint: '**MIXIN (base-item-group)** - The **active-class** applied to children when they are activated.',
                placeholder: '\'v-item--active\''
            }
        },
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
        column: {
            type: 'input',
            input: 'switch',
            label: 'Column',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-radio-group'
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
        mandatory: {
            type: 'input',
            input: 'switch',
            label: 'Mandatory',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (base-item-group)** - Forces a value to always be selected (if available).'
            }
        },
        multiple: {
            type: 'input',
            input: 'switch',
            label: 'Multiple',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (base-item-group)** - Allow multiple selections. The **value** prop must be an _array_.'
            }
        },
        name: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Name',
            props: {
                hint: '**MISSING DESCRIPTION** - v-radio-group',
                placeholder: 'undefined'
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
        row: {
            type: 'input',
            input: 'switch',
            label: 'Row',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-radio-group'
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
