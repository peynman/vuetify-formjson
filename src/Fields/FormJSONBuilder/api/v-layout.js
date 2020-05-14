export default {
    fields: {
        column: {
            type: 'input',
            input: 'switch',
            label: 'Column',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - null'
            }
        },
        id: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Id',
            props: {
                hint: '**GENERIC (v-layout)** - Sets the DOM id on the component',
                placeholder: 'undefined'
            }
        },
        reverse: {
            type: 'input',
            input: 'switch',
            label: 'Reverse',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - null'
            }
        },
        row: {
            type: 'input',
            input: 'switch',
            label: 'Row',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - null'
            }
        },
        wrap: {
            type: 'input',
            input: 'switch',
            label: 'Wrap',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - null'
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
