import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings
} from './comon'

import api from './../api'

export default class DatatableInputSettings extends BaseInputSettings {
    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: api.VDataTable.events
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
            }
        }
    }
}
