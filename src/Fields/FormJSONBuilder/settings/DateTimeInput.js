import {
    CommonInputEssentials,
    BaseInputSettings,
    MessagesTab,
    CheckboxSettings
} from './comon'

import api from './../api'

export default class BitwiseFlagsInputSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return [
            {
                id: 'props',
                title: 'Component events',
                events: [
                    ...api.VTextField.events
                ]
            },
            {
                id: 'dateProps',
                title: 'Date Picker Events',
                events: [
                    {
                        ...api.VDatePicker.events
                    }
                ]
            },
            {
                id: 'timeProps',
                title: 'Time Picker Events',
                events: [
                    {
                        ...api.VTimePicker.events
                    }
                ]
            },
            {
                id: 'calendarProps',
                title: 'Calendar Picker Events',
                events: [
                    {
                        ...api.VSelect.events
                    }
                ]
            },
            {
                id: 'timezoneProps',
                title: 'Timezone Picker Events',
                events: [
                    {
                        ...api.VAutocomplete.events
                    }
                ]
            }
        ]
    }

    getInputProperties () {
        return {
            ...CommonInputEssentials,
            hideTimezones: CheckboxSettings('Hide Timezones'),
            hideCalendars: CheckboxSettings('Hide Calendars'),
            props: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    ...api.VTextField.fields,
                    messages: MessagesTab
                }
            },
            dateProps: {
                fields: {
                    ...api.VDatePicker.fields
                }
            },
            timeProps: {
                fields: {
                    ...api.VTimePicker.fields
                }
            },
            timezoneProps: {
                fields: {
                    ...api.VSelect.fields
                }
            },
            calendarProps: {
                fields: {
                    ...api.VAutocomplete.fields
                }
            }
        }
    }
}
