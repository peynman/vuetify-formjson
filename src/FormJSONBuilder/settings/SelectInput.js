import {
    CommonInputEssentials,
    CommonInputDecorates,
    MessagesTab,
    CommonInputProps,
    TextInputIconProps,
    TextInputDisplayProps
} from './comon'

export default {
    ...CommonInputEssentials,
    objects: {
        type: 'input',
        input: 'datatable',
        label: 'Available Items',
        class: 'col-12 ma-0 pa-0',
        props: {
            'disable-pagination': true,
            dense: true
        },
        columns: [
            {
                column: 'id',
                title: 'ID'
            },
            {
                column: 'title',
                title: 'Title'
            }
        ],
        create: {
            title: 'Add new message to messages list',
            fields: {
                id: {
                    type: 'input',
                    input: 'text',
                    class: 'col-6 pe-0 ps-0',
                    label: 'ID'
                },
                title: {
                    type: 'input',
                    input: 'text',
                    class: 'col-6 pe-0 ps-0',
                    label: 'Title'
                }
            }
        },
        edit: {},
        remove: {}
    },
    props: {
        type: 'row',
        fields: {
            ...CommonInputDecorates,
            ...TextInputIconProps,
            ...TextInputDisplayProps,
            ...CommonInputProps,
            messages: MessagesTab
        }
    }
}
