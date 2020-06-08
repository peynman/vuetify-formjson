<template>
  <v-btn
    :class="`vf-input vf-btn ${field.class ? field.class:''}`"
    @click="onButtonClick"
    v-bind="fieldProps"
    v-on="eventHandlers"
  >
    <span v-if="field.label">{{ field.label }}</span>
    <v-icon v-if="field.icon" v-bind="field.iconProps">{{ field.icon }}</v-icon>
  </v-btn>
</template>

<script>
import BaseComponent from './mixins'
import { VBtn, VIcon } from 'vuetify/lib'
export default {
    components: {
        VBtn, VIcon
    },
    mixins: [BaseComponent],
    name: 'vf-button-input',
    props: {
        id: String,
        field: Object
    },
    methods: {
        onButtonClick: function (e) {
            if (this.field.props && this.field.props.click) {
                this.field.props.click(e)
            }
        }
    }
}
</script>
