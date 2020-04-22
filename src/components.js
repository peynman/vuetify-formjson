import VuetifyFormJSON from './VuetifyFormJSON.vue'
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
import VFDatatableInput from './Fields/DatatableInput.vue'
import VFButtonInput from './Fields/ButtonInput.vue'

import VFColumn from './Fields/Column.vue'

import VFGroupSingleExpansion from './Fields/GroupSingleExpansion.vue'
import VFGroupExpansion from './Fields/GroupExpansion.vue'
import VFGroupTabs from './Fields/GroupTabs.vue'

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

    [VFGroupExpansion.name]: VFGroupExpansion,
    [VFGroupSingleExpansion.name]: VFGroupSingleExpansion,
    [VFGroupTabs.name]: VFGroupTabs,

    [VFColumn.name]: VFColumn
}

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
    },

    VFTextInput,
    VuetifyFormJSON,
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

    VFGroupSingleExpansion,
    VFGroupExpansion,
    VFGroupTabs,

    VFColumn
}
