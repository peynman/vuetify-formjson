export default {
    fields: {
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
        dense: {
            type: 'input',
            input: 'switch',
            label: 'Dense',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-list-item'
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
        inactive: {
            type: 'input',
            input: 'switch',
            label: 'Inactive',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-list-item'
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
        nuxt: {
            type: 'input',
            input: 'switch',
            label: 'Nuxt',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (routable)** - Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).'
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
        selectable: {
            type: 'input',
            input: 'switch',
            label: 'Selectable',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-list-item'
            }
        },
        tag: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Tag',
            props: {
                hint: '**MIXIN (routable)** - Specify a custom tag used on the root element.',
                placeholder: '\'div\''
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
        'three-line': {
            type: 'input',
            input: 'switch',
            label: 'Three-line',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-list-item'
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
        'two-line': {
            type: 'input',
            input: 'switch',
            label: 'Two-line',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-list-item'
            }
        }
    },
    events: [
        {
            id: 'click',
            title: '**GENERIC (undefined)** - Event that is emitted when the component is clicked'
        },
        {
            id: 'keydown',
            title: '**MISSING DESCRIPTION** - undefined'
        }
    ],
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
