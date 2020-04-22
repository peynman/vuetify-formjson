<template>
  <component class="ma-0 pa-0" :is="getRootComponent()" v-bind="getRootComponentProps()">
    <component
      v-for="(field, key) in fields"
      :ref="key"
      :key="`${id}-properties-${key}`"
      :is="getComponentForField(field)"
      v-model="value[key]"
      v-bind="getComponentPropsForField(field)"
    ></component>
  </component>
</template>

<script>
export default {
    name: 'vf-fields-renderer',
    props: {
        id: String,
        fields: Object,
        value: {
            type: Object,
            default: () => ({})
        },
        options: Object
    },
    watch: {
        value: {
            deep: true,
            handler: function () {
                this.$emit('input', this.value)
            }
        }
    },
    methods: {
        getRootComponent () {
            return this.options && this.options.type === 'col' ? 'v-col' : 'v-row'
        },
        getRootComponentProps () {
            if (this.options) {
                if (this.options.props) {
                    return this.options.props
                }
            }
            return {}
        },
        getComponentPropsForField (field, key) {
            if (!field.type || field.type === 'row' || field.type === 'col') {
                return {
                    fields: field.fields,
                    options: {
                        type: field.type ? field.type : 'row',
                        props: field.props,
                        ...field.options
                    }
                }
            }

            const props = {
                field: { ...field },
                id: `${this.id}-field-${key}`
            }
            if (this.options) {
                if (this.options.class) {
                    props.field.class =
            this.options.class +
            (props.field.class ? ' ' + props.field.class : '')
                }
                if (this.options.props) {
                    props.field.props = {
                        ...this.options.props,
                        ...(props.field.props ? props.field.props : {})
                    }
                }
            }

            return props
        },
        getComponentForField (field) {
            if (field.type === 'input' && field.input) {
                return `vf-${field.input}-input`
            } else if (field.type === 'group' && field.group) {
                return `vf-group-${field.group}`
            } else if (field.fields) {
                return 'vf-fields-renderer'
            }
        }
    }
}
</script>
