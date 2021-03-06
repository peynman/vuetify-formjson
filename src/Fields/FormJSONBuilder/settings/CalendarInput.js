import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings
} from './comon'

export default class ColorInputSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return []
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
