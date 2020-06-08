<template>
  <v-checkbox
    v-model="devalue"
    :label="field.label"
    :class="`vf-input ${field.class ? field.class:''}`"
    hide-details="auto"
    @change="updateInput"
    v-bind="fieldProps"
    v-on="eventHandlers"
  ></v-checkbox>
</template>

<script>
import BaseComponent from './mixins'
import { VCheckbox } from 'vuetify/lib'
export default {
    components: {
        VCheckbox
    },
    mixins: [BaseComponent],
    name: 'vf-checkbox-input',
    props: {
        id: String,
        field: Object,
        value: [Boolean, String, Number]
    },
    methods: {
        updateInput: function (ev) {
            this.$emit('input', this.devalue)
        }
    }
}
</script>
