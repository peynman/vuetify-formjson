<template>
  <div
    :class="`vf-input d-flex flex-column ${field.class}`"
  >
    <label class="ma-1">{{field.label}}</label>
    <v-image-input v-model="value" :image-quality="0.85" v-bind="fieldProps" />
  </div>
</template>

<script>
import VuetifyImageInput from 'vuetify-image-input'

export default {
    components: {
        [VuetifyImageInput.name]: VuetifyImageInput
    },
    name: 'vf-image-upload-input',
    props: {
        id: String,
        field: Object,
        value: String
    },
    computed: {
        fieldProps: function () {
            return {
                ...this.field.props
            }
        }
    },
    watch: {
        value: {
            deep: true,
            handler () {
                this.$emit('input', this.value)
            }
        }
    }
}
</script>
