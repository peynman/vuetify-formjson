export default {
    fields: {
        alt: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Alt',
            props: {
                hint: '**MISSING DESCRIPTION** - v-img',
                placeholder: 'undefined'
            }
        },
        contain: {
            type: 'input',
            input: 'switch',
            label: 'Contain',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-img'
            }
        },
        eager: {
            type: 'input',
            input: 'switch',
            label: 'Eager',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-img'
            }
        },
        gradient: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Gradient',
            props: {
                hint: '**MISSING DESCRIPTION** - v-img',
                placeholder: 'undefined'
            }
        },
        'lazy-src': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Lazy-src',
            props: {
                hint: '**MISSING DESCRIPTION** - v-img',
                placeholder: 'undefined'
            }
        },
        position: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Position',
            props: {
                hint: '**MISSING DESCRIPTION** - v-img',
                placeholder: '\'center center\''
            }
        },
        sizes: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Sizes',
            props: {
                hint: '**MISSING DESCRIPTION** - v-img',
                placeholder: 'undefined'
            }
        },
        src: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Src',
            props: {
                hint: '**MISSING DESCRIPTION** - v-img',
                placeholder: 'undefined'
            }
        },
        srcset: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Srcset',
            props: {
                hint: '**MISSING DESCRIPTION** - v-img',
                placeholder: 'undefined'
            }
        }
    },
    events: [
        {
            id: 'error',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'load',
            title: '**MISSING DESCRIPTION** - undefined'
        }
    ],
    slots: [
        {
            id: 'placeholder',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
