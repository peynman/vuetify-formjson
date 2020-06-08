<template>
  <div :class="`vf-input d-flex flex-column ${field.class ? field.class:''}`">
    <label :class="field.props && field.props.error ? 'red--text':''">{{ field.label }}</label>
    <div class="row ma-0">
      <v-radio-group v-model="devalue" :mandatory="false" v-bind="fieldProps" v-on="eventHandlers">
        <v-radio
          v-for="item in field.objects"
          :key="`${id}-checkbox-${item[decorator.id]}`"
          :class="`${item.class ? item.class:null}`"
          :value="item[decorator.id]"
          :label="getDecorableLabel(item)"
          v-bind="getProps(item)"
          v-on="getEvents(item)"
        ></v-radio>
      </v-radio-group>
    </div>
    <div class="d-flex flex-column" v-if="field.props && field.props.error">
      <div
        v-for="(err,index) in field.props['error-messages']"
        :key="`${id}-error-${index}`"
        class="red--text"
      >{{ err }}</div>
    </div>
  </div>
</template>

<script>
import BaseComponent, { DecoratableComponent } from './mixins'
import { VRadioGroup, VRadio } from 'vuetify/lib'

export default {
    components: {
        VRadioGroup,
        VRadio
    },
    mixins: [BaseComponent, DecoratableComponent],
    name: 'vf-radio-group-input',
    props: {
        id: String,
        field: Object,
        value: String
    },
    methods: {
        getProps: function (item) {
            return {
                ...this.field.itemProps,
                ...(item.props ? item.props : {})
            }
        },
        getEvents: function (item) {
            return {
                ...(item.props && item.props['v-on'] ? item.props['v-on'] : {})
            }
        }
    },
    watch: {
        devalue: function () {
            this.$emit('input', this.devalue)
        }
    }
}
</script>
