<template>
  <v-autocomplete
    v-model="value"
    :label="field.label"
    :class="`vf-input ${field.class}`"
    :items="field.objects"
    item-text="title"
    item-value="id"
    hide-details="auto"
    v-bind="fieldProps"
  ></v-autocomplete>
</template>

<script>
export default {
    name: 'vf-autocomplete-input',
    props: {
        id: String,
        field: Object,
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
        value: {
            deep: true,
            handler () {
                this.$emit('input', this.value)
            }
        }
    }
}
</script>
