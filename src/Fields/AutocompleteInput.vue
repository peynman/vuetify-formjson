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
  ></v-autocomplete>
</template>

<script>
export default {
    name: 'vf-autocomplete-input',
    props: {
        id: String,
        field: Object,
        value: [Array, String]
    },
    data () {
        return {
            devalue: this.value
        }
    },
    computed: {
        fieldProps: function () {
            return {
                ...this.field.props
            }
        }
    },
    watch: {
        devalue: {
            deep: true,
            handler () {
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
