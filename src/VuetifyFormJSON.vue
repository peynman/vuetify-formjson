<template>
  <vf-fields-renderer :options="options" :id="formId" :fields="fields" v-model="value"></vf-fields-renderer>
</template>

<script>
export default {
    name: 'vuetify-formjson',
    props: {
        id: String,
        fields: Object,
        value: Object,
        options: Object
    },
    computed: {
        formId: function () {
            return this.id ? this.id : 'vuetify-formjson-#' + Math.random() * 10000
        }
    },
    watch: {
        value: {
            deep: true,
            handler: function () {
                this.$emit('input', this.value)
            }
        }
    }
}
</script>
