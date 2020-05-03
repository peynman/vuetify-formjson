<template>
  <v-switch
    v-model="devalue"
    :label="field.label"
    :class="`vf-input ${field.class ? field.class:''}`"
    v-bind="fieldProps"
    hide-details="auto"
    @change="updateInput"
  >
  </v-switch>
</template>

<script>
export default {
    name: 'vf-switch-input',
    props: {
        id: String,
        field: Object,
        value: Object
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
    methods: {
        updateInput: function () {
            this.$emit('input', this.devalue)
        }
    },
    watch: {
        value: {
            deep: true,
            handler () {
                this.devalue = this.value
            }
        }
    }
}
</script>
