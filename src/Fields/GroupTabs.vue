<template>
  <v-tabs :class="`v-group ${field.class ? field.class:''}`" v-bind="fieldProps">
    <v-tab
      v-for="(item, key) in field.groups"
      :key="`${id}-tab-label-${key}`"
      :href="`#${id}-tab-${key}`"
    >
    <label>{{item.label}}</label>
    </v-tab>
    <v-tab-item
          v-for="(item, key) in field.groups"
          :key="`${id}-tab-item-${key}`"
          :value="`${id}-tab-${key}`"
    >
        <vf-fields-renderer v-model="devalue[key]" :options="item.options" :fields="item.fields" :id="`${id}-tab-fields`"></vf-fields-renderer>
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
    name: 'vf-group-tabs',
    props: {
        field: Object,
        id: String,
        value: {
            type: Object,
            default: () => ({})
        }
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
            handler: function () {
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
