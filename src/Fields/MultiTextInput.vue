<template>
  <v-text-field
    ref="inputValue"
    v-model="devalue[current ? current.id: '']"
    :label="field.label"
    :class="`vf-input ${field.class ? field.class:''}`"
    hide-details="auto"
    v-bind="fieldProps"
    @input="updateInput()"
    v-on="eventHandlers"
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
import BaseComponent from './mixins'
import { VTooltip, VBtn, VIcon } from 'vuetify/lib'

export default {
    components: {
        VTooltip, VBtn, VIcon
    },
    mixins: [BaseComponent],
    name: 'vf-multitext-input',
    props: {
        id: String,
        field: Object,
        value: {
            type: Object,
            default: () => ({})
        }
    },
    data () {
        return {
            currIndex: 0
        }
    },
    computed: {
        modes: function () {
            if (this.field.modes) {
                return this.field.modes
            }

            return []
        },
        current: function () {
            if (this.modes.length > 0 && this.currIndex >= 0) {
                return this.modes[this.currIndex]
            }

            return null
        },
        appendMode: function () {
            return this.field.slot ? this.field.slot : 'prepend'
        }
    },
    methods: {
        updateInput () {
            this.$emit('input', this.devalue)
        },
        nextMode () {
            this.currIndex = this.currIndex === this.modes.length - 1 ? 0 : this.currIndex + 1
        },
        resetValue () {
            if (typeof this.devalue === 'object' && this.devalue.id) {
                let indexer = 0
                this.modes.forEach(m => {
                    if (m.id === self.devalue.id) {
                        this.currIndex = indexer
                    }
                    indexer++
                })
            }
        }
    },
    watch: {
        value: {
            deep: true,
            handler () {
                this.devalue = this.value
                this.resetValue()
            }
        }
    },
    created () {
        this.resetValue()
    }
}
</script>
