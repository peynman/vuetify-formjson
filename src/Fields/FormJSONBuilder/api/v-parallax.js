export default {
    fields: {
        alt: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Alt',
            props: {
                hint: '**MISSING DESCRIPTION** - v-parallax',
                placeholder: 'undefined'
            }
        },
        src: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Src',
            props: {
                hint: '**MISSING DESCRIPTION** - v-parallax',
                placeholder: 'undefined'
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
