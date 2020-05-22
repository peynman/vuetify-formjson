import {
    CommonInputEssentials,
    BaseInputSettings
} from './comon'

import api from './../api'

export default class ButtonInputSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: api.VBtn.events
            }
        ]
    }

    getInputProperties () {
        return {
            ...CommonInputEssentials,
            icon: {
                type: 'input',
                input: 'text',
                label: 'Icon'
            },
            props: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    ...api.VBtn.fields
                }
            },
            iconProps: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    ...api.VIcon.fields
                }
            }
        }
    }
}
