<template>
  <v-select
    v-model="value"
    :items="field.objects"
    :label="field.label"
    :multiple="field.multiple"
    :class="`vf-input ${field.class}`"
    :menu-props="{ maxHeight: '400' }"
    hide-details="auto"
    item-text="title"
    item-value="id"
    v-bind="fieldProps"
  >
  </v-select>
</template>

<script>
export default {
    name: 'vf-select-input',
    props: {
        field: Object,
        id: String,
        value: [Array, String]
    },
    computed: {
        fieldProps: function () {
            return {
                ...this.field.props
            }
        }
    },
    watch: {
        value: function () {
            this.$emit('input', this.value)
        }
    }
}
</script>
