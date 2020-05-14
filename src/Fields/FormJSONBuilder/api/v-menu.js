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
        'allow-overflow': {
            type: 'input',
            input: 'switch',
            label: 'Allow-overflow',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (menuable)** - Removes overflow re-positioning for the content'
            }
        },
        auto: {
            type: 'input',
            input: 'switch',
            label: 'Auto',
            class: 'col-4 mx-0',
            props: {
                hint: '**GENERIC (v-menu)** - Centers list on selected element'
            }
        },
        bottom: {
            type: 'input',
            input: 'switch',
            label: 'Bottom',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Aligns the component towards the bottom.'
            }
        },
        'close-on-click': {
            type: 'input',
            input: 'switch',
            label: 'Close-on-click',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-menu)** - Designates if menu should close on outside-activator click'
            }
        },
        'close-on-content-click': {
            type: 'input',
            input: 'switch',
            label: 'Close-on-content-click',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-menu)** - Designates if menu should close when its content is clicked'
            }
        },
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
                hint: '**SELF** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
            }
        },
        'disable-keys': {
            type: 'input',
            input: 'switch',
            label: 'Disable-keys',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-menu)** - Removes all keyboard interaction'
            }
        },
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Disables the menu'
            }
        },
        eager: {
            type: 'input',
            input: 'switch',
            label: 'Eager',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (bootable)** - Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.'
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
        'internal-activator': {
            type: 'input',
            input: 'switch',
            label: 'Internal-activator',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Detaches the menu content inside of the component as opposed to the document.'
            }
        },
        left: {
            type: 'input',
            input: 'switch',
            label: 'Left',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Aligns the component towards the left.'
            }
        },
        light: {
            type: 'input',
            input: 'switch',
            label: 'Light',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Applies the light theme variant to the component.'
            }
        },
        'offset-overflow': {
            type: 'input',
            input: 'switch',
            label: 'Offset-overflow',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (menuable)** - Causes the component to flip to the opposite side when repositioned due to overflow'
            }
        },
        'offset-x': {
            type: 'input',
            input: 'switch',
            label: 'Offset-x',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-menu)** - Offset the menu on the x-axis. Works in conjunction with direction left/right'
            }
        },
        'offset-y': {
            type: 'input',
            input: 'switch',
            label: 'Offset-y',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-menu)** - Offset the menu on the y-axis. Works in conjunction with direction top/bottom'
            }
        },
        'open-on-click': {
            type: 'input',
            input: 'switch',
            label: 'Open-on-click',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Designates whether menu should open on activator click'
            }
        },
        'open-on-hover': {
            type: 'input',
            input: 'switch',
            label: 'Open-on-hover',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Designates whether menu should open on activator hover'
            }
        },
        origin: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Origin',
            props: {
                hint: '**COMPONENT (v-menu)** - Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).',
                placeholder: '\'top left\''
            }
        },
        'position-x': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Position-x',
            props: {
                hint: '**MIXIN (menuable)** - Used to position the content when not using an activator slot',
                placeholder: 'undefined'
            }
        },
        'position-y': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Position-y',
            props: {
                hint: '**MIXIN (menuable)** - Used to position the content when not using an activator slot',
                placeholder: 'undefined'
            }
        },
        right: {
            type: 'input',
            input: 'switch',
            label: 'Right',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Aligns the component towards the right.'
            }
        },
        top: {
            type: 'input',
            input: 'switch',
            label: 'Top',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Aligns the content towards the top.'
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
