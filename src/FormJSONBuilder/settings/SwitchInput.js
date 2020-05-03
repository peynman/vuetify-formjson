import {
    CommonInputEssentials,
    CommonInputDecorates,
    MessagesTab,
    CommonInputProps
} from './comon'

export default {
    ...CommonInputEssentials,
    props: {
        type: 'row',
        fields: {
            ...CommonInputDecorates,
            ...CommonInputProps,
            inset: {
                type: 'input',
                input: 'switch',
                class: 'col-4 ma-0 pe-0 ps-0',
                label: 'Inset'
            },
            multiple: {
                type: 'input',
                input: 'switch',
                class: 'col-4 ma-0 pe-0 ps-0',
                label: 'Multiple'
            },
            messages: MessagesTab
        }
    }
}
