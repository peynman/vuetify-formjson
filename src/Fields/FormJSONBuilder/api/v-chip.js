export default {
    fields: {
        active: {
            type: 'input',
            input: 'switch',
            label: 'Active',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-chip)** - Determines whether the chip is visible or not.'
            }
        },
        'active-class': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Active-class',
            props: {
                hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.',
                placeholder: ''
            }
        },
        append: {
            type: 'input',
            input: 'switch',
            label: 'Append',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (routable)** - Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.'
            }
        },
        close: {
            type: 'input',
            input: 'switch',
            label: 'Close',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-chip)** - Adds remove button'
            }
        },
        'close-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Close-icon',
            props: {
                hint: '**COMPONENT (v-chip)** - Change the default icon used for **close** chips',
                placeholder: '\'$delete\''
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
                hint: '**SELF** - Disables the chip, making it un-selectable'
            }
        },
        draggable: {
            type: 'input',
            input: 'switch',
            label: 'Draggable',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-chip)** - Makes the chip draggable'
            }
        },
        exact: {
            type: 'input',
            input: 'switch',
            label: 'Exact',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (routable)** - Exactly match the link. Without this, \'/\' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.'
            }
        },
        'exact-active-class': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Exact-active-class',
            props: {
                hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.',
                placeholder: 'undefined'
            }
        },
        filter: {
            type: 'input',
            input: 'switch',
            label: 'Filter',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-chip)** - Displays a selection icon when selected'
            }
        },
        'filter-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Filter-icon',
            props: {
                hint: '**COMPONENT (v-chip)** - Change the default icon used for **filter** chips',
                placeholder: '\'$complete\''
            }
        },
        href: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Href',
            props: {
                hint: '**MIXIN (routable)** - Designates the component as anchor and applies the **href** attribute.',
                placeholder: 'undefined'
            }
        },
        label: {
            type: 'input',
            input: 'switch',
            label: 'Label',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-chip)** - Removes circle edges'
            }
        },
        large: {
            type: 'input',
            input: 'switch',
            label: 'Large',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (sizeable)** - Makes the component large.'
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
        link: {
            type: 'input',
            input: 'switch',
            label: 'Link',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Explicitly define the chip as a link'
            }
        },
        nuxt: {
            type: 'input',
            input: 'switch',
            label: 'Nuxt',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (routable)** - Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).'
            }
        },
        outlined: {
            type: 'input',
            input: 'switch',
            label: 'Outlined',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-chip)** - Removes background and applies border and text color'
            }
        },
        pill: {
            type: 'input',
            input: 'switch',
            label: 'Pill',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-chip)** - Remove `v-avatar` padding'
            }
        },
        replace: {
            type: 'input',
            input: 'switch',
            label: 'Replace',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (routable)** - Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.'
            }
        },
        ripple: {
            type: 'input',
            input: 'switch',
            label: 'Ripple',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (routable)** - Applies the [v-ripple](/directives/ripples) directive.'
            }
        },
        small: {
            type: 'input',
            input: 'switch',
            label: 'Small',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (sizeable)** - Makes the component small.'
            }
        },
        tag: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Tag',
            props: {
                hint: '**MIXIN (routable)** - Specify a custom tag used on the root element.',
                placeholder: '\'span\''
            }
        },
        target: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Target',
            props: {
                hint: '**MIXIN (routable)** - Designates the target attribute. This should only be applied when using the **href** prop.',
                placeholder: 'undefined'
            }
        },
        'text-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Text-color',
            props: {
                hint: '**GENERIC (v-chip)** - Applies a specified color to the control text',
                placeholder: 'undefined'
            }
        },
        to: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'To',
            props: {
                hint: '**MIXIN (routable)** - Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.',
                placeholder: 'undefined'
            }
        },
        'x-large': {
            type: 'input',
            input: 'switch',
            label: 'X-large',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (sizeable)** - Makes the component extra large.'
            }
        },
        'x-small': {
            type: 'input',
            input: 'switch',
            label: 'X-small',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (sizeable)** - Makes the component extra small.'
            }
        }
    },
    events: [
        {
            id: 'input',
            title: '**GENERIC (undefined)** - The updated bound model'
        },
        {
            id: 'click',
            title: '**SELF** - Emitted when component is clicked, toggles chip if contained in a chip group - Will trigger component to ripple when clicked unless the `.native` modifier is used'
        },
        {
            id: 'click:close',
            title: '**SELF** - Emitted when close icon is clicked'
        },
        {
            id: 'update:active',
            title: '**SELF** - Emitted when close icon is clicked, sets active to `false`'
        }
    ],
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
