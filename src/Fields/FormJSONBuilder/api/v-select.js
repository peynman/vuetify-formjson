export default {
    fields: {
        'append-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Append-icon',
            props: {
                hint: '**COMPONENT (v-input)** - Appends an icon to the component, uses the same syntax as `v-icon`',
                placeholder: '\'$dropdown\''
            }
        },
        'append-outer-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Append-outer-icon',
            props: {
                hint: '**COMPONENT (v-text-field)** - Appends an icon to the outside the component\'s input, uses same syntax as `v-icon`',
                placeholder: 'undefined'
            }
        },
        autofocus: {
            type: 'input',
            input: 'switch',
            label: 'Autofocus',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-text-field)** - Enables autofocus'
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
        'cache-items': {
            type: 'input',
            input: 'switch',
            label: 'Cache-items',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-select)** - Keeps a local _unique_ copy of all items that have been passed through the **items** prop.'
            }
        },
        chips: {
            type: 'input',
            input: 'switch',
            label: 'Chips',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-select)** - Changes display of selections to chips'
            }
        },
        'clear-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Clear-icon',
            props: {
                hint: '**COMPONENT (v-text-field)** - Applied when using **clearable** and the input is dirty',
                placeholder: '\'$clear\''
            }
        },
        clearable: {
            type: 'input',
            input: 'switch',
            label: 'Clearable',
            class: 'col-4 mx-0',
            props: {
                hint: '**GENERIC (v-text-field)** - Add input clear functionality, default icon is Material Icons **clear**'
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
        'deletable-chips': {
            type: 'input',
            input: 'switch',
            label: 'Deletable-chips',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-select)** - Adds a remove icon to selected chips'
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
        'disable-lookup': {
            type: 'input',
            input: 'switch',
            label: 'Disable-lookup',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-select)** - Disables keyboard lookup'
            }
        },
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Disables the input'
            }
        },
        eager: {
            type: 'input',
            input: 'switch',
            label: 'Eager',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-select)** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
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
        filled: {
            type: 'input',
            input: 'switch',
            label: 'Filled',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-text-field)** - Applies the alternate filled input style'
            }
        },
        flat: {
            type: 'input',
            input: 'switch',
            label: 'Flat',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-text-field)** - Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props'
            }
        },
        'full-width': {
            type: 'input',
            input: 'switch',
            label: 'Full-width',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-text-field)** - Designates input type as full-width'
            }
        },
        'hide-selected': {
            type: 'input',
            input: 'switch',
            label: 'Hide-selected',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-select)** - Do not display in the select menu items that are already selected'
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
        'item-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Item-color',
            props: {
                hint: '**COMPONENT (v-select)** - Sets color of selected items',
                placeholder: '\'primary\''
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
        multiple: {
            type: 'input',
            input: 'switch',
            label: 'Multiple',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-select)** - Changes select to multiple. Accepts array for value'
            }
        },
        'no-data-text': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'No-data-text',
            props: {
                hint: '**SELF** - Display text when there is no data',
                placeholder: '\'$vuetify.noDataText\''
            }
        },
        'open-on-clear': {
            type: 'input',
            input: 'switch',
            label: 'Open-on-clear',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-select)** - When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state'
            }
        },
        outlined: {
            type: 'input',
            input: 'switch',
            label: 'Outlined',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-text-field)** - Applies the outlined style to the input'
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
        placeholder: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Placeholder',
            props: {
                hint: '**COMPONENT (v-text-field)** - Sets the input’s placeholder text',
                placeholder: 'undefined'
            }
        },
        prefix: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Prefix',
            props: {
                hint: '**COMPONENT (v-text-field)** - Displays prefix text',
                placeholder: 'undefined'
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
        'prepend-inner-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Prepend-inner-icon',
            props: {
                hint: '**COMPONENT (v-text-field)** - Prepends an icon inside the component\'s input, uses the same syntax as `v-icon`',
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
        'return-object': {
            type: 'input',
            input: 'switch',
            label: 'Return-object',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-select)** - Changes the selection behavior to return the object directly rather than the value specified with **item-value**'
            }
        },
        reverse: {
            type: 'input',
            input: 'switch',
            label: 'Reverse',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-text-field)** - Reverses the input orientation'
            }
        },
        rounded: {
            type: 'input',
            input: 'switch',
            label: 'Rounded',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-text-field)** - Adds a border radius to the input'
            }
        },
        shaped: {
            type: 'input',
            input: 'switch',
            label: 'Shaped',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-text-field)** - Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`'
            }
        },
        'single-line': {
            type: 'input',
            input: 'switch',
            label: 'Single-line',
            class: 'col-4 mx-0',
            props: {
                hint: '**GENERIC (v-text-field)** - Label does not move on focus/dirty'
            }
        },
        'small-chips': {
            type: 'input',
            input: 'switch',
            label: 'Small-chips',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-select)** - Changes display of selections to chips with the **small** property'
            }
        },
        solo: {
            type: 'input',
            input: 'switch',
            label: 'Solo',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-text-field)** - Changes the style of the input'
            }
        },
        'solo-inverted': {
            type: 'input',
            input: 'switch',
            label: 'Solo-inverted',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-text-field)** - Reduces element opacity until focused'
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
        suffix: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Suffix',
            props: {
                hint: '**COMPONENT (v-text-field)** - Displays suffix text',
                placeholder: 'undefined'
            }
        },
        type: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Type',
            props: {
                hint: '**COMPONENT (v-text-field)** - Sets input type',
                placeholder: '\'text\''
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
            id: 'blur',
            title: '**COMPONENT (v-text-field)** - Emitted when the input is blurred'
        },
        {
            id: 'click:clear',
            title: '**COMPONENT (v-text-field)** - Emitted when clearable icon clicked'
        },
        {
            id: 'click:append-outer',
            title: '**COMPONENT (v-text-field)** - Emitted when appended outer icon is clicked'
        },
        {
            id: 'click:prepend-inner',
            title: '**COMPONENT (v-text-field)** - Emitted when prepended inner icon is clicked'
        },
        {
            id: 'focus',
            title: '**COMPONENT (v-text-field)** - Emitted when component is focused'
        },
        {
            id: 'change',
            title: '**COMPONENT (v-text-field)** - Emitted when the input is changed by user interaction'
        },
        {
            id: 'input',
            title: '**GENERIC (v-text-field)** - The updated bound model'
        },
        {
            id: 'keydown',
            title: '**COMPONENT (v-text-field)** - Emitted when **any** key is pressed'
        },
        {
            id: 'update:search-input',
            title: '**COMPONENT (v-select)** - The `search-input.sync` event'
        },
        {
            id: 'update:list-index',
            title: '**COMPONENT (v-select)** - Emitted when menu item is selected using keyboard arrows'
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
            id: 'append-outer',
            title: '**COMPONENT (v-text-field)** - Appends an item inside input content'
        },
        {
            id: 'label',
            title: '**GENERIC (v-text-field)** - Replaces the default label'
        },
        {
            id: 'prepend-inner',
            title: '**COMPONENT (v-text-field)** - Prepends an item inside input content'
        },
        {
            id: 'progress',
            title: '**GENERIC (v-text-field)** - Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)'
        },
        {
            id: 'append-item',
            title: '**COMPONENT (v-select)** - Adds an item after menu content'
        },
        {
            id: 'prepend-item',
            title: '**COMPONENT (v-select)** - Adds an item before menu content'
        },
        {
            id: 'item',
            title: '**COMPONENT (v-select)** - Define a custom item appearance'
        },
        {
            id: 'no-data',
            title: '**COMPONENT (v-select)** - Displayed when there are no filtered items'
        },
        {
            id: 'selection',
            title: '**COMPONENT (v-select)** - Define a custom selection appearance'
        }
    ]
}
