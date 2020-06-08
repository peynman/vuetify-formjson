import VuetifyFormJSON from './VuetifyFormJSON.vue'

import VFFormBuilder from './Fields/FormJSONBuilder/FormJSONBuilder.vue'
import VFTextInput from './Fields/TextInput.vue'
import VFColorInput from './Fields/ColorInput.vue'
import VFButtonGroupInput from './Fields/ButtonGroupInput.vue'
import VFSelectInput from './Fields/SelectInput.vue'
import VFRangeInput from './Fields/RangeInput.vue'
import VFSwitchInput from './Fields/SwitchInput.vue'
import VFAutocompleteInput from './Fields/AutocompleteInput.vue'
import VFMultiTextInput from './Fields/MultiTextInput.vue'
import VFFieldsRenderer from './Fields/FieldsRenderer.vue'
import VFJSONInput from './Fields/JSONInput.vue'
import VFCheckboxInput from './Fields/CheckboxInput.vue'
import VFObjectsListInput from './Fields/ObjectsListInput.vue'
import VFRadioGroupInput from './Fields/RadioGroupInput.vue'
import VFBitwiseFlagsInput from './Fields/BitwiseFlagsInput.vue'
import VFImageUploadInput from './Fields/ImageUploadInput.vue'
import VFDatatableInput from './Fields/DataTableInput.vue'
import VFButtonInput from './Fields/ButtonInput.vue'
import VFBlocklyInput from './Fields/Blockly/Blockly.vue'
import VFButtonsListInput from './Fields/ButtonsListInput.vue'
import VFMarkdownInput from './Fields/MarkdownInput/MarkdownInput.vue'
import VFCodeInput from './Fields/CodeInput.vue'
import VFCalendarInput from './Fields/CalendarInput.vue'
import VFDatetimeInput from './Fields/DateTimeInput.vue'
import VFMultiUploadInput from './Fields/MultiUploadInput.vue'
import VFAlertInput from './Fields/AlertInput.vue'

import VFGroupSingleExpansion from './Fields/GroupSingleExpansion.vue'
import VFGroupExpansion from './Fields/GroupExpansion.vue'
import VFGroupTabs from './Fields/GroupTabs.vue'
import VFGroupTreeview from './Fields/GroupTreeview.vue'
import FormJSONSchemaRenderer from './Fields/FormJSONBuilder/generator'

import VFParagraph from './Fields/Paragraph.vue'

export const customComponents = {
    [VuetifyFormJSON.name]: VuetifyFormJSON,
    [VFJSONInput.name]: VFJSONInput,
    [VFRadioGroupInput.name]: VFRadioGroupInput,
    [VFBitwiseFlagsInput.name]: VFBitwiseFlagsInput,
    [VFFieldsRenderer.name]: VFFieldsRenderer,
    [VFTextInput.name]: VFTextInput,
    [VFMultiTextInput.name]: VFMultiTextInput,
    [VFAutocompleteInput.name]: VFAutocompleteInput,
    [VFColorInput.name]: VFColorInput,
    [VFSwitchInput.name]: VFSwitchInput,
    [VFButtonGroupInput.name]: VFButtonGroupInput,
    [VFSelectInput.name]: VFSelectInput,
    [VFRangeInput.name]: VFRangeInput,
    [VFCheckboxInput.name]: VFCheckboxInput,
    [VFObjectsListInput.name]: VFObjectsListInput,
    [VFImageUploadInput.name]: VFImageUploadInput,
    [VFDatatableInput.name]: VFDatatableInput,
    [VFButtonInput.name]: VFButtonInput,
    [VFButtonsListInput.name]: VFButtonsListInput,
    [VFBlocklyInput.name]: VFBlocklyInput,
    [VFMarkdownInput.name]: VFMarkdownInput,
    [VFCodeInput.name]: VFCodeInput,
    [VFMultiUploadInput.name]: VFMultiUploadInput,
    [VFDatetimeInput.name]: VFDatetimeInput,
    [VFCalendarInput.name]: VFCalendarInput,
    [VFAlertInput.name]: VFAlertInput,

    [VFGroupExpansion.name]: VFGroupExpansion,
    [VFGroupSingleExpansion.name]: VFGroupSingleExpansion,
    [VFGroupTabs.name]: VFGroupTabs,
    [VFGroupTreeview.name]: VFGroupTreeview,
    [VFFormBuilder.name]: VFFormBuilder,

    [VFParagraph.name]: VFParagraph
}

const FormBuilderInputsList = []
for (const key in customComponents) {
    if (customComponents[key].name) {
        const parts = customComponents[key].name.split('-')
        if (parts[0] === 'vf') {
            const title = parts.splice(1)
            title[0] = title[0].slice(0, 1).toUpperCase() + title[0].slice(1)
            FormBuilderInputsList.push({
                id: customComponents[key].name,
                title: title.join(' '),
                editor: customComponents[key].editor
            })
        }
    }
}
FormBuilderInputsList.push({
    id: 'group',
    title: 'Group'
})
FormBuilderInputsList.push({
    id: 'component',
    title: 'Custom Component'
})
FormBuilderInputsList.sort((a, b) => ('' + a.title).localeCompare(b.title))

export default {
    install (Vue, options) {
        const register = function (Vue, components) {
            for (const comp in components) {
                if (Object.prototype.hasOwnProperty.call(components, comp)) {
                    Vue.component(comp, components[comp])
                }
            }
        }

        register(Vue, customComponents)
        Vue.config.performance = true
    },

    VuetifyFormJSON,
    VFTextInput,
    VFColorInput,
    VFButtonGroupInput,
    VFSelectInput,
    VFRangeInput,
    VFSwitchInput,
    VFJSONInput,
    VFCheckboxInput,
    VFObjectsListInput,
    VFRadioGroupInput,
    VFBitwiseFlagsInput,
    VFImageUploadInput,
    VFDatatableInput,
    VFButtonInput,
    VFBlocklyInput,
    VFButtonsListInput,
    VFMarkdownInput,
    FormJSONSchemaRenderer,
    VFCodeInput,
    VFMultiUploadInput,
    VFDatetimeInput,
    VFCalendarInput,
    VFAlertInput,

    VFGroupSingleExpansion,
    VFGroupExpansion,
    VFGroupTabs,
    VFGroupTreeview,
    VFFormBuilder,

    FormBuilderInputsList
}
