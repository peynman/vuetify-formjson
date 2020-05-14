export default {
    fields: {
        'align-self': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Align-self',
            props: {
                hint: '**MISSING DESCRIPTION** - v-col',
                placeholder: 'undefined'
            }
        },
        tag: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Tag',
            props: {
                hint: '**MISSING DESCRIPTION** - v-col',
                placeholder: '\'div\''
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
