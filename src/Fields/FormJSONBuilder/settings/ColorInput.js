import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings
} from './comon'

import api from './../api'

export default class ColorInputSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: api.VTextField.events
            },
            {
                id: 'pickerProps',
                title: 'Color Picker events',
                events: api.VColorPicker.events
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
                    ...api.VDataTable.fields,
                    messages: MessagesTab
                }
            },
            pickerProps: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    ...api.VColorPicker.fields
                }
            }
        }
    }
}
