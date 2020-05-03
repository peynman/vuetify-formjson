<template>
  <div :class="`vf-input d-flex flex-column ${field.class ? field.class:''}`">
    <label :class="field.props && field.props.error ? 'red--text':''">{{ field.label }}</label>
    <div class="row ma-0">
      <v-radio-group v-model="devalue" :mandatory="false">
        <v-radio
          v-for="item in field.objects"
          :key="`${id}-checkbox-${item[decorator.id]}`"
          :class="`${item.class ? item.class:null}`"
          :value="item[decorator.id]"
          :label="getLabel(item)"
          v-bind="getProps(item)"
        ></v-radio>
      </v-radio-group>
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
    name: 'vf-radio-group-input',
    props: {
        id: String,
        field: Object,
        value: String
    },
    data () {
        return {
            devalue: this.value
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
