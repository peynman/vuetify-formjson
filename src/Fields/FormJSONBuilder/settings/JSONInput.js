import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings
} from './comon'

export default class JSONInputSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: [
                    {
                        id: 'change:error',
                        title: 'Triggers when there is an error in json string'
                    },
                    {
                        id: 'change:success',
                        title: 'Triggers when json is changed and is valid'
                    }
                ]
            }
        ]
    }

    getInputProperties () {
        return {
            ...CommonInputEssentials,
            props: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    messages: MessagesTab
                }
            }
        }
    }
}
