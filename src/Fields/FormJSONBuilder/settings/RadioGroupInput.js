import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings
} from './comon'

import api from './../api'

export default class RadioGroupInputSettings extends BaseInputSettings {
    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: api.VRadioGroup.events
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
                    ...api.VRadioGroup.fields,
                    messages: MessagesTab
                }
            }
        }
    }
}
