export default {
    fields: {
        'lazy-validation': {
            type: 'input',
            input: 'switch',
            label: 'Lazy-validation',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-form)** - If enabled, **value** will always be _true_ unless there are visible validation errors. You can still call `validate()` to manually trigger validation'
            }
        },
        value: {
            type: 'input',
            input: 'switch',
            label: 'Value',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-form)** - A boolean value representing the validity of the form.'
            }
        }
    },
    events: [
        {
            id: 'input',
            title: '**GENERIC (undefined)** - The updated bound model'
        },
        {
            id: 'submit',
            title: '**SELF** - Emitted when form is submitted'
        }
    ],
    slots: [
        {
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
