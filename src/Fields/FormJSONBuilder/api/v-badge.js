export default {
    fields: {
        avatar: {
            type: 'input',
            input: 'switch',
            label: 'Avatar',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-badge)** - Removes badge padding for the use of the `v-avatar` in the **badge** slot.'
            }
        },
        bordered: {
            type: 'input',
            input: 'switch',
            label: 'Bordered',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-badge)** - Applies a **2px** by default and **1.5px** border around the badge when using the **dot** property.'
            }
        },
        bottom: {
            type: 'input',
            input: 'switch',
            label: 'Bottom',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Aligns the component towards the bottom.'
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
        dot: {
            type: 'input',
            input: 'switch',
            label: 'Dot',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-badge)** - Reduce the size of the badge and hide its contents'
            }
        },
        icon: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Icon',
            props: {
                hint: '**COMPONENT (v-badge)** - Designates a specific icon used in the badge.',
                placeholder: 'undefined'
            }
        },
        inline: {
            type: 'input',
            input: 'switch',
            label: 'Inline',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-badge)** - Moves the badge to be inline with the wrapping element. Supports the usage of the **left** prop.'
            }
        },
        label: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Label',
            props: {
                hint: '**COMPONENT (v-badge)** - The **aria-label** used for the badge',
                placeholder: '\'$vuetify.badge\''
            }
        },
        left: {
            type: 'input',
            input: 'switch',
            label: 'Left',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Aligns the component towards the left.'
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
        overlap: {
            type: 'input',
            input: 'switch',
            label: 'Overlap',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-badge)** - Overlaps the slotted content on top of the component.'
            }
        },
        tile: {
            type: 'input',
            input: 'switch',
            label: 'Tile',
            class: 'col-4 mx-0',
            props: {
                hint: '**GENERIC (v-badge)** - Removes the component\'s border-radius.'
            }
        },
        transition: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Transition',
            props: {
                hint: '**SELF** - Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.',
                placeholder: '\'scale-rotate-transition\''
            }
        }
    },
    slots: [
        {
            id: 'badge',
            title: '**SELF** - The slot used for the badge\'s content.'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
