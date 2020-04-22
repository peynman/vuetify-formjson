<template>
  <v-row class="ms-0" v-bind="field.props">
    <vf-fields-renderer :fields="field.fields" :options="field.options" v-model="value" :id="`${id}-row-fields`"></vf-fields-renderer>
  </v-row>
</template>

<script>
export default {
    name: 'vf-row',
    props: {
        value: {
            type: Object,
            default: () => ({})
        },
        id: String,
        field: Object
    }
}
</script>
