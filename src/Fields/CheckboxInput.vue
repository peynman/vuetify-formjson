<template>
  <v-checkbox
    v-model="devalue"
    :label="field.label"
    :class="`vf-input ${field.class ? field.class:''}`"
    v-bind="fieldProps"
    hide-details="auto"
    @change="updateInput"
  ></v-checkbox>
</template>

<script>
export default {
    name: 'vf-checkbox-input',
    props: {
        id: String,
        field: Object,
        value: [Boolean, String, Number]
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
        updateInput: function (ev) {
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
