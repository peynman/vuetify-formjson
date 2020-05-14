export default {
    fields: {
        'active-class': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Active-class',
            props: {
                hint: '**MIXIN (routable)** - Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.',
                placeholder: 'undefined'
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
        flat: {
            type: 'input',
            input: 'switch',
            label: 'Flat',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-card)** - Removes the card\'s elevation.'
            }
        },
        hover: {
            type: 'input',
            input: 'switch',
            label: 'Hover',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-card)** - Will apply an elevation of 4dp when hovered (default 2dp). You can find more information on the [elevation page](/styles/elevation).'
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
        img: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Img',
            props: {
                hint: '**COMPONENT (v-card)** - Specifies an image background for the card. For more advanced implementations, it is recommended that you use the [v-img](/components/images) component. You can find a [v-img example here](#media-with-text).',
                placeholder: 'undefined'
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
        outlined: {
            type: 'input',
            input: 'switch',
            label: 'Outlined',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-card)** - Removes card elevation shadow and adds a thin border.'
            }
        },
        raised: {
            type: 'input',
            input: 'switch',
            label: 'Raised',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-card)** - Specifies a higher default elevation (8dp). You can find more information on the [elevation page](/styles/elevation).'
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
        shaped: {
            type: 'input',
            input: 'switch',
            label: 'Shaped',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-card)** - Applies a large border radius on the top left and bottom right of the card.'
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
        }
    },
    events: [
        {
            id: 'click',
            title: '**SELF** - Emitted when component is clicked - Will trigger component to ripple when clicked unless the `.native` modifier is used'
        }
    ],
    slots: [
        {
            id: 'progress',
            title: '**GENERIC (undefined)** - Slot for custom progress linear (displayed when **loading** prop is not equal to Boolean False)'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
