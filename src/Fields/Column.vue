<template>
  <v-col :class="`vf-column ${field.class}`" v-bind="field.props">
    <vf-fields-renderer
      :fields="field.fields"
      :options="field.options"
      v-model="value"
      :id="`${id}-row-fields`"
    ></vf-fields-renderer>
  </v-col>
</template>

<script>
export default {
    name: 'vf-column',
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
