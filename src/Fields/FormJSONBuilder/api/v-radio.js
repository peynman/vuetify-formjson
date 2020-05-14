export default {
    fields: {
        'active-class': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Active-class',
            props: {
                hint: '**MIXIN (groupable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.'
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
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (validatable)** - Disable the input'
            }
        },
        id: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Id',
            props: {
                hint: '**GENERIC (v-radio)** - Sets the DOM id on the component',
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
        name: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Name',
            props: {
                hint: '**MISSING DESCRIPTION** - v-radio',
                placeholder: 'undefined'
            }
        },
        'off-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Off-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-radio',
                placeholder: '\'$radioOff\''
            }
        },
        'on-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'On-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-radio',
                placeholder: '\'$radioOn\''
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
        ripple: {
            type: 'input',
            input: 'switch',
            label: 'Ripple',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (rippleable)** - Applies the [v-ripple](/directives/ripples) directive.'
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
            id: 'label',
            title: '**GENERIC (undefined)** - Replaces the default label'
        }
    ]
}
