<template>
  <v-select
    v-model="devalue"
    :items="field.objects"
    :label="field.label"
    :multiple="field.multiple"
    :class="`vf-input ${field.class ? field.class:''}`"
    :menu-props="{ maxHeight: '400' }"
    hide-details="auto"
    item-text="title"
    item-value="id"
    v-bind="fieldProps"
  >
  </v-select>
</template>

<script>
export default {
    name: 'vf-select-input',
    props: {
        field: Object,
        id: String,
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
        devalue: function () {
            this.$emit('input', this.devalue)
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
