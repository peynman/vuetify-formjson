<template>
  <v-text-field
    v-model="devalue"
    :label="field.label"
    :class="`vf-input ${field.class ? field.class:''}`"
    v-bind="fieldProps"
    hide-details="auto"
    @keyup.native="updateInput($event)"
    v-on="eventHandlers"
  >
  </v-text-field>
</template>
<script>
import BaseComponent from './mixins'

export default {
    mixins: [BaseComponent],
    name: 'vf-text-input',
    props: {
        id: String,
        field: Object,
        value: [Object, String]
    },
    methods: {
        updateInput: function (ev) {
            if (
                !this.field.updateKeyCodes ||
                this.field.updateKeyCodes.length === 0 ||
                this.field.updateKeyCodes.includes(ev.keyCode)
            ) { // update input on tab/enter pressed
                this.$emit('input', this.devalue)
            }
        }
    }
}
</script>
