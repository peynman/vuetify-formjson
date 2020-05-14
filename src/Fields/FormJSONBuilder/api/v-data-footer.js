export default {
    fields: {
        'disable-items-per-page': {
            type: 'input',
            input: 'switch',
            label: 'Disable-items-per-page',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-data-footer'
            }
        },
        'disable-pagination': {
            type: 'input',
            input: 'switch',
            label: 'Disable-pagination',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-data-footer'
            }
        },
        'first-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'First-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-data-footer',
                placeholder: '\'$first\''
            }
        },
        'items-per-page-all-text': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Items-per-page-all-text',
            props: {
                hint: '**MISSING DESCRIPTION** - v-data-footer',
                placeholder: '\'$vuetify.dataFooter.itemsPerPageAll\''
            }
        },
        'items-per-page-text': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Items-per-page-text',
            props: {
                hint: '**MISSING DESCRIPTION** - v-data-footer',
                placeholder: '\'$vuetify.dataFooter.itemsPerPageText\''
            }
        },
        'last-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Last-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-data-footer',
                placeholder: '\'$last\''
            }
        },
        'next-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Next-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-data-footer',
                placeholder: '\'$next\''
            }
        },
        'page-text': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Page-text',
            props: {
                hint: '**MISSING DESCRIPTION** - v-data-footer',
                placeholder: '\'$vuetify.dataFooter.pageText\''
            }
        },
        'prev-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Prev-icon',
            props: {
                hint: '**MISSING DESCRIPTION** - v-data-footer',
                placeholder: '\'$prev\''
            }
        },
        'show-current-page': {
            type: 'input',
            input: 'switch',
            label: 'Show-current-page',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-data-footer'
            }
        },
        'show-first-last-page': {
            type: 'input',
            input: 'switch',
            label: 'Show-first-last-page',
            class: 'col-4 mx-0',
            props: {
                hint: '**MISSING DESCRIPTION** - v-data-footer'
            }
        }
    },
    events: [
        {
            id: 'update:options',
            title: '**MISSING DESCRIPTION** - undefined'
        }
    ],
    slots: [
        {
            id: 'page-text',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'page-text',
            title: '**MISSING DESCRIPTION** - undefined'
        }
    ]
}
