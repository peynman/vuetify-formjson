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
            max: {
                type: 'input',
                input: 'text',
                class: 'col-4 ps-0 pe-0',
                label: 'Max'
            },
            min: {
                type: 'input',
                input: 'text',
                class: 'col-4 ps-0 pe-0',
                label: 'Min'
            },
            step: {
                type: 'input',
                input: 'text',
                class: 'col-4 ps-0 pe-0',
                label: 'Step'
            },
            'thumb-size': {
                type: 'input',
                input: 'text',
                class: 'col-4 ps-0 pe-0',
                label: 'Thumb size'
            },
            'tick-size': {
                type: 'input',
                input: 'text',
                class: 'col-4 ps-0 pe-0',
                label: 'Thick size'
            },
            ticks: {
                type: 'input',
                input: 'select',
                objects: [
                    {
                        id: 'auto',
                        title: 'Auto'
                    },
                    {
                        id: true,
                        title: 'True'
                    },
                    {
                        id: false,
                        title: 'False'
                    }
                ],
                decorator: {
                    label: ':title'
                },
                class: 'col-12 ma-0 pe-0 ps-0',
                label: 'Hide details'
            },
            ...CommonInputDecorates,
            'loader-height': {
                type: 'input',
                input: 'text',
                label: 'Loader indicator height'
            },
            'inverse-label': {
                type: 'input',
                input: 'switch',
                class: 'col-4',
                label: 'Inverse label'
            },
            'thumb-label': {
                type: 'input',
                input: 'text',
                class: 'col-12',
                label: 'Thumb label'
            },
            'thumb-color': {
                type: 'input',
                input: 'color',
                class: 'col-4',
                label: 'Thumb color'
            },
            'track-color': {
                type: 'input',
                input: 'color',
                class: 'col-4',
                label: 'Track color'
            },
            'track-fill-color': {
                type: 'input',
                input: 'color',
                class: 'col-4',
                label: 'Track fill color'
            },
            'append-icon': {
                type: 'input',
                input: 'text',
                class: 'col-4 ma-0 pa-0',
                label: 'Append icon'
            },
            'prepend-icon': {
                type: 'input',
                input: 'text',
                label: 'Prepend icon'
            },
            ...CommonInputProps,
            messages: MessagesTab
        }
    }
}
