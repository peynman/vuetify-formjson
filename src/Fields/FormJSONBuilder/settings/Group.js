import {
    BaseInputSettings
} from './comon'

export default class GroupExpansionSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return []
    }

    getInputProperties () {
        return {
            id: {
                type: 'input',
                input: 'text',
                label: 'ID',
                class: 'col-12 ma-0 ps-0 pe-0',
                updateKeyCodes: [13]
            },
            label: {
                type: 'input',
                input: 'text',
                label: 'Label',
                class: 'col-12 ma-0 ps-0 pe-0'
            }
        }
    }
}
