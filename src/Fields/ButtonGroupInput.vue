<template>
  <div :class="`vf-input d-flex flex-grow-1 flex-row flex-wrap align-center justify-space-between ${field.class ? field.class:''}`">
    <label class="flex-grow-0">{{field.label}}</label>
    <v-btn-toggle class="d-flex flex-grow-1 flex-row justify-end" v-model="devalue" v-bind="fieldProps" v-on="eventHandlers">
      <div v-for="(btn, index) in field.objects" :key="`${id}-btn-grp-${index}`">
        <v-tooltip v-if="btn.title">
          <template v-slot:activator="{on}">
            <v-btn v-on="on" v-bind="btn.props">
              <span class="text-sm" v-if="btn.label">{{btn.label}}</span>
              <v-icon v-if="btn.icon" v-bind="btn.iconProps">{{btn.icon}}</v-icon>
            </v-btn>
          </template>
          {{btn.title}}
        </v-tooltip>
        <v-btn v-else v-bind="btn.props" v-on="getBtnEvents(btn)">
          <span class="text-sm" v-if="btn.label">{{btn.label}}</span>
          <v-icon v-if="btn.icon" v-bind="btn.iconProps">{{btn.icon}}</v-icon>
        </v-btn>
      </div>
    </v-btn-toggle>
  </div>
</template>

<script>
import BaseComponent from './mixins'
import { VBtn, VIcon, VTooltip, VBtnToggle } from 'vuetify/lib'
export default {
    components: {
        VIcon, VTooltip, VBtnToggle, VBtn
    },
    mixins: [BaseComponent],
    name: 'vf-select-button-input',
    props: {
        field: Object,
        id: String,
        value: [Array, Number]
    },
    methods: {
        getBtnEvents (btn) {
            return btn.props && btn.props['v-on'] ? btn.props['v-on'] : {}
        }
    },
    watch: {
        devalue: function () {
            this.$emit('input', this.devalue)
        }
    }
}
</script>
