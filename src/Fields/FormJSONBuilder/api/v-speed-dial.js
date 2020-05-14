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
        bottom: {
            type: 'input',
            input: 'switch',
            label: 'Bottom',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Aligns the component towards the bottom.'
            }
        },
        direction: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Direction',
            props: {
                hint: '**MISSING DESCRIPTION** - v-speed-dial',
                placeholder: '\'top\''
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
        left: {
            type: 'input',
            input: 'switch',
            label: 'Left',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Aligns the component towards the left.'
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
        'open-on-hover': {
            type: 'input',
            input: 'switch',
            label: 'Open-on-hover',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-speed-dial'
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
        },
        transition: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Transition',
            props: {
                hint: '**MIXIN (transitionable)** - Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.',
                placeholder: '\'scale-transition\''
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
