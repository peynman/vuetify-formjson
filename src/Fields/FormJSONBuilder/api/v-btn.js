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
        block: {
            type: 'input',
            input: 'switch',
            label: 'Block',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn'
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
        dark: {
            type: 'input',
            input: 'switch',
            label: 'Dark',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
            }
        },
        depressed: {
            type: 'input',
            input: 'switch',
            label: 'Depressed',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn'
            }
        },
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (routable)** - Removes the ability to click or target the component.'
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
        fab: {
            type: 'input',
            input: 'switch',
            label: 'Fab',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn'
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
        icon: {
            type: 'input',
            input: 'switch',
            label: 'Icon',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn'
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
                hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
            }
        },
        link: {
            type: 'input',
            input: 'switch',
            label: 'Link',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (routable)** - Designates that the component is a link. This is automatic when using the **href** or **to** prop.'
            }
        },
        loading: {
            type: 'input',
            input: 'switch',
            label: 'Loading',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn'
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
                hint: '**MISSING DESCRIPTION** - v-btn'
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
        'retain-focus-on-click': {
            type: 'input',
            input: 'switch',
            label: 'Retain-focus-on-click',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn'
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
        ripple: {
            type: 'input',
            input: 'switch',
            label: 'Ripple',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (routable)** - Applies the [v-ripple](/directives/ripples) directive.'
            }
        },
        rounded: {
            type: 'input',
            input: 'switch',
            label: 'Rounded',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn'
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
                hint: '**COMPONENT (v-sheet)** - Specify a custom tag used on the root element.',
                placeholder: '\'button\''
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
        text: {
            type: 'input',
            input: 'switch',
            label: 'Text',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn'
            }
        },
        tile: {
            type: 'input',
            input: 'switch',
            label: 'Tile',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-sheet)** - Removes the component\'s border-radius.'
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
        top: {
            type: 'input',
            input: 'switch',
            label: 'Top',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (positionable)** - Aligns the content towards the top.'
            }
        },
        type: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Type',
            props: {
                hint: '**MISSING DESCRIPTION** - v-btn',
                placeholder: '\'button\''
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
            id: 'click',
            title: '**GENERIC (undefined)** - Event that is emitted when the component is clicked'
        }
    ],
    slots: [
        {
            id: 'loader',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
