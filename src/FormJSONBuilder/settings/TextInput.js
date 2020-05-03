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
    props: {
        type: 'row',
        fields: {
            type: {
                type: 'input',
                input: 'text',
                label: 'Input type'
            },
            value: {
                type: 'input',
                input: 'text',
                label: 'Input Value'
            },
            ...CommonInputDecorates,
            ...TextInputIconProps,
            ...TextInputDisplayProps,
            ...CommonInputProps,
            messages: MessagesTab
        }
    }
}
