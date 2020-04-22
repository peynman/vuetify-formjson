<template>
  <v-switch
    v-model="value"
    :label="field.label"
    :class="`vf-input ${field.class}`"
    v-bind="fieldProps"
    hide-details="auto"
    @change="updateInput"
  >
  </v-switch>
</template>

<script>
export default {
    name: 'vf-switch-input',
    props: {
        id: String,
        field: Object,
        value: Object
    },
    computed: {
        fieldProps: function () {
            return {
                ...this.field.props
            }
        }
    },
    methods: {
        updateInput: function () {
            this.$emit('input', this.value)
        }
    }
}
</script>
