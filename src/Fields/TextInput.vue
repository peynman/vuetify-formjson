<template>
  <v-text-field
    v-model="value"
    :label="field.label"
    :class="`vf-input ${field.class}`"
    v-bind="fieldProps"
    hide-details="auto"
    @keyup.native="updateInput($event)"
  ></v-text-field>
</template>

<script>
export default {
    name: 'vf-text-input',
    props: {
        id: String,
        field: Object,
        value: Object,
        updateKeyCodes: {
            type: Array,
            default: () => ([])
        }
    },
    computed: {
        fieldProps: function () {
            return {
                ...this.field.props
            }
        }
    },
    methods: {
        updateInput: function (ev) {
            if (!this.updateKeyCodes || this.updateKeyCodes.length === 0 || this.updateKeyCodes.includes(ev.keyCode)) { // update input on tab/enter pressed
                this.$emit('input', this.value)
            }
        }
    }
}
</script>
