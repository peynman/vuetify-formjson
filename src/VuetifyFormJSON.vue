<template>
  <vf-fields-renderer :options="options" :id="formId" :fields="fields" v-model="devalue"></vf-fields-renderer>
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
    data () {
        return {
            devalue: this.value
        }
    },
    computed: {
        formId: function () {
            return this.id ? this.id : 'vuetify-formjson-#' + Math.random() * 10000
        }
    },
    watch: {
        devalue: {
            deep: true,
            handler: function () {
                this.$emit('input', this.devalue)
            }
        },
        value: {
            deep: true,
            handler () {
                this.devalue = this.value
            }
        }
    }
}
</script>
