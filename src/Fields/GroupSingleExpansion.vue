<template>
  <v-expansion-panels :class="`v-group ${field.class}`" v-bind="fieldProps">
    <v-expansion-panel>
      <v-expansion-panel-header>{{field.label}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <vf-fields-renderer v-model="value" :options="field.options" :fields="field.fields" :id="`${id}-fields`"></vf-fields-renderer>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
    name: 'vf-group-single-exp',
    props: {
        field: Object,
        id: String,
        value: {
            type: Object,
            default: () => ({})
        }
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
            handler: function () {
                this.$emit('input', this.value)
            }
        }
    }
}
</script>
