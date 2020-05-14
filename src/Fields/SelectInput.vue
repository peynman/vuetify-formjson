<template>
  <v-select
    v-model="devalue"
    :items="field.objects"
    :label="field.label"
    :multiple="field.multiple"
    :class="`vf-input ${field.class ? field.class:''}`"
    :menu-props="{ maxHeight: '400' }"
    hide-details="auto"
    item-text="title"
    item-value="id"
    v-bind="fieldProps"
    v-on="eventHandlers"
  >
    <template v-slot:item="{item}">
        <v-label>{{ getDecorableLabel(item) }}</v-label>
        <v-subheader v-if="decorator.subheader">{{ getDecorableProperty(item, 'subheader') }}</v-subheader>
    </template>
  </v-select>
</template>

<script>
import BaseComponent, { DecoratableComponent } from './mixins'

export default {
    mixins: [BaseComponent, DecoratableComponent],
    name: 'vf-select-input',
    props: {
        field: Object,
        id: String,
        value: [Array, String]
    },
    watch: {
        devalue: function () {
            this.$emit('input', this.devalue)
        }
    }
}
</script>
