<template>
  <v-switch
    v-model="devalue"
    :label="field.label"
    :class="`vf-input ${field.class ? field.class:''}`"
    v-bind="fieldProps"
    hide-details="auto"
    @change="updateInput"
    v-on="eventHandlers"
  >
  </v-switch>
</template>

<script>
import BaseComponent from './mixins'

export default {
    mixins: [BaseComponent],
    name: 'vf-switch-input',
    props: {
        id: String,
        field: Object,
        value: Object
    },
    methods: {
        updateInput: function () {
            this.$emit('input', this.devalue)
        }
    }
}
</script>
