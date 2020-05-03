<template>
  <v-text-field
    v-model="devalue"
    :label="field.label"
    :class="`vf-input ${field.class ? field.class:''}`"
    v-bind="fieldProps"
    hide-details="auto"
    @keyup.native="updateInput($event)"
  ></v-text-field>
</template>

<script>
export default {
    name: 'vf-text-input',
    props: {
        id: String,
        field: Object,
        value: [Object, String]
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
            if (!this.field.updateKeyCodes || this.field.updateKeyCodes.length === 0 || this.field.updateKeyCodes.includes(ev.keyCode)) { // update input on tab/enter pressed
                this.$emit('input', this.devalue)
            }
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
