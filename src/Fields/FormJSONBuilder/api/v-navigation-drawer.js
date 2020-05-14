export default {
    fields: {
        absolute: {
            type: 'input',
            input: 'switch',
            label: 'Absolute',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Applies **position: absolute** to the component.'
            }
        },
        app: {
            type: 'input',
            input: 'switch',
            label: 'App',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (applicationable)** - Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-content` component to function properly. You can more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop'
            }
        },
        bottom: {
            type: 'input',
            input: 'switch',
            label: 'Bottom',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-navigation-drawer)** - Expands from the bottom of the screen on mobile devices'
            }
        },
        clipped: {
            type: 'input',
            input: 'switch',
            label: 'Clipped',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-navigation-drawer)** - A clipped drawer rests under the application toolbar'
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
        'disable-resize-watcher': {
            type: 'input',
            input: 'switch',
            label: 'Disable-resize-watcher',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-navigation-drawer)** - Will automatically open/close drawer when resized depending if mobile or desktop.'
            }
        },
        'disable-route-watcher': {
            type: 'input',
            input: 'switch',
            label: 'Disable-route-watcher',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-navigation-drawer)** - Disables opening of navigation drawer when route changes'
            }
        },
        'expand-on-hover': {
            type: 'input',
            input: 'switch',
            label: 'Expand-on-hover',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-navigation-drawer)** - Collapses the drawer to a **mini-variant** until hovering with the mouse'
            }
        },
        fixed: {
            type: 'input',
            input: 'switch',
            label: 'Fixed',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Applies **position: fixed** to the component.'
            }
        },
        floating: {
            type: 'input',
            input: 'switch',
            label: 'Floating',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-navigation-drawer)** - A floating drawer has no visible container (no border-right)'
            }
        },
        'hide-overlay': {
            type: 'input',
            input: 'switch',
            label: 'Hide-overlay',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (overlayable)** - Hides the display of the overlay.'
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
        'mini-variant': {
            type: 'input',
            input: 'switch',
            label: 'Mini-variant',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-navigation-drawer)** - Condenses navigation drawer width, also accepts the **.sync** modifier. With this, the drawer will re-open when clicking it'
            }
        },
        'overlay-color': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Overlay-color',
            props: {
                hint: '**MIXIN (overlayable)** - Sets the overlay color.',
                placeholder: 'undefined'
            }
        },
        permanent: {
            type: 'input',
            input: 'switch',
            label: 'Permanent',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-navigation-drawer)** - The drawer remains visible regardless of screen size'
            }
        },
        right: {
            type: 'input',
            input: 'switch',
            label: 'Right',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-navigation-drawer)** - Places the navigation drawer on the right'
            }
        },
        src: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Src',
            props: {
                hint: '**COMPONENT (v-navigation-drawer)** - Specifies a [v-img](/components/images) as the component\'s background.',
                placeholder: 'undefined'
            }
        },
        stateless: {
            type: 'input',
            input: 'switch',
            label: 'Stateless',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-navigation-drawer)** - Remove all automated state functionality (resize, mobile, route) and manually control the drawer state'
            }
        },
        tag: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Tag',
            props: {
                hint: '**COMPONENT (v-navigation-drawer)** - Specify a custom tag used on the root element.',
                placeholder: '\'aside\''
            }
        },
        temporary: {
            type: 'input',
            input: 'switch',
            label: 'Temporary',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-navigation-drawer)** - A temporary drawer sits above its application and uses a scrim (overlay) to darken the background'
            }
        },
        touchless: {
            type: 'input',
            input: 'switch',
            label: 'Touchless',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-navigation-drawer)** - Disable mobile touch functionality'
            }
        }
    },
    events: [
        {
            id: 'input',
            title: '**GENERIC (undefined)** - The updated bound model'
        },
        {
            id: 'transitionend',
            title: '**SELF** - Emits event object when transition is complete.'
        },
        {
            id: 'update:mini-variant',
            title: '**SELF** - The `mini-variant.sync` event'
        }
    ],
    slots: [
        {
            id: 'append',
            title: '**SELF** - A slot at the bottom of the drawer'
        },
        {
            id: 'img',
            title: '**SELF** - Used to modify `v-img` properties when using the **src** prop'
        },
        {
            id: 'prepend',
            title: '**SELF** - A slot at the top of the drawer'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
