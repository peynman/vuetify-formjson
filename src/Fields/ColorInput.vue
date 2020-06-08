<template>
  <v-text-field
    v-model="devalue"
    :class="`vf-input ${field.class ? field.class:''}`"
    :label="field.label"
    hide-details="auto"
    mask="####"
    v-bind="fieldProps"
    @keyup.native="colorTextChanged($event)"
    v-on="eventHandlers"
  >
    <template v-slot:prepend-inner>
      <v-menu
        top
        nudge-bottom="105"
        nudge-left="16"
        v-model="colorsMenu"
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on }">
          <div
            :style="{
                        border: '1px solid black',
                        backgroundColor: value,
                        cursor: 'pointer',
                        height: '16px',
                        width: '16px',
                        marginTop: '2px',
                        borderRadius: '5px',
                        transition: 'border-radius 200ms ease-in-out'
                    }"
            v-on="on"
          />
        </template>
        <v-card>
          <v-card-text class="pa-0">
            <v-color-picker
              :value="getColorValue"
              @update:color="colorSelected"
              v-bind="pickerProps"
              v-on="pickerProps['v-on'] ? pickerProps['v-on']: {}"
            />
          </v-card-text>
        </v-card>
      </v-menu>
    </template>
  </v-text-field>
</template>

<script>
import BaseComponent from './mixins'
import { VTextField, VCard, VCardText, VColorPicker, VMenu } from 'vuetify/lib'
export default {
    components: {
        VTextField, VCard, VCardText, VColorPicker, VMenu
    },
    mixins: [BaseComponent],
    name: 'vf-color-input',
    props: {
        id: String,
        field: Object,
        value: String
    },
    data () {
        return {
            colorsMenu: false
        }
    },
    computed: {
        getColorValue: function () {
            return this.devalue
        },
        pickerProps: function () {
            return {
                ...this.field.picker
            }
        }
    },
    methods: {
        colorTextChanged: function (ev) {
            this.$emit('input', this.devalue)
        },
        colorSelected: function (c) {
            if (this.colorsMenu) {
                this.devalue = c.hexa
                this.$emit('input', this.devalue)
            }
        }
    }
}
</script>
