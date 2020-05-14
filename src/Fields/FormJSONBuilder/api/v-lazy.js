export default {
    fields: {
        tag: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Tag',
            props: {
                hint: '**MISSING DESCRIPTION** - VLazy',
                placeholder: '\'div\''
            }
        },
        transition: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Transition',
            props: {
                hint: '**MISSING DESCRIPTION** - VLazy',
                placeholder: '\'fade-transition\''
            }
        }
    },
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
