<template>
  <v-slider
    v-model="devalue"
    :label="field.label"
    :class="`vf-input ${field.class ? field.class:''}`"
    thumb-label
    hide-details="auto"
    v-bind="fieldProps"
    @change="updateInput"
    v-on="eventHandlers"
  >
  </v-slider>
</template>

<script>
import BaseComponent from './mixins'
import { VSlider } from 'vuetify/lib'

export default {
    components: {
        VSlider
    },
    mixins: [BaseComponent],
    name: 'vf-range-input',
    props: {
        id: String,
        field: Object,
        value: Number
    },
    methods: {
        updateInput: function () {
            this.$emit('input', this.devalue)
        }
    }
}
</script>
