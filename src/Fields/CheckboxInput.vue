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
export default {
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
