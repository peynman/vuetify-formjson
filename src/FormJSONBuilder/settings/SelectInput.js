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
                    label: 'ID'
                },
                title: {
                    type: 'input',
                    input: 'text',
                    label: 'ID'
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
