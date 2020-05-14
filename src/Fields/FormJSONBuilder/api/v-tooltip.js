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
        bottom: {
            type: 'input',
            input: 'switch',
            label: 'Bottom',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Aligns the component towards the bottom.'
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
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Disables the tooltip'
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
                hint: '**SELF** - Designates whether to use an internal activator'
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
        'open-on-click': {
            type: 'input',
            input: 'switch',
            label: 'Open-on-click',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Designates whether the tooltip should open on activator click'
            }
        },
        'open-on-hover': {
            type: 'input',
            input: 'switch',
            label: 'Open-on-hover',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Designates whether the tooltip should open on activator hover'
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
        tag: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Tag',
            props: {
                hint: '**COMPONENT (v-tooltip)** - Specifies a custom tag for the activator wrapper',
                placeholder: '\'span\''
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
        },
        transition: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Transition',
            props: {
                hint: '**COMPONENT (v-tooltip)** - Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.',
                placeholder: 'undefined'
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
