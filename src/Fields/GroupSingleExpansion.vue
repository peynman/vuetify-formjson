<template>
  <v-expansion-panels :class="`v-group ${field.class ? field.class:''}`" v-bind="fieldProps" v-on="eventHandlers">
    <v-expansion-panel>
      <v-expansion-panel-header>{{field.label}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <vf-fields-renderer v-model="devalue" :options="field.options" :fields="field.fields" :id="`${id}-fields`"></vf-fields-renderer>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import BaseComponent from './mixins'
export default {
    mixins: [BaseComponent],
    name: 'vf-group-single-exp',
    props: {
        field: Object,
        id: String,
        value: {
            type: Object,
            default: () => ({})
        }
    },
    watch: {
        devalue: {
            deep: true,
            handler: function () {
                this.$emit('input', this.devalue)
            }
        }
    }
}
</script>
