export default {
    fields: {
        absolute: {
            type: 'input',
            input: 'switch',
            label: 'Absolute',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Applies **position: absolute** to the component.'
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
                hint: '**COMPONENT (v-toolbar)** - Aligns the component towards the bottom.'
            }
        },
        'clipped-left': {
            type: 'input',
            input: 'switch',
            label: 'Clipped-left',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-app-bar)** - Designates that the application\'s `v-navigation-drawer` that is positioned on the left is below the app-bar.'
            }
        },
        'clipped-right': {
            type: 'input',
            input: 'switch',
            label: 'Clipped-right',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-app-bar)** - Designates that the application\'s `v-navigation-drawer` that is positioned on the right is below the app-bar.'
            }
        },
        collapse: {
            type: 'input',
            input: 'switch',
            label: 'Collapse',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Puts the toolbar into a collapsed state reducing its maximum width.'
            }
        },
        'collapse-on-scroll': {
            type: 'input',
            input: 'switch',
            label: 'Collapse-on-scroll',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-app-bar)** - Puts the app-bar into a collapsed state when scrolling.'
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
                hint: '**COMPONENT (v-toolbar)** - Reduces the height of the toolbar content to 48px (96px when using the **prominent** prop).'
            }
        },
        'elevate-on-scroll': {
            type: 'input',
            input: 'switch',
            label: 'Elevate-on-scroll',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-app-bar)** - Elevates the app-bar when scrolling.'
            }
        },
        extended: {
            type: 'input',
            input: 'switch',
            label: 'Extended',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop, and any of the other props that affect the height of the toolbar, e.g. **prominent**, **dense**, etc., **WITH THE EXCEPTION** of **height**.'
            }
        },
        'fade-img-on-scroll': {
            type: 'input',
            input: 'switch',
            label: 'Fade-img-on-scroll',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-app-bar)** - When using the **src** prop or `img` slot, will fade the image when scrolling.'
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
        flat: {
            type: 'input',
            input: 'switch',
            label: 'Flat',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Removes the toolbar\'s box-shadow.'
            }
        },
        floating: {
            type: 'input',
            input: 'switch',
            label: 'Floating',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Applies **display: inline-flex** to the component.'
            }
        },
        'hide-on-scroll': {
            type: 'input',
            input: 'switch',
            label: 'Hide-on-scroll',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-app-bar)** - Hides the app-bar when scrolling. Will still show the `extension` slot.'
            }
        },
        'inverted-scroll': {
            type: 'input',
            input: 'switch',
            label: 'Inverted-scroll',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-app-bar)** - Hides the app-bar when scrolling down and displays it when scrolling up.'
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
        prominent: {
            type: 'input',
            input: 'switch',
            label: 'Prominent',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Increases the height of the toolbar content to 128px.'
            }
        },
        'scroll-off-screen': {
            type: 'input',
            input: 'switch',
            label: 'Scroll-off-screen',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-app-bar)** - Hides the app-bar when scrolling. Will **NOT** show the `extension` slot.'
            }
        },
        'scroll-target': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Scroll-target',
            props: {
                hint: '**MIXIN (scrollable)** - Designates the element to target for scrolling events. Uses `window` by default.',
                placeholder: 'undefined'
            }
        },
        short: {
            type: 'input',
            input: 'switch',
            label: 'Short',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Reduce the height of the toolbar content to 56px (112px when using the **prominent** prop).'
            }
        },
        'shrink-on-scroll': {
            type: 'input',
            input: 'switch',
            label: 'Shrink-on-scroll',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-app-bar)** - Shrinks a **prominent** toolbar to a **dense** or **short** (default) one when scrolling.'
            }
        },
        src: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Src',
            props: {
                hint: '**COMPONENT (v-toolbar)** - Specifies a [v-img](/components/images) as the component\'s background.',
                placeholder: 'undefined'
            }
        },
        tag: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Tag',
            props: {
                hint: '**COMPONENT (v-sheet)** - Specify a custom tag used on the root element.',
                placeholder: '\'header\''
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
        value: {
            type: 'input',
            input: 'switch',
            label: 'Value',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (toggleable)** - Controls whether the component is visible or hidden.'
            }
        }
    },
    slots: [
        {
            id: 'extension',
            title: '**SELF** - Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop. If this slot has no content, the **extended** prop may be used instead.'
        },
        {
            id: 'img',
            title: '**SELF** - Expects the [v-img](/components/images) component. Scoped **props** should be applied with `v-bind="props"`.'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
