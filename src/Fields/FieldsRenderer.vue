<template>
  <component
    :class="`${options && options.formClass ? options.formClass : ''}`"
    :is="getRootComponent()"
    v-bind="getRootComponentProps()"
    >
    <component
      v-if="options && options.wrap && options.wrap.enabled !== false"
      :is="options.wrap.component"
      v-bind="options.wrap.props"
      :class="options.wrap.class"
    >
      <component
        :is="options.wrap.inside.component"
        :class="options.wrap.inside.class"
        v-for="(field, key) in visibleFields"
        :key="`${id}-properties-${key}`"
        v-bind="options.wrap.inside.props"
      >
        <component
          :ref="key"
          :is="getComponentForField(field)"
          v-model="devalue[key]"
          v-bind="getComponentPropsForField(field)"
        ></component>
      </component>
    </component>
    <component
      v-else
      :ref="key"
      v-for="(field, key) in visibleFields"
      :key="`${id}-properties-${key}`"
      :is="getComponentForField(field)"
      v-model="devalue[key]"
      v-bind="getComponentPropsForField(field)"
    ></component>
  </component>
</template>

<script>
import { VRow, VCol, VCard, VCardActions, VCardText, VCardTitle, VList, VListItem, VListItemTitle, VListItemTitleContent } from 'vuetify/lib'

export default {
    components: {
        VRow, VCol, VCard, VCardActions, VCardText, VCardTitle, VList, VListItem, VListItemTitle, VListItemTitleContent
    },
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
    computed: {
        visibleFields () {
            const filter = function (obj, predicate) {
                const result = {}; let key
                for (key in obj) {
                    if (obj[key] && !predicate(obj[key])) {
                        result[key] = obj[key]
                    }
                }
                return result
            }
            return filter(this.fields, (i) => i.hidden === true)
        }
    },
    watch: {
        devalue: {
            deep: true,
            handler: function () {
                if (this.onUpdated) {
                    this.onUpdated(this.devalue)
                }
                if (
                    this.options &&
          this.options['v-on'] &&
          this.options['v-on'].input
                ) {
                    this.options['v-on'].input(this.devalue)
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
                case 'col':
                    return VCol
                case 'component':
                    return this.options.component
                }
            }
            return VRow
        },
        getRootComponentProps () {
            if (this.options) {
                if (this.options.props) {
                    return this.options.props
                }
            }
            return {}
        },
        isVisibleField (field) {
            return field.visible !== false
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
            } else if (field.type === 'component') {
                return field.component
            } else if (field.fields) {
                return 'vf-fields-renderer'
            }
        }
    }
}
</script>
