<template>
  <v-checkbox
    v-model="value"
    :label="field.label"
    :class="`vf-input ${field.class}`"
    v-bind="fieldProps"
    hide-details="auto"
    @change="updateInput"
  ></v-checkbox>
</template>

<script>
export default {
    name: 'vf-checkbox-input',
    props: {
        id: String,
        field: Object,
        value: [Boolean, String, Number]
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
            this.$emit('input', this.value)
        }
    }
}
</script>
