<template>
  <v-expansion-panels
    :class="`v-group ${field.class ? field.class:''}`"
    v-bind="fieldProps"
    v-on="eventHandlers"
  >
    <v-expansion-panel v-for="(item, key) in field.groups" :key="`${id}-group-expansion-${key}`">
      <v-expansion-panel-header>{{item.label}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <vf-fields-renderer
          v-model="devalue[key]"
          :on-updated="item['onUpdated']"
          :options="item.options"
          :fields="item.fields"
          :id="`${id}-expansion-fields`"
        ></vf-fields-renderer>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import BaseComponent from './mixins'
import { VExpansionPanel, VExpansionPanels, VExpansionPanelContent, VExpansionPanelHeader } from 'vuetify/lib'
export default {
    components: {
        VExpansionPanel, VExpansionPanels, VExpansionPanelContent, VExpansionPanelHeader
    },
    mixins: [BaseComponent],
    name: 'vf-group-expansions',
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
