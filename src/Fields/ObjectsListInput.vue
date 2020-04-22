<template>
  <div :class="`vf-input d-flex flex-column ${field.class}`">
    <label :class="field.props && field.props.error ? 'red--text':''">{{ field.label }}</label>
    <div class="row ma-0">
      <v-checkbox
        v-for="item in field.objects"
        :key="`${id}-checkbox-${item[decorator.id]}`"
        v-model="value[item[decorator.id]]"
        :class="`ma-0 pa-0 me-4 ${item.props ? item.props.class:null}`"
        :label="getLabel(item)"
        v-bind="getProps(item)"
      ></v-checkbox>
    </div>
    <div class="d-flex flex-column" v-if="field.props && field.props.error">
      <div
        v-for="(err,index) in field.props['error-messages']"
        :key="`${id}-error-${index}`"
        class="red--text"
      >{{ err }}</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'vf-objects-list-input',
    props: {
        id: String,
        field: Object,
        value: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        decorator: function () {
            return {
                id: this.field.decorator ? this.field.decorator.id : 'id',
                title: this.field.decorator ? this.field.decorator.title : 'title',
                label: this.field.decorator ? this.field.decorator.label : ':id#:title'
            }
        }
    },
    methods: {
        getProps: function (item) {
            return {
                ...this.field.props,
                ...(item.props ? item.props : {})
            }
        },
        getLabel: function (item) {
            const decorator = this.decorator
            return decorator.label
                .replace(':id', item[decorator.id])
                .replace(':title', item[decorator.title])
        }
    },
    watch: {
        value: function () {
            this.$emit('input', this.value)
        }
    }
}
</script>
