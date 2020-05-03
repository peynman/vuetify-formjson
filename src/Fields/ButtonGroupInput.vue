<template>
  <div :class="`vf-input d-flex flex-grow-1 flex-row flex-wrap align-center justify-space-between ${field.class ? field.class:''}`">
    <label class="flex-grow-0">{{field.label}}</label>
    <v-btn-toggle class="d-flex flex-grow-1 flex-row justify-end" v-model="devalue" v-bind="fieldProps">
      <div v-for="(btn, index) in field.objects" :key="`${id}-btn-grp-${index}`">
        <v-tooltip v-if="btn.title">
          <template v-slot:activator="{on}">
            <v-btn v-on="on" v-bind="getBtnFieldProps(btn)">
              <span class="text-sm" v-if="btn.label">{{btn.label}}</span>
              <v-icon v-if="btn.icon" v-bind="btn.iconProps">{{btn.icon}}</v-icon>
            </v-btn>
          </template>
          {{btn.title}}
        </v-tooltip>
        <v-btn v-else v-bind="getBtnFieldProps(btn)">
          <span class="text-sm" v-if="btn.label">{{btn.label}}</span>
          <v-icon v-if="btn.icon" v-bind="btn.iconProps">{{btn.icon}}</v-icon>
        </v-btn>
      </div>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
    name: 'vf-select-button-input',
    props: {
        field: Object,
        id: String,
        value: [Array, Number]
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
        getBtnFieldProps: function (btn) {
            return {
                ...this.field.props,
                ...btn.props
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
