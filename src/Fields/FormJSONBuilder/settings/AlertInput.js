import {
    CommonInputEssentials,
    BaseInputSettings,
    TextSettings
} from './comon'

import api from './../api'

export default class AlertInputSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: api.VAlert.events
            }
        ]
    }

    getInputProperties () {
        return {
            ...CommonInputEssentials,
            message: TextSettings('Message'),
            props: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    ...api.VAlert.fields
                }
            }
        }
    }
}
