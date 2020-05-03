<template>
  <component :class="`ma-0 pa-0 ${options && options.class ? options.class : ''}`" :is="getRootComponent()" v-bind="getRootComponentProps()">
    <component
      v-for="(field, key) in fields"
      :ref="key"
      :key="`${id}-properties-${key}`"
      :is="getComponentForField(field)"
      v-model="devalue[key]"
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
        options: Object,
        onUpdated: Function
    },
    data () {
        return {
            devalue: this.value
        }
    },
    watch: {
        devalue: {
            deep: true,
            handler: function () {
                if (this.onUpdated) {
                    this.onUpdated(this.devalue)
                }
                this.$emit('input', this.devalue)
            }
        },
        value: {
            deep: true,
            handler () {
                this.devalue = this.value
            }
        }
    },
    methods: {
        getRootComponent () {
            if (this.options) {
                switch (this.options.type) {
                case 'col': return 'v-col'
                case 'component': return this.options.component
                }
            }
            return 'v-row'
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
                    props.field.class = this.options.class + (props.field.class ? ' ' + props.field.class : '')
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
