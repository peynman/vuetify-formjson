export default {
    fields: {
        group: {
            type: 'input',
            input: 'switch',
            label: 'Group',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - scroll-x-reverse-transition'
            }
        },
        'hide-on-leave': {
            type: 'input',
            input: 'switch',
            label: 'Hide-on-leave',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - scroll-x-reverse-transition'
            }
        },
        'leave-absolute': {
            type: 'input',
            input: 'switch',
            label: 'Leave-absolute',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - scroll-x-reverse-transition'
            }
        },
        mode: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Mode',
            props: {
                hint: '**MISSING DESCRIPTION** - scroll-x-reverse-transition',
                placeholder: 'undefined'
            }
        },
        origin: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Origin',
            props: {
                hint: '**MISSING DESCRIPTION** - scroll-x-reverse-transition',
                placeholder: '\'top center 0\''
            }
        }
    }
}
