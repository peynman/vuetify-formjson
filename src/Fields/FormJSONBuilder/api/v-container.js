export default {
    fields: {
        fluid: {
            type: 'input',
            input: 'switch',
            label: 'Fluid',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-container'
            }
        },
        id: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Id',
            props: {
                hint: '**GENERIC (v-container)** - Sets the DOM id on the component',
                placeholder: 'undefined'
            }
        },
        tag: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Tag',
            props: {
                hint: '**MISSING DESCRIPTION** - v-container',
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
