<template>
  <v-expansion-panels :class="`v-group ${field.class}`" v-bind="fieldProps">
    <v-expansion-panel
      v-for="(item, key) in field.groups"
      :key="`${id}-group-expansion-${key}`"
    >
      <v-expansion-panel-header>{{item.label}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <vf-fields-renderer v-model="value[key]" :options="item.options" :fields="item.fields" :id="`${id}-expansion-fields`"></vf-fields-renderer>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
    name: 'vf-group-expansions',
    props: {
        field: Object,
        id: String,
        value: {
            type: Object,
            default: () => ({})
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
        value: {
            deep: true,
            handler: function () {
                console.log('expan', this.value)
                this.$emit('input', this.value)
            }
        }
    }
}
</script>
