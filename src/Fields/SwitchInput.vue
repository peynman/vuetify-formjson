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
import { VSwitch } from 'vuetify/lib'

export default {
    components: {
        VSwitch
    },
    mixins: [BaseComponent],
    name: 'vf-switch-input',
    props: {
        id: String,
        field: Object,
        value: [Object, Boolean]
    },
    methods: {
        updateInput: function () {
            this.$emit('input', this.devalue)
        }
    }
}
</script>
