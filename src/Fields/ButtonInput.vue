<template>
  <v-btn
    :class="`vf-input vf-btn ${field.class ? field.class:''}`"
    v-bind="fieldProps"
    @click="onButtonClick"
  >
    <span v-if="field.label">{{ field.label }}</span>
    <v-icon v-if="field.icon" v-bind="fieldIconProps">{{ field.icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
    name: 'vf-button-input',
    props: {
        id: String,
        field: Object
    },
    computed: {
        fieldProps: function () {
            return {
                ...this.field.props
            }
        },
        fieldIconProps: function () {
            return {
                ...this.field.props,
                ...this.field.iconProps
            }
        }
    },
    methods: {
        onButtonClick: function (e) {
            if (this.field.props && this.field.props.click) {
                this.field.props.click(e)
            }
        }
    }
}
</script>
