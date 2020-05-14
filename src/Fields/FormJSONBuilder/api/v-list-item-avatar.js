export default {
    fields: {
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
        horizontal: {
            type: 'input',
            input: 'switch',
            label: 'Horizontal',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-list-item-avatar'
            }
        },
        left: {
            type: 'input',
            input: 'switch',
            label: 'Left',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-avatar)** - Designates that the avatar is on the left side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons).'
            }
        },
        right: {
            type: 'input',
            input: 'switch',
            label: 'Right',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-avatar)** - Designates that the avatar is on the right side of a component. This is hooked into by components such as [v-chip](/components/chips) and [v-btn](/components/buttons).'
            }
        },
        tile: {
            type: 'input',
            input: 'switch',
            label: 'Tile',
            class: 'col-4 mx-0',
            props: {
                hint: '**GENERIC (v-avatar)** - Removes the component\'s border-radius.'
            }
        }
    },
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
