export default {
    fields: {
        'active-class': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Active-class',
            props: {
                hint: '**COMPONENT (v-tabs)** - The **active-class** applied to children when they are activated.',
                placeholder: 'undefined'
            }
        },
        'align-with-title': {
            type: 'input',
            input: 'switch',
            label: 'Align-with-title',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-tabs)** - Make `v-tabs` lined up with the toolbar title'
            }
        },
        'background-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Background-color',
            props: {
                hint: '**COMPONENT (v-tabs)** - Changes the background color of the component.',
                placeholder: 'undefined'
            }
        },
        'center-active': {
            type: 'input',
            input: 'switch',
            label: 'Center-active',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-tabs)** - Forces the selected tab to be centered'
            }
        },
        centered: {
            type: 'input',
            input: 'switch',
            label: 'Centered',
            class: 'col-4 mx-0',
            props: {
                hint: '**GENERIC (v-tabs)** - Centers the tabs'
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
                hint: '**SELF** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
            }
        },
        'fixed-tabs': {
            type: 'input',
            input: 'switch',
            label: 'Fixed-tabs',
            class: 'col-4 mx-0',
            props: {
                hint: '**GENERIC (v-tabs)** - `v-tabs-item` min-width 160px, max-width 360px'
            }
        },
        grow: {
            type: 'input',
            input: 'switch',
            label: 'Grow',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-tabs)** - Force `v-tab`\'s to take up all available space'
            }
        },
        'hide-slider': {
            type: 'input',
            input: 'switch',
            label: 'Hide-slider',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-tabs)** - Hide\'s the generated `v-tabs-slider`'
            }
        },
        'icons-and-text': {
            type: 'input',
            input: 'switch',
            label: 'Icons-and-text',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-tabs)** - Will stack icon and text vertically'
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
        'next-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Next-icon',
            props: {
                hint: '**COMPONENT (v-tabs)** - Right pagination icon',
                placeholder: '\'$next\''
            }
        },
        optional: {
            type: 'input',
            input: 'switch',
            label: 'Optional',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-tabs)** - Does not require an active item. Useful when using `v-tab` as a `router-link`'
            }
        },
        'prev-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Prev-icon',
            props: {
                hint: '**COMPONENT (v-tabs)** - Left pagination icon',
                placeholder: '\'$prev\''
            }
        },
        right: {
            type: 'input',
            input: 'switch',
            label: 'Right',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-tabs)** - Aligns tabs to the right'
            }
        },
        'show-arrows': {
            type: 'input',
            input: 'switch',
            label: 'Show-arrows',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-tabs)** - Show pagination arrows if the tab items overflow their container. For mobile devices, arrows will only display when using this prop.'
            }
        },
        'slider-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Slider-color',
            props: {
                hint: '**COMPONENT (v-tabs)** - Changes the background color of an auto-generated `v-tabs-slider`',
                placeholder: 'undefined'
            }
        },
        vertical: {
            type: 'input',
            input: 'switch',
            label: 'Vertical',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-tabs)** - Stacks tabs on top of each other vertically.'
            }
        }
    },
    events: [
        {
            id: 'change',
            title: '**SPECIAL (undefined)** - Emitted when tab is changed by user interaction'
        }
    ],
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
