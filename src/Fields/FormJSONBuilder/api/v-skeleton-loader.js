export default {
    fields: {
        boilerplate: {
            type: 'input',
            input: 'switch',
            label: 'Boilerplate',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Remove the loading animation from the skeleton'
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
        light: {
            type: 'input',
            input: 'switch',
            label: 'Light',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
            }
        },
        loading: {
            type: 'input',
            input: 'switch',
            label: 'Loading',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Applies a loading animation with a on-hover loading cursor. A value of **false** will only work when there is content in the `default` slot.'
            }
        },
        tile: {
            type: 'input',
            input: 'switch',
            label: 'Tile',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Removes the component\'s border-radius.'
            }
        },
        transition: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Transition',
            props: {
                hint: '**MISSING DESCRIPTION** - VSkeletonLoader',
                placeholder: 'undefined'
            }
        },
        type: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Type',
            props: {
                hint: '**SELF** - A string delimited list of skeleton components to create such as `type="text@3"` or `type="card, list-item"`. Will recursively generate a corresponding skeleton from the provided string. Also supports short-hand for multiple elements such as **article@3** and **paragraph@2** which will generate 3 _article_ skeletons and 2 _paragraph_ skeletons. Please see below for a list of available pre-defined options.',
                placeholder: 'undefined'
            }
        }
    }
}
