<template>
  <v-tabs
    :class="`v-group ${field.class ? field.class:''}`"
    v-bind="fieldProps"
    v-on="eventHandlers"
  >
    <v-tabs-slider
      v-if="field.slider"
      :color="`${(field.slider.class ? field.slider.class : '')}`"
    ></v-tabs-slider>
    <v-tab
      v-for="(item, key) in field.groups"
      :key="`${id}-tab-label-${key}`"
      :href="`#${id}-tab-${key}`"
      v-on="getTabEvents(item)"
    >
      <label>{{item.label}}</label>
    </v-tab>
    <v-tab-item
      v-for="(item, key) in field.groups"
      :key="`${id}-tab-item-${key}`"
      :value="`${id}-tab-${key}`"
      v-on="getTabItemEvents(item)"
    >
      <vf-fields-renderer
        v-model="devalue[key]"
        :options="item.options"
        :fields="item.fields"
        :on-updated="item['onUpdated']"
        :id="`${id}-tab-fields`"
      ></vf-fields-renderer>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import BaseComponent from './mixins'
export default {
    mixins: [BaseComponent],
    name: 'vf-group-tabs',
    props: {
        field: Object,
        id: String,
        value: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        getTabItemEvents (item) {
            return {
                ...(item.tab && item.tab['v-on'] ? item.tab['v-on'] : {})
            }
        },
        getTabEvents (item) {
            return {
                ...(item.tabItem && item.tabItem['v-on'] ? item.tabItem['v-on'] : {})
            }
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
