<template>
  <v-slider
    v-model="value"
    :label="field.label"
    :class="`vf-input ${field.class}`"
    thumb-label
    hide-details="auto"
    v-bind="fieldProps"
    @change="updateInput"
  >
  </v-slider>
</template>

<script>
export default {
    name: 'vf-range-input',
    props: {
        id: String,
        field: Object,
        value: Number
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
