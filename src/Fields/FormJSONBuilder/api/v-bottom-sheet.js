export default {
    fields: {
        'content-class': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Content-class',
            props: {
                hint: '**MIXIN (detachable)** - Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targettable by classes passed directly on the component.',
                placeholder: 'undefined'
            }
        },
        dark: {
            type: 'input',
            input: 'switch',
            label: 'Dark',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-dialog)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
            }
        },
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (activatable)** - Disables the ability to open the component.'
            }
        },
        eager: {
            type: 'input',
            input: 'switch',
            label: 'Eager',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
            }
        },
        fullscreen: {
            type: 'input',
            input: 'switch',
            label: 'Fullscreen',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-dialog)** - Changes layout for fullscreen display.'
            }
        },
        'hide-overlay': {
            type: 'input',
            input: 'switch',
            label: 'Hide-overlay',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (overlayable)** - Hides the display of the overlay.'
            }
        },
        inset: {
            type: 'input',
            input: 'switch',
            label: 'Inset',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-bottom-sheet)** - Reduces the sheet content maximum width to 70%.'
            }
        },
        'internal-activator': {
            type: 'input',
            input: 'switch',
            label: 'Internal-activator',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Detaches the menu content inside of the component as opposed to the document.'
            }
        },
        light: {
            type: 'input',
            input: 'switch',
            label: 'Light',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-dialog)** - Applies the light theme variant to the component.'
            }
        },
        'no-click-animation': {
            type: 'input',
            input: 'switch',
            label: 'No-click-animation',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-dialog)** - Disables the bounce effect when clicking outside of a `v-dialog`\'s content when using the **persistent** prop.'
            }
        },
        'open-on-hover': {
            type: 'input',
            input: 'switch',
            label: 'Open-on-hover',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Designates whether component should activate when its activator is hovered.'
            }
        },
        origin: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Origin',
            props: {
                hint: '**COMPONENT (v-dialog)** - Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).',
                placeholder: '\'center center\''
            }
        },
        'overlay-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Overlay-color',
            props: {
                hint: '**MIXIN (overlayable)** - Sets the overlay color.',
                placeholder: 'undefined'
            }
        },
        persistent: {
            type: 'input',
            input: 'switch',
            label: 'Persistent',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-dialog)** - Clicking outside of the element will not deactivate it.'
            }
        },
        'retain-focus': {
            type: 'input',
            input: 'switch',
            label: 'Retain-focus',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-dialog)** - Tab focus will return to the first child of the dialog by default. Disable this when using external tools that require focus such as TinyMCE or vue-clipboard.'
            }
        },
        scrollable: {
            type: 'input',
            input: 'switch',
            label: 'Scrollable',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-dialog)** - When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable).'
            }
        },
        transition: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Transition',
            props: {
                hint: '**COMPONENT (v-dialog)** - Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.',
                placeholder: '\'bottom-sheet-transition\''
            }
        }
    },
    slots: [
        {
            id: 'activator',
            title: '**GENERIC (undefined)** - When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
