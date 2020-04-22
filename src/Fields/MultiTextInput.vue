<template>
  <v-text-field
    ref="inputValue"
    v-model="value[current.id]"
    :label="field.label"
    :class="`vf-input ${field.class}`"
    hide-details="auto"
    v-bind="fieldProps"
    @input="updateInput()"
  >
    <template v-slot:[appendMode]>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn
            small
            dense
            rounded
            outlined
            v-on="on"
            class="w70 flex-row"
            color="secondary"
            @click="nextMode()"
          >
            {{ current.abbr ? current.abbr:current.title }}
            <v-icon small>{{ field.icon ? field.icon: 'chevron_right'}}</v-icon>
          </v-btn>
        </template>
        <span>{{ current.title }}</span>
      </v-tooltip>
    </template>
  </v-text-field>
</template>
<script>
export default {
    name: 'vf-multitext-input',
    props: {
        id: String,
        field: Object,
        value: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        fieldProps: function () {
            return {
                ...this.field.props,
                ...(this.current && this.current.props ? this.current.props : {})
            }
        },
        modes: function () {
            return this.field.modes
        },
        current: function () {
            return this.modes[this.currIndex]
        },
        appendMode: function () {
            return this.field.slot ? this.field.slot : 'prepend'
        }
    },
    data: () => ({
        currIndex: 0
    }),
    methods: {
        updateInput: function () {
            this.$emit('input', this.value)
        },
        nextMode () {
            this.currIndex =
        this.currIndex === this.modes.length - 1 ? 0 : this.currIndex + 1
        }
    },
    created () {
        if (typeof this.value === 'object' && this.value.id) {
            let indexer = 0
            const self = this
            this.modes.forEach(m => {
                if (m.id === self.value.id) {
                    self.currIndex = indexer
                }
                indexer++
            })
        }
        this.current = this.modes[this.currIndex]
    }
}
</script>
