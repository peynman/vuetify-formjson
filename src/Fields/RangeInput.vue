<template>
  <v-slider
    v-model="devalue"
    :label="field.label"
    :class="`vf-input ${field.class ? field.class:''}`"
    thumb-label
    hide-details="auto"
    v-bind="fieldProps"
    @change="updateInput"
  >
  </v-slider>
</template>

<script>
export default {
    name: 'vf-range-input',
    props: {
        id: String,
        field: Object,
        value: Number
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
