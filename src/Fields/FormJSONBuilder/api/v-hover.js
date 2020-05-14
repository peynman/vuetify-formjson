export default {
    fields: {
        disabled: {
            type: 'input',
            input: 'switch',
            label: 'Disabled',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-hover'
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
            id: 'default',
            title: '**GENERIC (undefined)** - The default Vue slot.'
        }
    ]
}
