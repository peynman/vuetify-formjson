<template>
  <div
    :class="`vf-input d-flex flex-column ${field.class ? field.class:''}`"
  >
    <label class="ma-1">{{field.label}}</label>
    <v-image-input v-model="devalue" :image-quality="0.85" v-bind="fieldProps" v-on="eventHandlers" />
  </div>
</template>

<script>
import VuetifyImageInput from 'vuetify-image-input'
import BaseComponent from './mixins'

export default {
    mixins: [BaseComponent],
    components: {
        [VuetifyImageInput.name]: VuetifyImageInput
    },
    name: 'vf-image-upload-input',
    props: {
        id: String,
        field: Object,
        value: String
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
