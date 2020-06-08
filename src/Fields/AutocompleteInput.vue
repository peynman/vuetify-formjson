<template>
  <v-autocomplete
    v-model="devalue"
    :label="field.label"
    :class="`vf-input ${field.class ? field.class:''}`"
    :items="field.objects"
    item-text="title"
    item-value="id"
    hide-details="auto"
    v-bind="fieldProps"
    v-on="eventHandlers"
  ></v-autocomplete>
</template>

<script>
import BaseComponent from './mixins'
import { VAutocomplete } from 'vuetify/lib'
export default {
    components: {
        VAutocomplete
    },
    mixins: [BaseComponent],
    name: 'vf-autocomplete-input',
    props: {
        id: String,
        field: Object,
        value: [Array, String]
    },
    watch: {
        devalue: {
            deep: true,
            handler () {
                this.$emit('input', this.devalue)
            }
        }
    }
}
</script>
